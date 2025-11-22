import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: 'Chào bạn! Tôi là trợ lý AI của VNGPOWER. Bạn cần tư vấn công suất máy phát điện cho dự án nào?', timestamp: Date.now() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const aiResponseText = await sendMessageToGemini(inputText);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: aiResponseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 bg-navy-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-safety-500 ${isOpen ? 'hidden' : 'flex'} items-center justify-center`}
      >
        <MessageSquare size={24} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">AI</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[90vw] md:w-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right border border-gray-200 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`} style={{ height: '500px', maxHeight: '80vh' }}>
        {/* Header */}
        <div className="bg-navy-900 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3 relative">
               <Bot size={24} className="text-safety-500" />
               <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-navy-900"></span>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Tư Vấn Kỹ Thuật AI</h4>
              <p className="text-gray-400 text-xs">Trả lời ngay lập tức</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-3 text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-lg p-3 rounded-bl-none shadow-sm flex items-center">
                <Loader2 size={16} className="animate-spin text-navy-900 mr-2" />
                <span className="text-xs text-gray-500">AI đang tính toán...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Nhập câu hỏi (VD: Khách sạn 50 phòng dùng máy nào?)..."
              className="flex-1 bg-transparent focus:outline-none text-sm text-gray-700"
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !inputText.trim()}
              className={`ml-2 p-2 rounded-full transition ${inputText.trim() ? 'bg-safety-500 text-navy-900 hover:bg-safety-400' : 'text-gray-400 bg-gray-200'}`}
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-2">Powered by Google Gemini. Thông tin chỉ mang tính tham khảo.</p>
        </div>
      </div>
    </>
  );
};

export default AIChat;