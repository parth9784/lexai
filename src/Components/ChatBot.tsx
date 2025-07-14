import { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import ChatInput from './ChatInput';
import { Copy, Check, Upload, Scale, Sun, Moon } from 'lucide-react';

export default function LexAiChat() {
    const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
    const [input, setInput] = useState('');
    const [collapsed, setCollapsed] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
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

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className="flex h-screen w-screen overflow-hidden" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
            <Sidebar collapsed={collapsed} toggleSidebar={() => setCollapsed(!collapsed)} />

            <main className="flex-1 flex flex-col">
                {/* TOP NAVBAR */}
                <div style={{ backgroundColor: 'var(--bot-bg)' }} className="h-12 px-6 flex items-center justify-between border-b">
                    <div className="font-semibold text-lg flex gap-2 items-center">
                        <Scale size={24} /> LexAi
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-sm">
                            <Upload size={16} /> Share
                        </button>
                        <button onClick={() => setDarkMode(prev => !prev)} className="p-1 rounded cursor-pointer">
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <div style={{ backgroundColor: '#C18D21' }} className="text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            P
                        </div>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-6 pt-4 space-y-4">
                    <div className="max-w-4xl w-full mx-auto flex flex-col space-y-4 pb-4">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundColor: msg.from === 'user' ? 'var(--user-bg)' : 'var(--bot-bg)',
                                    color: msg.from === 'user' ? 'black' : 'var(--text-color)',
                                }}
                                className={`relative group max-w-[85%] w-fit px-4 py-3 rounded-2xl text-sm shadow-md self-${msg.from === 'user' ? 'end' : 'start'}`}
                            >
                                <p className="whitespace-pre-line leading-relaxed pr-6">{msg.text}</p>
                                {msg.from === 'bot' && (
                                    <div className="flex justify-end pt-2">
                                        <button
                                            onClick={() => copyToClipboard(msg.text, i)}
                                            className="hover:text-[#C18D21]"
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
// 