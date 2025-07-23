import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from './ui/button';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export default function ChatInterface({ isOpen, onClose, initialQuery }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;
    
    setIsLoading(true);
    setInput('');
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      role: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response with shorter, more human-like responses
    setTimeout(() => {
      const responses = [
        "Hey! I'm Yash, a full-stack developer who loves building cool stuff with React and Node.js. What would you like to know?",
        "I work on everything from frontend to backend. Currently into AI integration and modern web tech. What catches your interest?",
        "I've built some fun projects like a LinkedList visualizer and a media platform. Want to hear about any specific one?",
        "My tech stack includes React, TypeScript, Node.js, and I'm always learning new things. What tech are you curious about?",
        "I'm passionate about clean code and solving real problems. Feel free to ask about my projects or experience!",
        "Always up for a good tech discussion! What would you like to chat about?"
      ];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        role: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20">
      <div className="glass-effect w-full max-w-md h-96 rounded-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <h3 className="font-semibold text-gray-800">Chat with Yash</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 chat-container">
          {messages.length === 0 && (
            <div className="text-center text-gray-600 mt-8">
              <p>👋 Hi! I'm Yash's AI assistant.</p>
              <p className="text-sm mt-2">Ask me anything about his work!</p>
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.role === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block max-w-[80%] p-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'glass-effect text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="text-left mb-4">
              <div className="inline-block glass-effect p-3 rounded-lg text-gray-800">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/20">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 glass-effect border-0 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <Button
              type="submit"
              size="sm"
              disabled={isLoading || !input.trim()}
              className="glass-effect hover:bg-blue-500/20"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}