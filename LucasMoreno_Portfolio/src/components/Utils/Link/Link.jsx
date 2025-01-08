import React from 'react';

function Link ({ url, name}) {
    return (
                    <a
                        href={url}
                        target="_blank"
                        className="block p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-300 text-center"
                    >
                        {name}
                    </a>
    );
};

export default Link;