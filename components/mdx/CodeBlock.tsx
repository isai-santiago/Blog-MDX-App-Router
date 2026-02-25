import React from 'react';

interface CodeBlockProps {
    children: React.ReactNode;
    className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
    return (
        <div className="relative group rounded-lg overflow-hidden bg-gray-900 my-4 shadow-lg border border-gray-700">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
            </div>
            <pre className={`p-4 overflow-x-auto text-sm text-gray-300 ${className || ''}`}>
                <code>{children}</code>
            </pre>
        </div>
    );
};