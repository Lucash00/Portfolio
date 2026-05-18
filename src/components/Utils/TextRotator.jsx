import React, { useState, useEffect } from "react";
import { AnimatedSpan } from "./AnimatedSpan.styled";

const TextRotator = ({ texts, interval = 5000 }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [letters, setLetters] = useState(texts[0].split(""));
    const [phase, setPhase] = useState("in"); // 'in' | 'out'

    useEffect(() => {
        let timeout;
    
        if (phase === "in") {
            // Mostrar la palabra completa durante el intervalo definido
            timeout = setTimeout(() => {
                setPhase("out");
            }, interval);
        } else {
            // Después de la animación de salida, mostrar la siguiente palabra inmediatamente
            timeout = setTimeout(() => {
                const nextIndex = (currentTextIndex + 1) % texts.length;
                setCurrentTextIndex(nextIndex);
                setLetters(texts[nextIndex].split(""));
                setPhase("in");
            }, 1400); // duración de la animación de salida
        }
    
        return () => clearTimeout(timeout);
    }, [phase, currentTextIndex, texts, interval]);
    

    return (
        <div className="text" aria-label={texts[currentTextIndex]}>
            {letters.map((letter, index) => (
                <AnimatedSpan
                    key={index}
                    $index={index}
                    $letter={letter}
                    className={phase}
                >
                    {letter}
                </AnimatedSpan>
            ))}
        </div>
    );
};

export default TextRotator;
