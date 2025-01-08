import React from 'react';

function LinkCertificate ({ url }) {
    return (
                    <a
                        href={url}
                        target="_blank"
                        className="block max-w-sm p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-400 hover:text-slate-200"
                    >
                        Ver Certificado
                    </a>
    );
};

export default LinkCertificate;