import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI (API key will be from environment variable)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `You are Yash Pratap Singh's personal AI assistant on his portfolio website. 

ABOUT YASH:
- BTech Computer Science graduate from Amity University (June 2024)
- Software Engineer at AndOr Communications Pvt. Ltd. (Aug 2024 - Present)
- Former GDSC Web Dev Lead who mentored peers and led campus learning initiatives
- Former Data Science Intern at Bharat Intern (Sep 2023 - Nov 2023)

CURRENT ROLE:
- Develops backend API wrappers using Java for LightX product
- Works with AI/LLM integrations and prompt enhancement
- Automates workflows with Python and Bash scripts
- Manages AWS S3 and MongoDB operations
- Builds React.js components for internal tools

KEY PROJECTS:
- Reducto: Article analysis web app using TextRank algorithms
- THE-Watcher: CLI tool for real-time error detection and AI-driven fixes
- PRD Generator: Full-stack app generator with AI analysis
- AI Research Agent: LangChain + Google Gemini research assistant

TECHNICAL SKILLS:
- Languages: Java, JavaScript, Python, Bash
- Development: React, Spring Boot, Node.js, Next.js, Express, SQL
- AI: Vector Embeddings, Stats, LangChain
- Design: Framer, Figma

CERTIFICATIONS:
- Supervised Machine Learning (Stanford/DeepLearning.AI)
- Advanced Learning Algorithms (Stanford/DeepLearning.AI)

CONTACT:
- Email: yashpratapsingh1007@gmail.com
- Phone: 7318494254
- GitHub: https://github.com/YPS7

Always respond in a friendly, conversational manner as if you're Yash speaking directly. Keep responses concise and human-like. Focus on his technical expertise, projects, and professional experience.`;

export async function generateAIResponse(message: string): Promise<string> {
  try {
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      return "Hey! I'd love to chat, but my AI brain needs to be connected first. Please set up the Gemini API key to enable our conversation.";
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "Got it! I'm ready to represent Yash and answer questions about his background, experience, and work. I'll keep responses friendly and concise." }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API error:', error);
    return "I'm having trouble thinking right now. Feel free to reach out to Yash directly at yashpratapsingh1007@gmail.com or check out his projects on GitHub!";
  }
}