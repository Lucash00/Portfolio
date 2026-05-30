import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

/** Quita saltos/espacios entre etiquetas HTML del markdown embebido en los datos. */
function normalizeContent(content) {
  if (!content) return "";
  return content.replace(/>\s+</g, "><").trim();
}

/** Tipografía compartida: ~15px móvil, 16px desktop (cards y ficha detalle). */
const sharedTypography =
  "font-Poppins text-pretty text-gray-700 sm:text-justify leading-relaxed hyphens-auto break-normal text-[0.9375rem] sm:text-xs md:text-[0.9375rem] lg:text-base " +
  "[&_p]:leading-relaxed [&_p]:last:mb-0 " +
  "[&_ul]:list-disc [&_ul]:list-outside [&_ul]:space-y-1.5 [&_ul]:marker:text-gray-400 " +
  "[&_ol]:list-decimal [&_ol]:list-outside [&_ol]:space-y-1.5 [&_ol]:marker:text-gray-500 " +
  "[&_li]:mb-0 [&_li]:mt-0 [&_li]:leading-relaxed " +
  "[&_strong]:font-bold [&_strong]:text-gray-800 " +
  "[&_a]:font-medium [&_a]:text-blue-700 [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-blue-800 hover:[&_a]:underline";

const bodyProse =
  `text-content text-content--body my-2 ${sharedTypography} ` +
  "[&_p]:mb-2.5 " +
  "[&_ul]:my-2.5 [&_ul]:pl-5 " +
  "[&_ol]:my-2.5 [&_ol]:pl-5 " +
  "[&_li]:pl-0.5 " +
  "[&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:first:mt-0 sm:[&_h2]:text-lg " +
  "[&_h3]:mb-2 [&_h3]:mt-3 [&_h3]:text-sm [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:first:mt-0 sm:[&_h3]:text-base";

const compactProse =
  `text-content text-content--compact my-1.5 ${sharedTypography} ` +
  "[&_p]:mb-2 " +
  "[&_ul]:my-2 [&_ul]:pl-4 " +
  "[&_ol]:my-2 [&_ol]:pl-4 " +
  "[&_h2]:mb-1.5 [&_h2]:mt-2 [&_h2]:text-sm [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:first:mt-0 sm:[&_h2]:text-base " +
  "[&_h3]:mb-1 [&_h3]:mt-2 [&_h3]:text-sm [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:first:mt-0";

function TextContent({ content, variant = "body" }) {
  const rootClass = variant === "compact" ? compactProse : bodyProse;

  return (
    <div className={rootClass}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {normalizeContent(content)}
      </ReactMarkdown>
    </div>
  );
}

export default TextContent;
