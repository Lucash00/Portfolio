import ReactMarkdown from "react-markdown";

function TextContent({ content }) {
    return (
        <div className="text-gray-700 text-base my-2 text-justify">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}

export default TextContent;
