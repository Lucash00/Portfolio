import React from 'react';

const LinkExperience = ({ urls }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="block max-w-sm p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-300 hover:font-bold"
                    >
                        {formattedName}
                    </a>
                );
            })}
        </div>
    );
};

export default LinkExperience;