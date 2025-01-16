import React from 'react';
import { FiCornerRightUp } from 'react-icons/fi';

function LinkExperience({ urls }) {
    return (
        <div className="links-container gap-2 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {urls.map((url, index) => {
                const urlParts = url.split("/");
                const lastSegment = urlParts[urlParts.length - 1];
                const formattedName = lastSegment
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());

                return (
                    <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          sm:px-6 sm:py-3 md:px-8 md:py-4 sm:mb-2 md:mb-3 xl:mb-6 rounded-full
                          flex items-center sm:gap-x-1 gap-x-2 
                          text-gray-900 bg-transparent
                          shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                          transition-all
                          md:hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                          sm:active:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                        md:hover:text-blue-700
                        md:hover:bg-gray-200
                        sm:active:text-blue-700
                        sm:active:bg-gray-200
                          md:hover:translate-y-1
                          sm:active:translate-y-1
                        `}
                    >
                        <FiCornerRightUp />
                        <span className="sm:text-sm md:text-base">{formattedName}</span>
                    </a>
                );
            })}
        </div>
    );
}

export default LinkExperience;
