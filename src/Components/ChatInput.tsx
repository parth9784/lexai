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
        <div
            style={{
                backgroundColor: 'var(--theme-input-bg)',
                color: 'var(--theme-text)',
                borderRadius: '1rem',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                padding: '12px 16px',
                display: 'flex',
                gap: '12px',
                width: '70%',
                maxWidth: '768px',
                margin: '0 auto',
            }}
        >
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
                style={{
                    backgroundColor: 'transparent',
                    color: 'var(--theme-text)',
                    // placeholderColor: 'var(--theme-placeholder)',
                    resize: 'none',
                    minHeight: '40px',
                    maxHeight: '160px',
                    overflowY: 'auto',
                    flex: 1,
                    outline: 'none',
                    border: 'none',
                    fontSize: '14px',
                    lineHeight: '1.4',
                }}
            />
            <button
                onClick={sendMessage}
                title="Send"
                style={{
                    color: 'var(--theme-text)',
                    alignSelf: 'flex-end',
                    paddingBottom: '4px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                <SendHorizontal style={{ width: 20, height: 20 }} className='text-[rgb(181,139,55)]' />
            </button>
        </div>
    );
}
