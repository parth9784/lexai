import { SendHorizontal } from 'lucide-react';
import { useRef, useEffect } from 'react';

interface Props {
    input: string;
    setInput: (val: string) => void;
    sendMessage: () => void;
}

export default function ChatInput({ input, setInput, sendMessage }: Props) {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
        }
    }, [input]);

    return (
        <div className="bg-[#1c1f24] rounded-2xl shadow-lg flex px-4 py-3 gap-3 w-[70%] max-w-3xl mx-auto">
            <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                    }
                }}
                placeholder="Ask anything..."
                className="bg-transparent resize-none max-h-30 min-h-[40px] overflow-y-auto flex-1 text-white placeholder-gray-400 outline-none scrollbar-thin scrollbar-thumb-[#3b3b3b] leading-relaxed pt-1"
            />
            <button
                title="Send"
                onClick={sendMessage}
                className="text-white hover:text-[#C18D21] self-end pb-1"
            >
                <SendHorizontal className="w-5 h-5" />
            </button>
        </div>
    );
}

