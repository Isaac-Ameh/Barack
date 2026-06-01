import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageCircle, MoreHorizontal } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'henry' | 'user';
  timestamp: number;
  buttons?: Array<{ label: string; action: string }>;
  isEmailInput?: boolean;
  content?: React.ReactNode;
}

const INITIAL_MESSAGE_DELAY = 500;
const AUTO_POPUP_DELAY = 3000;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [awaitingSubscriptionEmail, setAwaitingSubscriptionEmail] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const initialized = useRef(false);

  useEffect(() => {
    const sessionPopCheck = sessionStorage.getItem('youremailbro_bot_popped');

    // Always ensure the chat has the starting message, guarding against StrictMode double-fire
    if (messages.length === 0 && !initialized.current) {
      initialized.current = true;
      startConversation();
    }

    // Auto-popup logic 
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, AUTO_POPUP_DELAY);

    return () => {
      clearTimeout(openTimer);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Math.random().toString(36).substring(7),
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, newMessage]);
    if (!isOpen) setUnreadCount(prev => prev + 1);
  };

  const startConversation = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage({
        sender: 'henry',
        text: "Hi! I'm Henry, your email marketing assistant. How can I help today?",
        buttons: [
          { label: "🚀 Improve my Brand's Revenue", action: "IMPROVE_REVENUE" },
          { label: "🎓 Learn Email Marketing", action: "LEARN_MARKETING_PITCH" },
          { label: "💡 Just browsing for now", action: "JUST_BROWSING" }
        ]
      });
    }, 1200);
  };

  const handleAction = (action: string, label: string) => {
    if (label) addMessage({ sender: 'user', text: label });
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      switch (action) {
        case "IMPROVE_REVENUE":
          addMessage({
            sender: 'henry',
            text: "Henry’s systems have generated millions for Nigerian brands—let’s see what we can do for yours. Most clients see a significant lift within the first 30 days.",
            buttons: [
              { label: "Book a Strategy Call", action: "BOOK_CALL" },
              { label: "Show Case Studies First", action: "GOTO_CASE_STUDIES" }
            ]
          });
          break;

        case "LEARN_MARKETING_PITCH":
          addMessage({
            sender: 'henry',
            text: "Master the art of high-conversion email systems. Join 1,000+ students in a community built on real implementation and African market insights. Ready to kickstart your journey?",
            buttons: [
              { label: "Fill out the Intake Survey", action: "GOTO_COMMUNITY_FORM" },
              { label: "Tell me about the curriculum", action: "GOTO_CURRICULUM" }
            ]
          });
          break;

        case "GOTO_COMMUNITY_FORM":
          // Prompt user for email to subscribe via MailerLite
          addMessage({
            sender: 'henry',
            text: "Great! Please type your email address to join the community newsletter.",
          });
          setAwaitingSubscriptionEmail(true);
          break;

        case "GOTO_CURRICULUM":
          window.location.href = '/community#curriculum';
          setIsOpen(false);
          break;

        case "GOTO_CASE_STUDIES":
          window.location.href = '/case-studies';
          setIsOpen(false);
          break;

        case "BOOK_CALL":
          window.open('https://calendar.app.google/fe1MA1wgPoBre1SYA', '_blank');
          addMessage({
            sender: 'henry',
            text: "I've opened the scheduling page for you. Let me know if you need anything else.",
            buttons: [
              { label: "Learn more skills", action: "LEARN_MARKETING_PITCH" },
              { label: "That's all for now", action: "THINK_ABOUT_IT" }
            ]
          });
          break;

        case "JUST_BROWSING":
          addMessage({
            sender: 'henry',
            text: "No problem! Take your time exploring the site. You'll find my case studies particularly interesting if you like numbers. I'll be right here if you need anything! 😊"
          });
          break;

        case "THINK_ABOUT_IT":
          addMessage({
            sender: 'henry',
            text: "Got it. I'll stay here in the corner if you change your mind. Happy exploring! 🚀"
          });
          break;

        default:
          addMessage({
            sender: 'henry',
            text: "How can I best help you succeed today?",
            buttons: [
              { label: "Improve Brand Revenue", action: "IMPROVE_REVENUE" },
              { label: "Learn Copywriting", action: "LEARN_MARKETING_PITCH" }
            ]
          });
      }
    }, 1000);
  };

  const handleEmailSubmit = (email: string) => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    addMessage({ sender: 'user', text: email });
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      addMessage({
        sender: 'henry',
        text: "Got it! Check your email in the next 2 minutes—I just sent you the details (or booking link).\n\nAnything else I can help with?",
        buttons: [
          { label: "Book another Call", action: "BOOK_CALL" },
          { label: "Ask something else", action: "PATH_CHECK" }
        ]
      });
    }, 1000);
    setInputValue('');
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsg = inputValue.trim();
    // If we are waiting for email input for subscription
    if (awaitingSubscriptionEmail) {
      const email = userMsg;
      setAwaitingSubscriptionEmail(false);
      setIsTyping(true);
      // Call MailerLite subscribe function
      fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName: '', lastName: '', industry: '', source: 'Chatbot' }),
      })
        .then(res => res.json())
        .then(data => {
          setIsTyping(false);
          addMessage({
            sender: 'henry',
            text: data.success ? '✅ Thanks! You’ve been subscribed. We’ll keep you updated.' : '⚠️ Something went wrong. Please try again later.',
          });
        })
        .catch(err => {
          console.error(err);
          setIsTyping(false);
          addMessage({ sender: 'henry', text: '⚠️ Subscription failed. Please try again later.' });
        });
      setInputValue('');
      return;
    }
    // Normal user message flow
    addMessage({ sender: 'user', text: userMsg });
    setInputValue('');
    setIsTyping(true);

    try {
      // Build history for Gemini
      // Ensure history starts with a 'user' message as required by Gemini SDK
      const firstUserIndex = messages.findIndex(m => m.sender === 'user');
      const history = firstUserIndex !== -1 
        ? messages.slice(firstUserIndex).map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: typeof m.text === 'string' ? m.text : '' }]
          }))
        : [];

      const endpoint = import.meta.env.PROD ? '/.netlify/functions/chat' : '/api/chat';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMsg, history }),
      });

      if (!response.ok) throw new Error('Failed to fetch AI response');

      const data = await response.json();
      setIsTyping(false);
      addMessage({
        sender: 'henry',
        text: data.text
      });
    } catch (error) {
      console.error("Chat error:", error);
      setIsTyping(false);
      addMessage({
        sender: 'henry',
        text: "I am experiencing a momentary connection issue. Please book a call directly, or try your inquiry again.",
        buttons: [
          { label: "Book a strategy call", action: "BOOK_CALL" }
        ]
      });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 w-[calc(100vw-32px)] max-w-[380px] h-[min(500px,60vh)] bg-cream rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-linen z-[110]"
          >
            {/* Header */}
            <div className="bg-mocha p-4 md:p-5 flex items-center justify-between text-cream shadow-lg sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border-2 border-cream/20 bg-cream/10 flex items-center justify-center overflow-hidden">
                    <img src="/assets/henry_profile.png" className="w-full h-full object-cover" alt="Henry" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-mocha rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-base">Henry</h3>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Always Active</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-cream/10 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <X size={24} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-gray-50/50 bg-texture no-scrollbar overscroll-contain">
              {messages.length === 0 && !isTyping && (
                <div className="flex flex-col items-center justify-center h-full text-center p-8 opacity-40">
                  <MessageCircle size={48} className="mb-4" />
                  <p className="text-sm font-medium">Starting a connection with Henry's assistant...</p>
                </div>
              )}
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                  <div className={`max-w-[85%] md:max-w-[80%] rounded-2xl p-4 shadow-sm relative ${
                    m.sender === 'user' 
                      ? 'bg-mocha text-cream rounded-tr-none' 
                      : 'bg-cream text-espresso border border-linen rounded-tl-none'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{m.text}</p>
                    {m.content}
                    {/* Auto‑generated link buttons */}
                    {typeof m.text === 'string' && Array.from(m.text.matchAll(/https?:\/\/\S+/g)).map((match, idx) => {
                      const url = match[0];
                      let label = 'Open Link';
                      if (url.includes('calendar.app.google')) label = 'Book a Call';
                      else if (url.includes('youremailbro.com/community')) label = 'Join the Community';
                      return (
                        <button
                          key={idx}
                          onClick={() => window.open(url, '_blank')}
                          className={`mt-2 block w-full text-xs font-bold py-3.5 px-4 rounded-xl border transition-all text-left ${
                            m.sender === 'user'
                              ? 'bg-cream/10 border-cream/20 text-cream hover:bg-cream/20'
                              : 'bg-mocha/5 border-mocha/20 text-mocha hover:bg-mocha hover:text-cream'
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                    {/* Additional explicit buttons */}
                    {m.text && /(book.*call|strategy.*call|calendar)/i.test(m.text) && !Array.from(m.text.matchAll(/https?:\/\/\S+/g)).some(match => match[0].includes('calendar.app.google')) && (
                      <button
                        onClick={() => window.open('https://calendar.app.google/fe1MA1wgPoBre1SYA', '_blank')}
                        className="mt-2 block w-full text-xs font-bold py-3.5 px-4 rounded-xl border bg-mocha/5 border-mocha/20 text-mocha hover:bg-mocha hover:text-cream"
                      >
                        Book a Call
                      </button>
                    )}
                    {m.text && /(join.*community|mtje|newsletter|hub)/i.test(m.text) && !Array.from(m.text.matchAll(/https?:\/\/\S+/g)).some(match => match[0].includes('youremailbro.com/community')) && (
                      <button
                        onClick={() => {
                          window.location.href = '/community#signup-form';
                          setIsOpen(false);
                        }}
                        className="mt-2 block w-full text-xs font-bold py-3.5 px-4 rounded-xl border bg-mocha/5 border-mocha/20 text-mocha hover:bg-mocha hover:text-cream"
                      >
                        Join the Community
                      </button>
                    )}
                    {m.buttons && m.buttons.length > 0 && (
                      <div className="flex flex-col gap-2 mt-4">
                        {m.buttons.map((btn, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleAction(btn.action, btn.label)}
                            className={`text-xs font-bold py-3.5 px-4 rounded-xl border transition-all text-left active:scale-[0.98] ${
                              m.sender === 'user'
                                ? 'bg-cream/10 border-cream/20 text-cream hover:bg-cream/20'
                                : 'bg-mocha/5 border-mocha/20 text-mocha hover:bg-mocha hover:text-cream'
                            }`}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-cream rounded-2xl p-4 shadow-sm border border-linen rounded-tl-none">
                    <div className="flex gap-1.5">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-mocha/40 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-mocha/40 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-mocha/40 rounded-full" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 md:p-5 border-t border-linen bg-cream pb-safe">
              <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-4 py-3">
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 bg-transparent border-none focus:outline-none py-1 text-sm md:text-base"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="text-mocha p-1 hover:scale-110 disabled:opacity-30 disabled:scale-100 transition-all"
                >
                  <Send size={24} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-mocha text-cream flex items-center justify-center shadow-2xl shadow-mocha/30 relative"
      >
        {isOpen ? <X size={30} /> : <MessageCircle size={30} />}
        {unreadCount > 0 && !isOpen && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-cream text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-cream">
            {unreadCount}
          </div>
        )}
      </motion.button>
    </div>
  );
}
