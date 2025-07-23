import { useState } from 'react';
import { ArrowLeft, MessageCircle, Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import CursorEffect from '../components/CursorEffect';
import ChatInterface from '../components/ChatInterface';
import { Button } from '../components/ui/button';

const Contact = () => {
  const [showChat, setShowChat] = useState(false);

  const contactMethods = [
    {
      platform: "Email",
      value: "yashpratapsingh1007@gmail.com",
      icon: Mail,
      link: "mailto:yashpratapsingh1007@gmail.com",
      color: "text-red-500"
    },
    {
      platform: "LinkedIn",
      value: "Professional Profile",
      icon: Linkedin,
      link: "https://linkedin.com/in/yash-pratap-singh",
      color: "text-blue-600"
    },
    {
      platform: "GitHub",
      value: "Code Repository",
      icon: Github,
      link: "https://github.com/yashpratapsingh1007",
      color: "text-gray-800"
    }
  ];

  const availableFor = [
    { icon: "💼", text: "Full-time opportunities" },
    { icon: "🚀", text: "Freelance projects" },
    { icon: "🤝", text: "Collaborations" },
    { icon: "💬", text: "Tech discussions" }
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
              <MessageSquare className="h-8 w-8 text-pink-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600">Let's connect and discuss opportunities, collaborations, or just have a chat about tech!</p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 text-center group hover:scale-105 transition-transform"
                >
                  <div className="glass-effect w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`h-6 w-6 ${method.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{method.platform}</h3>
                  <p className="text-gray-600 text-sm">{method.value}</p>
                </a>
              );
            })}
          </div>

          {/* Available For */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Available for</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {availableFor.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="glass-effect w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="glass-card p-6">
              <p className="text-gray-700 mb-4">Ask me how to reach out!</p>
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
        initialQuery="How can I get in touch with Yash?"
      />
    </div>
  );
};

export default Contact;