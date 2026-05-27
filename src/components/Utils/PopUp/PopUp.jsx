import { useEffect } from "react";
import { createPortal } from "react-dom";

const PopUp = ({ message, onClose, duration = 1500 }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    if (typeof document === "undefined") return null;

    return createPortal(
        <div
            className="fixed inset-0 flex items-center justify-center z-[10001]"
            onClick={onClose}
            role="status"
            aria-live="polite"
        >
            <div
                className="bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <p>{message}</p>
            </div>
        </div>,
        document.body
    );
};

export default PopUp;
