import { useState } from 'react';
import { ArrowLeft, MessageCircle, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import CursorEffect from '../components/CursorEffect';
import ChatInterface from '../components/ChatInterface';
import { Button } from '../components/ui/button';

const Skills = () => {
  const [showChat, setShowChat] = useState(false);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["react", "ts", "nextjs", "tailwind", "html", "css", "js"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["nodejs", "express", "python", "postgresql", "mongodb", "fastapi"]
    },
    {
      title: "Tools & Technologies",
      icon: "🔧",
      skills: ["git", "docker", "aws", "vercel", "vite", "webpack"]
    },
    {
      title: "AI & Modern Tech",
      icon: "🧠",
      skills: ["tensorflow", "pytorch", "prisma", "graphql", "firebase", "supabase"]
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
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="glass-effect w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">Skills</h1>
            <p className="text-xl text-gray-600">Technologies and tools I work with</p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src={`https://skillicons.dev/icons?i=${category.skills.join(',')}&perline=3`}
                    alt={`${category.title} skills`}
                    className="max-w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="glass-card p-6">
              <p className="text-gray-700 mb-4">Ask about my technical expertise!</p>
              <Button
                onClick={() => setShowChat(true)}
                className="glass-effect hover:bg-blue-500/20 text-blue-700"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Ask about my skills
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ChatInterface
        isOpen={showChat}
        onClose={() => setShowChat(false)}
        initialQuery="What are Yash's technical skills and expertise?"
      />
    </div>
  );
};

export default Skills;