
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
    
    // SYSTEM 1: GREETING LOGIC
    if (input.match(/^(hi|hello|hey|good\s+(morning|afternoon|evening)|is\s+anyone\s+there)[\s\?\!]*$/i) || 
        input.includes("hi") || input.includes("hello") || input.includes("hey")) {
      const greetings = [
        "Hello, welcome. How can I help you today?",
        "Hi there, I'm here to assist you with any questions related to our services or platform.",
        "Hello. Feel free to ask me anything you'd like to know about our website or offerings."
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // SYSTEM 2: WEBSITE-BASED Q&A HANDLING
    
    // Company Overview
    if (input.includes("what do") || input.includes("what does") || input.includes("what you do") || input.includes("company do")) {
      return "We are aitamate - AI experts dedicated to providing comprehensive AI solutions including:\n• AI Training Services for individuals and corporations\n• AI-Enabled Automations for business process optimization\n• Process Audit services to analyze and improve business operations\n\nWe specialize in practical AI implementation and helping businesses successfully integrate AI into their operations.";
    }
    
    if (input.includes("unique") || input.includes("different") || input.includes("why choose")) {
      return "What makes aitamate different:\n• Focus on practical implementation over theoretical concepts\n• Comprehensive training with real-world business experience\n• Deep AI expertise combined with industry knowledge\n• Solutions that actually work and teams can effectively use\n• End-to-end support from analysis to implementation";
    }
    
    // All Services Offered
    if (input.includes("service") || input.includes("what you offer") || input.includes("what do you provide")) {
      return "We offer three main services:\n\n🤖 AI Training Services:\n• Corporate workshops and team training\n• Individual certification courses\n• Machine learning fundamentals\n• AI implementation strategies\n\n⚡ AI-Enabled Automations:\n• Workflow optimization and process automation\n• Customer interaction automation\n• Data processing and analysis\n• Chatbot and voice AI solutions\n\n📊 Process Audit:\n• Current state assessment of operations\n• AI readiness evaluation\n• Detailed improvement recommendations\n• ROI projections and implementation roadmaps\n\nWould you like detailed information about any specific service?";
    }
    
    if (input.includes("chatbot") || input.includes("conversational ai")) {
      return "Yes, we provide comprehensive chatbot development services:\n• 24/7 conversational AI for customer support\n• Intelligent chatbots that handle FAQs automatically\n• Multi-platform integration (website, social media, apps)\n• Natural language processing capabilities\n• Custom training for industry-specific knowledge\n• Real-time support enhancement\n\nOur chatbots are designed to enhance user experience while reducing support workload.";
    }
    
    if (input.includes("voice") || input.includes("voice ai") || input.includes("voice automation")) {
      return "Absolutely! We offer advanced voice AI solutions:\n• Voice-activated automation systems\n• Intelligent voice assistants for customer service\n• Voice-to-text and text-to-voice capabilities\n• Integration with existing phone systems\n• Multi-language support\n• Custom voice models for brand consistency\n\nThese solutions help automate phone interactions and improve accessibility.";
    }
    
    // Specific Service Details
    if (input.includes("training") || input.includes("learn") || input.includes("education")) {
      return "Our AI Training Services include:\n\n📚 Corporate Programs:\n• Team workshops and hands-on sessions\n• Leadership training for AI adoption\n• Department-specific AI applications\n\n🎓 Individual Courses:\n• Machine learning fundamentals\n• AI tool implementation\n• Certification programs\n• Practical project-based learning\n\n💼 Implementation Support:\n• Strategy development\n• Technology selection guidance\n• Change management assistance\n\nWe focus on practical skills that can be immediately applied in your work environment.";
    }
    
    if (input.includes("automation") || input.includes("automate")) {
      return "Our AI-Enabled Automation solutions help:\n\n⚡ Business Process Optimization:\n• Streamline repetitive tasks\n• Reduce manual errors and workload\n• Increase operational efficiency\n• Smart workflow management\n\n🔄 System Integration:\n• CRM and database automation\n• Email and communication workflows\n• Document processing and analysis\n• Inventory and order management\n\n📈 Performance Enhancement:\n• Real-time monitoring and alerts\n• Predictive maintenance systems\n• Quality control automation\n• Resource optimization\n\nEach solution is customized based on your specific business needs and existing systems.";
    }
    
    if (input.includes("audit") || input.includes("process audit") || input.includes("analysis")) {
      return "Our Process Audit service provides comprehensive business analysis:\n\n🔍 Current State Assessment:\n• End-to-end operational analysis\n• Workflow efficiency evaluation\n• Technology stack review\n• Resource utilization assessment\n\n🎯 AI Readiness Evaluation:\n• Infrastructure compatibility check\n• Team skill gap analysis\n• Data quality and availability review\n• Security and compliance assessment\n\n📋 Actionable Recommendations:\n• Detailed improvement roadmap\n• ROI projections and cost-benefit analysis\n• Implementation timeline and priorities\n• Risk assessment and mitigation strategies\n\nThis helps identify optimization opportunities and creates a clear path for AI integration.";
    }
    
    // Pricing and Plans
    if (input.includes("price") || input.includes("cost") || input.includes("pricing") || input.includes("how much")) {
      return "Our pricing is customized based on your specific requirements and business needs. Factors include:\n• Scope and complexity of the project\n• Number of users or departments involved\n• Integration requirements\n• Ongoing support and maintenance needs\n\nFor a personalized quote and detailed pricing information, please contact our team at rj@aitamate.com or call +91 92233 15977. We'll provide a comprehensive proposal tailored to your business.";
    }
    
    if (input.includes("trial") || input.includes("demo") || input.includes("test")) {
      return "We offer consultation sessions and project demonstrations to help you understand our capabilities. Contact us at rj@aitamate.com to schedule:\n• Free initial consultation\n• Service demonstration\n• Requirements assessment\n• Custom solution proposal\n\nThis helps ensure our services align with your specific needs before commitment.";
    }
    
    // Process and Workflow
    if (input.includes("how it works") || input.includes("process") || input.includes("get started") || input.includes("onboarding")) {
      return "Our process is designed for smooth implementation:\n\n1️⃣ Initial Consultation:\n• Understanding your business needs\n• Current system assessment\n• Goal definition and scope planning\n\n2️⃣ Analysis & Planning:\n• Detailed requirement gathering\n• Solution design and architecture\n• Timeline and milestone planning\n\n3️⃣ Implementation:\n• Development and customization\n• System integration and testing\n• Training and knowledge transfer\n\n4️⃣ Support & Optimization:\n• Ongoing monitoring and support\n• Performance optimization\n• Continuous improvement\n\nTo get started, simply contact us at rj@aitamate.com and we'll schedule your consultation.";
    }
    
    // Contact and Support
    if (input.includes("contact") || input.includes("reach") || input.includes("talk") || input.includes("speak")) {
      return "You can reach our team through multiple channels:\n\n📧 Email: rj@aitamate.com\n📞 Phone: +91 92233 15977\n🌐 Contact form on our website\n💼 LinkedIn: Connect with us for business inquiries\n\nOur team is available to discuss your specific needs, provide consultations, and answer any questions about our services. We typically respond within 24 hours.";
    }
    
    if (input.includes("support") || input.includes("help") || input.includes("assistance")) {
      return "We provide comprehensive support throughout your AI journey:\n\n🛠️ Technical Support:\n• Implementation assistance\n• Troubleshooting and issue resolution\n• System optimization and updates\n\n📚 Training Support:\n• Ongoing learning resources\n• Team training sessions\n• Best practices guidance\n\n📈 Strategic Support:\n• Performance monitoring\n• Improvement recommendations\n• Scaling and expansion planning\n\nFor immediate support, contact us at rj@aitamate.com or call +91 92233 15977.";
    }
    
    // Technical Information
    if (input.includes("technology") || input.includes("tech stack") || input.includes("tools")) {
      return "We use cutting-edge AI technologies and platforms:\n\n🤖 AI/ML Frameworks:\n• Machine learning algorithms\n• Natural language processing\n• Computer vision and automation\n• Deep learning models\n\n🔧 Integration Capabilities:\n• CRM systems (Salesforce, HubSpot)\n• E-commerce platforms (Shopify, WooCommerce)\n• Communication tools (Slack, Teams)\n• Database systems and APIs\n\n☁️ Platform Support:\n• Cloud-based solutions (AWS, Azure, Google Cloud)\n• On-premise installations\n• Hybrid deployment options\n• Cross-platform compatibility\n\nWe select the best technology stack based on your specific requirements and existing infrastructure.";
    }
    
    // Use Cases and Industries
    if (input.includes("small business") || input.includes("startup") || input.includes("enterprise")) {
      return "We serve businesses of all sizes with tailored solutions:\n\n🏢 Small Businesses:\n• Cost-effective automation solutions\n• Essential AI tools for growth\n• Simplified implementation processes\n• Scalable systems that grow with your business\n\n🚀 Startups:\n• MVP development and rapid prototyping\n• Resource optimization\n• Competitive advantage through AI\n• Investor-ready technology demonstrations\n\n🏭 Enterprises:\n• Large-scale system integration\n• Multi-department coordination\n• Compliance and security requirements\n• Custom enterprise solutions\n\nEach solution is designed to meet the specific needs and budget constraints of your business size.";
    }
    
    if (input.includes("industry") || input.includes("sector") || input.includes("finance") || input.includes("healthcare") || input.includes("retail") || input.includes("manufacturing")) {
      return "We provide AI solutions across multiple industries:\n\n💰 Finance & Banking:\n• Fraud detection and prevention\n• Risk assessment automation\n• Customer service chatbots\n• Document processing\n\n🏥 Healthcare:\n• Patient data management\n• Appointment scheduling automation\n• Medical record analysis\n• Compliance monitoring\n\n🛒 Retail & E-commerce:\n• Inventory management\n• Customer recommendation systems\n• Order processing automation\n• Customer support enhancement\n\n🏭 Manufacturing:\n• Quality control automation\n• Predictive maintenance\n• Supply chain optimization\n• Production planning\n\nWe customize our solutions to meet industry-specific requirements and regulations.";
    }
    
    // Team and Expertise
    if (input.includes("team") || input.includes("who") || input.includes("experience") || input.includes("expertise")) {
      return "Our team consists of experienced AI experts and industry professionals:\n\n👨‍💻 Technical Expertise:\n• AI/ML engineers with advanced degrees\n• Software developers specializing in automation\n• Data scientists and analysts\n• System integration specialists\n\n💼 Business Experience:\n• Industry consultants with domain knowledge\n• Project managers with implementation experience\n• Training specialists and educators\n• Customer success managers\n\n🎓 Qualifications:\n• Advanced degrees in AI, Computer Science, and Engineering\n• Industry certifications and continuous learning\n• Years of hands-on experience in AI implementation\n• Proven track record of successful projects\n\nOur diverse expertise ensures comprehensive solutions that work in real-world business environments.";
    }
    
    // SYSTEM 3: FALLBACK / MISSING INFO HANDLING
    return "I'm sorry, I couldn't find that information on our website. Please contact our team directly at rj@aitamate.com and they'll be happy to assist you further.";
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
