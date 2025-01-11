import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function TextContent({ content }) {
    return (
        <div className="text-gray-700 text-base my-2 text-justify whitespace-break-spaces font-Poppins">
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]} // Habilita HTML embebido
                components={{
                    p: ({ node, ...props }) => (
                        <p className="text-gray-700 text-base font-Poppins" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                        <ul className="list-disc list-inside font-Poppins" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                        <li className="ml-4 font-Poppins" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                        <strong className="font-bold font-Poppins" {...props} />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

export default TextContent;
