import React from 'react';
import './Link.css';

function Link({ url, name }) {
    return (
        <a
            href={url}
            target="_blank"
            className="button-style"
        >
            <span>{name}</span>
        </a>
    );
};

function LinkList({ links }) {
    return (
        <div className={`links-container ${links.length === 1 ? 'single' : ''}`}>
            {links.map((link, index) => (
                <Link key={index} url={link.url} name={link.name} />
            ))}
        </div>
    );
}

export default LinkList;
