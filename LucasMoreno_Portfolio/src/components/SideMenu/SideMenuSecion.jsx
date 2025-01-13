import React from "react";

const SideMenuSection = ({ href, icon, text, isActive }) => {
  return (
    <a
      href={href}
      className={`flex items-center space-x-4 px-4 py-3 w-full transition-colors border-b border-gray-700 ${
        isActive
          ? "text-yellow-400 border-yellow-400"
          : "text-gray-300 hover:text-yellow-400 hover:border-yellow-400"
      }`}
    >
      {/* Ícono: puede ser un elemento `i` o una imagen */}
      {typeof icon === "string" ? (
        <i className={`${icon} text-xl`}></i>
      ) : (
        <img src={icon.src} alt="icon" className="w-6 h-6" />
      )}
      {/* Texto */}
      <span className="text-sm">{text}</span>
    </a>
  );
};

export default SideMenuSection;
