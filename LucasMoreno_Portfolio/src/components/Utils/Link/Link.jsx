import React from 'react';

function Link({ url, name }) {
    return (
        <div className="flex gap-4 items-center justify-center">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:px-5 sm:py-2 md:px-10 md:py-3 font-medium sm:text-base md:text-base xl:text-lg rounded-full bg-gradient-to-t sm:duration-0 md:duration-100 from-blue-900 via-blue-800 to-blue-600 text-white w-fit transition-all sm:active:bg-gradient-to-t sm:active:from-blue-950 sm:active:via-blue-800 sm:active:to-blue-600 sm:active:translate-x-[1px] sm:active:translate-y-[1px] md:hover:bg-gradient-to-t md:hover:from-blue-950 md:hover:via-blue-800 md:hover:to-blue-600 md:hover:translate-x-[1px] md:hover:translate-y-[1px]"
            >
                {name}
            </a>
        </div>
    );
}

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
