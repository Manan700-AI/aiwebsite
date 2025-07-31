
import React, { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // System 1: Greetings
    if (input.includes("hi") || input.includes("hello") || input.includes("hey") || input === "hi" || input === "hello") {
      const greetings = [
        "Hi there! How can I assist you today?",
        "Hello! I'm here to help you with anything related to our services or offerings.",
        "Welcome to our website! Feel free to ask me any questions you have."
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // System 2: Website-Based Q&A
    if (input.includes("service") || input.includes("what do you") || input.includes("what you") || input.includes("what")) {
      return "We offer three main services:\n• AI Training Services - Corporate workshops, individual courses, and certification programs\n• AI-Enabled Automations - Workflow optimization and process automation\n• Process Audit - Deep analysis of your business processes using AI to uncover inefficiencies\n\nWould you like to know more about any specific service?";
    } else if (input.includes("training")) {
      return "Our AI Training programs include:\n• Corporate workshops for teams\n• Individual certification courses\n• Machine learning fundamentals\n• AI implementation strategies\n• Hands-on practical sessions\n\nWe focus on practical implementation and real-world applications.";
    } else if (input.includes("automation")) {
      return "Our AI-Enabled Automations help:\n• Streamline business processes\n• Reduce manual work and errors\n• Increase operational efficiency\n• Automate workflows and data processing\n• Improve customer interactions\n\nWe customize solutions based on your specific business needs.";
    } else if (input.includes("audit") || input.includes("process")) {
      return "Our Process Audit service provides:\n• Current state assessment of your operations\n• AI readiness evaluation\n• Detailed improvement recommendations\n• ROI projections and implementation roadmaps\n• End-to-end operational analysis\n\nThis helps identify inefficiencies and optimization opportunities.";
    } else if (input.includes("price") || input.includes("cost") || input.includes("pricing")) {
      return "Our pricing varies based on your specific needs and requirements. For a personalized quote tailored to your business, please contact our team at rj@aitamate.com or call +91 92233 15977.";
    } else if (input.includes("contact") || input.includes("talk") || input.includes("reach")) {
      return "You can reach us through:\n• Email: rj@aitamate.com\n• Phone: +91 92233 15977\n• Contact page on our website\n\nOur team is ready to help with any questions or to discuss your specific needs!";
    } else if (input.includes("about") || input.includes("company") || input.includes("who")) {
      return "We are automate - AI experts dedicated to bridging the gap between AI potential and real-world implementation. We specialize in practical AI solutions, comprehensive training, and helping businesses successfully integrate AI into their operations.";
    } else {
      // System 3: Fallback Response
      return "I'm sorry, I couldn't find that information on our website. You can reach out to our support team at rj@aitamate.com and they'll be happy to assist you further!";
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center",
          isOpen && "hidden"
        )}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border transition-all duration-300 flex flex-col",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="w-5 h-5" />
            <span className="font-medium">AI Assistant</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start space-x-2",
                message.isBot ? "justify-start" : "justify-end"
              )}
            >
              {message.isBot && (
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-blue-600" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[70%] p-2 rounded-lg text-sm",
                  message.isBot
                    ? "bg-gray-100 text-gray-800"
                    : "bg-blue-600 text-white"
                )}
              >
                {message.text}
              </div>
              {!message.isBot && (
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatbot;
