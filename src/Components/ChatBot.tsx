import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import ChatInput from './ChatInput';
import { Copy, Check } from 'lucide-react';

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
        setTimeout(() => setCopiedIndex(null), 1000); // reset after 1s
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex h-screen w-screen text-white overflow-hidden">
            <Sidebar collapsed={collapsed} toggleSidebar={() => setCollapsed(!collapsed)} />

            <main className="flex-1 bg-[#0A101A] flex flex-col">
                {/* Header */}
                <div className="bg-[#102945] px-6 py-4 flex items-center justify-between shadow-md">
                    <h2 className="text-xl font-bold">LexAi Chat</h2>
                    <span className="text-[#C18D21] font-medium">Online</span>
                </div>

                {/* Messages */}
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
