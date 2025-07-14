const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post('/download', (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).send('No URL provided');

  const filename = `video_${Date.now()}.mp4`;
  const filepath = path.join(__dirname, filename);
  const command = `yt-dlp -o "${filepath}" -f best ${url}`;

  exec(command, (error) => {
    if (error) {
      console.error('Error:', error);
      return res.status(500).send('Failed to download video');
    }

    res.download(filepath, () => {
      fs.unlinkSync(filepath); // Delete the file after sending
    });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
