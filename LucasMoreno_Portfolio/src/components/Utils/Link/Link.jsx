import React from 'react';
import { FiGithub, FiFileText, FiExternalLink } from 'react-icons/fi';

function getIcon(name) {
    switch (name) {
        case 'Ver Proyecto':
            return <FiExternalLink class="sm:scale-100 md:scale-110"/>;
        case 'Ver Código':
            return <FiGithub class="sm:scale-100 md:scale-110"/>;
        case 'Ver Certificado':            
            return <FiFileText class="sm:scale-100 md:scale-110"/>;
    }
  }

function Link({ url, name }) {
  return (
    <div className="flex gap-4 items-center justify-center">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-8 lg:py-4 xl:px-8 xl:py-4 2xl:px-8 2xl:py-4 rounded-full
          flex items-center sm:gap-1 gap-2 my-2 
          text-gray-900 bg-transparent
          shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
          transition-all
          hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
          hover:text-blue-700
          hover:bg-gray-200
          hover:translate-y-1
        `}
      >
        {getIcon(name)}
        <span class="sm:text-sm md:text-base">{name}</span>
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
