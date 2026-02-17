
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hello! I'm Inaara's AI Strategy Consultant. How can I help you scale your business today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      // Corrected: Always use new GoogleGenAI({ apiKey: process.env.API_KEY }) as per strict guidelines.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are Inaara's AI Growth Consultant. You are professional, tech-savvy, and focused on scaling businesses through modern digital solutions. Keep answers concise and geared towards conversion, SEO, and AI automation.",
          temperature: 0.7,
        },
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "I'm having trouble processing that right now. Let's talk about scaling your SEO instead." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Apologies, the grid is a bit congested. Let's focus on our core services!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] glass rounded-3xl overflow-hidden shadow-2xl flex flex-col border-primary/30 animate-in zoom-in-90 duration-300">
          {/* Header */}
          <div className="p-4 bg-primary text-background flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot size={24} />
              <div>
                <p className="font-black text-sm uppercase leading-none">Inaara AI</p>
                <p className="text-[8px] font-bold uppercase tracking-widest opacity-80">Online & Ready</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary/20 text-white rounded-tr-none border border-primary/30' 
                    : 'bg-white/5 text-slate-300 rounded-tl-none border border-white/10'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-2 rounded-2xl animate-pulse text-primary text-xs font-black">
                  ANALYZING...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for strategy..." 
              className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-slate-600"
            />
            <button 
              onClick={handleSend}
              className="size-10 bg-primary text-background rounded-xl flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="size-16 bg-primary text-background rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,209,244,0.5)] hover:scale-110 transition-all group relative"
        >
          <div className="absolute -top-1 -right-1 size-4 bg-accent rounded-full animate-ping" />
          <div className="absolute -top-1 -right-1 size-4 bg-accent rounded-full flex items-center justify-center">
            <Sparkles size={8} className="text-white" />
          </div>
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
