import { useState } from 'react';
import { ArrowLeft, MessageCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import CursorEffect from '../components/CursorEffect';
import ChatInterface from '../components/ChatInterface';
import { Button } from '../components/ui/button';

const About = () => {
  const [showChat, setShowChat] = useState(false);

  const aboutSections = [
    {
      title: "Who I Am",
      content: "Hey there! I'm Yash, a passionate software developer who loves creating digital experiences that make a difference. I'm driven by curiosity and the endless possibilities that code can unlock."
    },
    {
      title: "My Journey",
      content: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or diving deep into the latest tech trends. I believe in writing clean, efficient code that not only works but tells a story."
    },
    {
      title: "What Drives Me",
      content: "My journey in tech started with a simple 'Hello, World!' and has grown into a passion for building scalable applications, solving complex problems, and mentoring fellow developers along the way."
    }
  ];

  return (
    <div className="min-h-screen relative">
      <CursorEffect />
      
      <div className="relative z-10 container mx-auto px-4 py-8 safe-area">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="ghost" className="glass-effect hover:bg-white/20">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Button
            variant="ghost"
            className="glass-effect hover:bg-white/20"
            onClick={() => setShowChat(true)}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Ask AI
          </Button>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="glass-effect w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">About Me</h1>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {aboutSections.map((section, index) => (
              <div key={index} className="glass-card p-6 lg:p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="glass-card p-6">
              <p className="text-gray-700 mb-4">Want to know more? Ask me anything!</p>
              <Button
                onClick={() => setShowChat(true)}
                className="glass-effect hover:bg-blue-500/20 text-blue-700"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ChatInterface
        isOpen={showChat}
        onClose={() => setShowChat(false)}
        initialQuery="Tell me about Yash's background and experience"
      />
    </div>
  );
};

export default About;