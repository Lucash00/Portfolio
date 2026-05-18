import { useEffect } from "react";

const PopUp = ({ message, onClose, duration = 1500 }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }, [onClose, duration]);

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg text-center"
                onClick={(e) => e.stopPropagation()} // Evita que el clic en el popup lo cierre
            >
                <p>{message}</p>
            </div>
        </div>
    );
};

export default PopUp;
