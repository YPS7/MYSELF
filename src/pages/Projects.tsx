import { useState } from 'react';
import { ArrowLeft, MessageCircle, Code, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import CursorEffect from '../components/CursorEffect';
import ChatInterface from '../components/ChatInterface';
import { Button } from '../components/ui/button';

// Import all project images (using only existing files from assets)
import watcherImage from "../assets/watcher-project.png";
import linkedlistImage from "../assets/linkedlist-project.png";
import ypsImage from "../assets/ypsmedia.png";
import reductoImage from "../assets/reducto-project.png";

const projects = [
  {
    title: "AI Deep Research Agent",
    description: "Engineered an AI research assistant using LangChain and Google Gemini solving the need for real-time, structured research.",
    image: watcherImage,  // Placeholder; update with a specific image if available
    techStack: ["Python", "LangChain", "Gemini"],
    githubLink: "https://github.com/YPS7/AI_Research_Agent",
    liveLink: "https://github.com/YPS7/AI_Research_Agent"
  },
  {
    title: "LinkedList Visualization",
    description: "Interactive data structure visualization tool for learning linked lists with step-by-step operations",
    image: linkedlistImage,
    techStack: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/YPS7/Linky",
    liveLink: "https://yps7.github.io/Linky/"
  },
  {
    title: "YPS Media",
    description: "Video streaming platform with categorized content including music, education, gaming, and podcasts",
    image: ypsImage,
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://capable-taffy-43dd73.netlify.app/",
    liveLink: "https://capable-taffy-43dd73.netlify.app/"
  },
  {
    title: "Reducto - Article Summarizer",
    description: "AI-powered tool that summarizes articles and web content, making information consumption faster and more efficient",
    image: reductoImage,  // Updated to existing file (assumed match for Reducto)
    techStack: ["React", "JavaScript", "OpenAI"],
    githubLink: "https://github.com/YPS7/REDUCTO",
    liveLink: "https://dashing-jelly-71664c.netlify.app/"
  },
  {
    title: "TheWatcher - Error Monitor",
    description: "Advanced error monitoring and debugging tool for developers with real-time error tracking and analysis",
    image: watcherImage,
    techStack: ["Python", "Batch", "WebSocket"],
    githubLink: "https://github.com/YPS7/THE-WATCHER",
    liveLink: "https://thewatchercli.netlify.app/"
  }
];

const Projects = () => {
  const [showChat, setShowChat] = useState(false);

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
              <Code className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">Projects</h1>
            <p className="text-xl text-gray-600">A showcase of my recent work and technical achievements</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass-card p-6 group">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="glass-effect px-3 py-1 text-xs rounded-full text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg hover:bg-gray-800/10 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg hover:bg-blue-500/10 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="glass-card p-6">
              <p className="text-gray-700 mb-4">Ask me about my projects!</p>
              <Button
                onClick={() => setShowChat(true)}
                className="glass-effect hover:bg-blue-500/20 text-blue-700"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Ask about my projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ChatInterface
        isOpen={showChat}
        onClose={() => setShowChat(false)}
        initialQuery="Show me Yash's projects and technical work"
      />
    </div>
  );
};

export default Projects;
