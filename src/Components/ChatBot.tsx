import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import ChatInput from './ChatInput';
import { Copy, Check, Upload, MoreVertical, Save, Scale } from 'lucide-react';

export default function LexAiChat() {
    const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
    const [input, setInput] = useState('');
    const [collapsed, setCollapsed] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { from: 'user', text: input }]);
        setTimeout(() => {
            setMessages(prev => [...prev, { from: 'bot', text: 'LexAi is processing your request...' }]);
        }, 1000);
        setInput('');
    };

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1000);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex h-screen w-screen text-white overflow-hidden manrope-500">
            <Sidebar collapsed={collapsed} toggleSidebar={() => setCollapsed(!collapsed)} />

            <main className="flex-1 flex flex-col bg-[#0A101A]">
                {/* TOP NAVBAR */}
                <div className="bg-[#111317] h-12 px-6 flex items-center justify-between border-b border-[#1e1e1e]">
                    <div className="text-white font-semibold text-lg flex gap-2 items-center">
                        <Scale size={24} />
                        LexAi</div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-sm text-white hover:text-[#C18D21] transition">
                            <Upload size={16} /> Share
                        </button>

                        <div className="bg-[#C18D21] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            P
                        </div>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto px-6 pt-4 space-y-4 scrollbar-thin scrollbar-thumb-[#102945] scrollbar-track-[#0A101A]">
                    <div className="max-w-4xl w-full mx-auto flex flex-col space-y-4 pb-4">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`relative group max-w-[85%] w-fit px-4 py-3 rounded-2xl text-sm shadow-md transition-all ${msg.from === 'user'
                                    ? 'bg-[#CFCED0] text-black self-end'
                                    : 'bg-[#0C1F34] text-white self-start'
                                    }`}
                            >
                                <p className="whitespace-pre-line leading-relaxed pr-6">{msg.text}</p>
                                {msg.from === 'bot' && (
                                    <div className="flex justify-end pt-2">
                                        <button
                                            onClick={() => copyToClipboard(msg.text, i)}
                                            className="text-gray-300 hover:text-[#C18D21]"
                                            title="Copy"
                                        >
                                            {copiedIndex === i ? <Check size={16} /> : <Copy size={16} />}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Input */}
                <div className="px-6 py-4">
                    <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
                </div>
            </main>
        </div>
    );
}
