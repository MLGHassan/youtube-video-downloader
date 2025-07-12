import { useState } from 'react';

// Header component for the YouTube downloader
function Header() {
  return (
    <header className="relative z-10 p-6">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
             Youtube Video Downloader
        </h1>
    </header>
  );
}

// Main downloader section
function DownloaderSection() {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDownload = () => {
    if (!url.trim()) return;
    
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('This is a demo interface. In a real implementation, this would process the download.');
    }, 2000);
  };

  return (
    <section className="relative z-10 flex-1 flex items-center justify-center px-6">
      {/* Main downloader card with colorful hue glow */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl border-2 border-white/30 p-8 max-w-2xl w-full text-center shadow-2xl shadow-purple-500/20 ring-1 ring-purple-500/30">
        {/* Header text */}
        <h2 className="text-4xl font-bold text-white mb-2">
          YouTube Downloader
        </h2>
        <p className="text-lg text-white/80 mb-8 font-medium">
          Download educational videos for offline learning
        </p>
        
        {/* URL Input Section */}
        <div className="mb-6">
          <div className="bg-black/75 backdrop-blur-sm rounded-2xl border-2 border-white/20 p-4 mb-4">
            <input
              type="url"
              placeholder="Paste YouTube URL here (e.g., https://youtube.com/watch?v=...)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white/50 text-lg font-medium focus:outline-none"
            />
          </div>
          
          {/* Download button */}
          <button
            onClick={handleDownload}
            disabled={!url.trim() || isProcessing}
            className={`w-full px-8 py-4 text-white font-bold rounded-2xl border-2 transition-all duration-300 transform ${
              !url.trim() || isProcessing
                ? 'bg-gray-500/30 border-gray-400/40 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-500/30 to-pink-500/30 border-red-400/40 hover:from-red-500/40 hover:to-pink-500/40 hover:scale-105 shadow-lg shadow-red-500/30 ring-1 ring-red-400/50'
            }`}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Processing...
              </span>
            ) : (
              '📥 Download Video'
            )}
          </button>
        </div>

        {/* Quick info */}
        <div className="text-sm text-white/60 space-y-1">
          <p>• For educational purposes only</p>
          <p>• Supports multiple video qualities</p>
          <p>• Fast and secure downloads</p>
        </div>
      </div>
    </section>
  );
}

// Feature cards component - updated for downloader features
function FeatureCards() {
  const features = [
    {
      title: "High Quality Downloads",
      description: "Download videos in HD, 4K, and original quality",
      icon: "🎯"
    },
    {
      title: "Multiple Formats",
      description: "Support for MP4, MP3, and other popular formats",
      icon: "🎬"
    },
    {
      title: "Educational Focus",
      description: "Designed specifically for educational content",
      icon: "📚"
    }
  ];

  return (
    <section className="relative z-10 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose Youtube Video Downloader?
        </h3>
        
        {/* Feature grid with mixed styles */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            // Different styles for each card
            const cardStyles = [
              // First card: Shiny bevel border
              "bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/30 p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/10 ring-1 ring-white/20",
              // Second card: Purple colorful hue
              "bg-white/10 backdrop-blur-md rounded-2xl border-2 border-purple-400/40 p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 ring-1 ring-purple-400/50",
              // Third card: Blue colorful hue
              "bg-white/10 backdrop-blur-md rounded-2xl border-2 border-blue-400/40 p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 ring-1 ring-blue-400/50"
            ];
            
            return (
              <div 
                key={index}
                className={cardStyles[index]}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-white/70 font-medium">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Main App component
export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Apple-style animated background with subtle color hints */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle animated color orbs - Apple wallpaper style */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-pink-500/15 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/15 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-88 h-88 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Additional subtle moving gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-pink-900/10 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-900/10 via-transparent to-blue-900/10 animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Main content structure */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <DownloaderSection />
        <FeatureCards />
      </div>
    </div>
  );
}