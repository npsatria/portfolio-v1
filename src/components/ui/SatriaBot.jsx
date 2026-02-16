'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';
import { useChat } from '@ai-sdk/react';

const SUGGESTIONS = [
  "What is your tech stack?",
  "Show me your best project",
  "How can I contact you?",
  "Tell me a fun fact"
];

export default function SatriaBot() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Vercel AI SDK Hook
  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput } = useChat({
    api: '/api/chat',
    initialMessages: [
        { id: 'welcome', role: 'assistant', content: "Hi! I'm SatriaBot 🤖. I'm a digital twin of Satria. Ask me anything about his skills, projects, or experience!" }
    ],
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen]);

  const handleSuggestionClick = (suggestion) => {
      setInput(suggestion);
      // Optional: auto-submit
      // handleSubmit({ preventDefault: () => {} } as any);
      // But creating a synthetic event is tricky, easier to just set input and let user click send,
      // OR use append from useChat if we want immediate send (but setInput is safer for now to let user confirm)
  };

  // Custom submit handler to allow suggestion clicks to submit immediately if needed,
  // but for now let's stick to standard handleSubmit

  return (
    <>
        {/* FAB (Floating Action Button) */}
        <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
                isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'bg-black text-white dark:bg-white dark:text-black'
            }`}
        >
            <MessageCircle size={28} />
            {/* Notification Dot */}
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
        </motion.button>

        {/* CHAT WINDOW */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[380px] h-[600px] max-h-[80vh] bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="p-4 border-b border-black/5 flex justify-between items-center bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">SatriaBot AI</h3>
                                <p className="text-xs text-green-500 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    {isLoading ? 'Typing...' : 'Online'}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-black/5 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                    msg.role === 'user'
                                        ? 'bg-black text-white dark:bg-white dark:text-black rounded-br-none'
                                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-none'
                                }`}>
                                    {/* Render Content - Basic Markdown support could be added here */}
                                    <span dangerouslySetInnerHTML={{
                                        __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')
                                    }} />
                                </div>
                            </div>
                        ))}

                        {/* Loading Indicator */}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-200"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestions Chips */}
                    <div className="p-2 overflow-x-auto flex gap-2 no-scrollbar border-t border-black/5">
                        {SUGGESTIONS.map(s => (
                            <button
                                key={s}
                                onClick={() => handleSuggestionClick(s)}
                                className="whitespace-nowrap px-3 py-1.5 bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-medium rounded-full border border-indigo-100 dark:border-indigo-500/30 hover:bg-indigo-100 transition-colors"
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    {/* Input Area */}
                    <form
                        onSubmit={handleSubmit}
                        className="p-4 bg-white/50 dark:bg-black/20"
                    >
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Type a message..."
                                className="flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="p-2 bg-black text-white dark:bg-white dark:text-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </form>

                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
}
