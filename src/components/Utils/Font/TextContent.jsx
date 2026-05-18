import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function TextContent({ content }) {
    return (
        <div className="text-gray-700 sm:text-sm md:text-base my-2 text-justify whitespace-break-spaces font-Poppins hyphens-auto break-normal">
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]} // Habilita HTML embebido
                components={{
                    p: ({ node, ...props }) => (
                        <p className="text-gray-700 sm:text-sm md:text-base font-Poppins hyphens-auto" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                        <ul className="sm:text-sm md:text-base list-disc list-inside font-Poppins hyphens-auto" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                        <li className="sm:text-sm md:text-base font-Poppins hyphens-auto" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                        <strong className="font-bold font-Poppins scale-105 hyphens-auto" {...props} />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

export default TextContent;
