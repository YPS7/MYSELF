import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ExternalLink, Building2, Award, Calendar, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import ChatInterface from '../components/ChatInterface';

const Work = () => {
  const [showChat, setShowChat] = useState(false);

  const workExperience = [
    {
      company: "AndOr Communications Pvt. Ltd.",
      role: "Software Engineer",
      duration: "Aug 2024 – Present",
      location: "Remote",
      description: [
        "Developed unified backend API wrappers using Java for LightX product",
        "Integrated contextual prompt-enhancement for improved LLM output relevance",
        "Automated email-marketing workflow using Python and Bash, cutting manual time by 80%",
        "Managed AWS S3 uploads with retry logic, reducing failed uploads to almost zero",
        "Built React.js components for internal management tool with 20% test coverage"
      ],
      technologies: ["java", "python", "react", "aws", "mongodb", "nodejs"],
      logoSpace: true
    },
    {
      company: "Bharat Intern",
      role: "Data Science Intern",
      duration: "Sep 2023 - Nov 2023",
      location: "Remote",
      description: [
        "Designed Neural Network system for recognizing alphabets and numbers with 98% accuracy",
        "Created LSTM-based web application for real-time data analysis",
        "Boosted business performance by 25% through data-driven decision making"
      ],
      technologies: ["python", "tensorflow", "pytorch"],
      logoSpace: true
    }
  ];

  const certifications = [
    {
      title: "Supervised Machine Learning",
      issuer: "Stanford/DeepLearning.AI",
      link: "https://coursera.org/share/fb838e1649fb42f81a00d0f3b0713e03", // User will update later
      icon: Award
    },
    {
      title: "Advanced Learning Algorithms", 
      issuer: "Stanford/DeepLearning.AI",
      link: "https://coursera.org/share/1312a42e93d672e6f729b9018feefa64", 
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 container mx-auto px-4 py-8 safe-area">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/"
            className="glass-effect px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-white/20 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <Button
            onClick={() => setShowChat(true)}
            className="glass-effect px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-white/20 transition-colors flex items-center gap-2"
            variant="ghost"
          >
            <MessageCircle className="h-4 w-4" />
            Ask AI
          </Button>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Work Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development and data science
          </p>
        </div>

        {/* Work Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {workExperience.map((job, index) => (
            <div key={index} className="glass-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Company Logo Space */}
                <div className="w-16 h-16 glass-effect rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-8 w-8 text-gray-500" />
                </div>
                
                {/* Job Details */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{job.role}</h3>
                      <p className="text-lg font-medium text-blue-600">{job.company}</p>
                    </div>
                    <div className="flex flex-col sm:text-right mt-2 sm:mt-0">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {job.duration}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Job Description */}
                  <ul className="space-y-2 mb-6">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-600">Tech Stack:</span>
                    <div className="flex items-center gap-2">
                      <img 
                        src={`https://skillicons.dev/icons?i=${job.technologies.join(',')}&perline=8`}
                        alt="Technologies used"
                        className="h-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="glass-effect w-12 h-12 rounded-full flex items-center justify-center">
                    <cert.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">{cert.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{cert.issuer}</p>
                    <a 
                      href={cert.link}
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ChatInterface
        isOpen={showChat}
        onClose={() => setShowChat(false)}
      />
    </div>
  );
};

export default Work;