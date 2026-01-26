import React, { useState, useRef, useEffect } from 'react';
import { SectionId, ChatMessage } from '../types.ts';
import { sendMessageToGemini } from '../services/geminiService.ts';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: "Hello! I'm Anna's AI Assistant. Ask me anything about Anna's design philosophy, work experience, or availability.",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm having trouble connecting to my creative brain right now. Please try again later or email Anna directly.",
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id={SectionId.CHAT} className="py-24 bg-gradient-to-b from-slate-900 to-black px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-purple/10 rounded-full mb-4">
            <Sparkles className="text-brand-purple" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ask My AI Assistant</h2>
          <p className="text-gray-400">
            Powered by Gemini. Get instant answers about my portfolio and skills.
          </p>
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
          <div className="h-[400px] md:h-[500px] overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === 'user' ? 'bg-white text-black' : 'bg-brand-purple text-white'
                }`}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                
                <div className={`max-w-[80%] rounded-2xl p-4 ${
                  msg.role === 'user' 
                    ? 'bg-white text-black rounded-tr-none' 
                    : 'bg-[#2a2a2a] text-gray-200 rounded-tl-none border border-white/5'
                } ${msg.isError ? 'border-red-500/50 text-red-200' : ''}`}>
                  <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
                  <span className="text-[10px] opacity-50 block mt-2">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center shrink-0">
                  <Bot size={20} />
                </div>
                <div className="bg-[#2a2a2a] rounded-2xl rounded-tl-none p-4 border border-white/5 flex items-center gap-2">
                  <Loader2 className="animate-spin text-gray-400" size={16} />
                  <span className="text-gray-400 text-sm">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-[#151515] border-t border-white/5">
            <form onSubmit={handleSend} className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ex: What is Anna's experience with Figma?"
                className="w-full bg-[#0a0a0a] text-white rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 border border-white/10 transition-all placeholder:text-gray-600"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 p-2 bg-white text-black rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWidget;