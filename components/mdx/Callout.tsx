// components/mdx/Callout.tsx
interface CalloutProps {
    type?: 'info' | 'warning' | 'success' | 'error';
    title?: string;
    children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({
    type = 'info',
    title,
    children
}) => {
    const styles = {
        info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-700 dark:text-yellow-300',
        success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300',
        error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300'
    };

    const icons = {
        info: '💡',
        warning: '⚠️',
        success: '✅',
        error: '❌'
    };

    return (
        <div className={`border-l-4 p-4 mb-6 rounded-r-lg ${styles[type]}`}>
            {title && (
                <h4 className="flex items-center font-semibold mb-2">
                    <span className="mr-2">{icons[type]}</span>
                    {title}
                </h4>
            )}
            <div className="prose-sm">{children}</div>
        </div>
    );
};