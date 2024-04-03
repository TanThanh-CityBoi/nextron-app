type SubProps = {
    fontSize?: string;
    background?: string;
    icon?: React.ReactNode;
    content?: string;
};

const SecondaryButton = ({
    className,
    background,
    icon,
    content,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & SubProps) => {
    return (
        <>
            <button
                className={`text-black-100 flex items-center justify-center 
                whitespace-nowrap rounded-lg border border-gray-300 
                px-4 py-2 font-normal leading-6
            ${className} 
            ${background || "hover:bg-gray-200"}
            `}
                {...props}
            >
                {icon}
                {content}
            </button>
        </>
    );
};

export default SecondaryButton;
