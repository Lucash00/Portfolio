import React from 'react';
import './Link.css';

const LinkExperience = ({ urls }) => {
    return (
        <div className="links-container">
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
                        className="button-style"
                    >
                        <span>{formattedName}</span>
                    </a>
                );
            })}
        </div>
    );
};

export default LinkExperience;