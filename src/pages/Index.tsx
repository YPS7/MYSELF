import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Code, Settings, Mail, Star, Send } from 'lucide-react';
import FluidCursor from '../components/FluidCursor';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  const portfolioCards = [
    {
      title: "Me",
      description: "Learn about my journey, background, and what drives me as a developer",
      icon: User,
      route: "/about",
      query: "Tell me about Yash's background and experience"
    },
    {
      title: "Projects", 
      description: "Explore my latest work and technical implementations",
      icon: Code,
      route: "/projects",
      query: "Show me Yash's projects and technical work"
    },
    {
      title: "Skills",
      description: "Discover my technical expertise and proficiencies", 
      icon: Settings,
      route: "/skills",
      query: "What are Yash's technical skills and expertise?"
    },
    {
      title: "Work",
      description: "Explore my professional experience and career journey",
      icon: Star,
      route: "/work",
      query: "Tell me about Yash's work experience and career"
    },
    {
      title: "Contact",
      description: "Get in touch for opportunities and collaborations",
      icon: Mail,
      route: "/contact", 
      query: "How can I get in touch with Yash?"
    }
  ];

  const handleCardClick = (query: string) => {
    setShowChat(true);
  };

  return (
    <div className="min-h-screen relative">
      <FluidCursor />
      
      <div className="relative z-10 container mx-auto px-4 py-8 safe-area">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <a 
            href="mailto:yashpratapsingh1007@gmail.com"
            className="glass-effect px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-white/20 transition-colors"
          >
            💼 Looking for a talent?
          </a>
          <a 
            href="/src/assets/resume.pdf"
            download="Yash_Pratap_Singh_Resume.pdf"
            className="glass-effect px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-white/20 transition-colors"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="avatar-container w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
            <img 
              src="/src/assets/profile-placeholder.jpg" 
              alt="Yash Pratap Singh" 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextSibling) nextSibling.style.display = 'block';
              }}
            />
            <span className="text-4xl sm:text-6xl hidden">👨‍💻</span>
          </div>
          
          <p className="text-lg text-gray-600 mb-2">Hey, I'm Yash 👋</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-8">
            A Software Developer
          </h1>
          
          {/* Ask Me Anything Bar */}
          <div 
            className="glass-effect rounded-full p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 cursor-pointer hover:bg-white/30 transition-all max-w-md mx-auto"
            onClick={() => setShowChat(true)}
          >
            <input 
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none text-sm sm:text-base pointer-events-none"
              readOnly
            />
            <Send className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {portfolioCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Link
                key={index}
                to={card.route}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="glass-effect w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm lg:text-base mb-2">{card.title}</h3>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed hidden lg:block">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <ChatInterface
        isOpen={showChat}
        onClose={() => setShowChat(false)}
      />
    </div>
  );
};

export default Index;
