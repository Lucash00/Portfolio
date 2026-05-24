import { useEffect, useMemo, useState } from "react";
import TextContent from "./Font/TextContent.jsx";

const tabBaseClass =
  "rounded-full border border-transparent px-4 py-2 text-sm font-semibold tracking-tight sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 transition-[color,background-color,border-color,box-shadow] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60";

const tabInactiveClass =
  "text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-blue-700 sm:active:bg-gray-200 sm:active:text-blue-700";

const tabActiveClass =
  "font-bold text-blue-700 bg-gray-200 border-slate-200 shadow-[-1px_-1px_4px_rgba(255,255,255,0.75),_1px_1px_4px_rgba(0,0,0,0.06)]";

const SectionToggle = ({ sections }) => {
  const filteredSections = useMemo(
    () =>
      sections.filter(
        (section) => section.content !== "" && section.content != null,
      ),
    [sections],
  );

  const [selectedSection, setSelectedSection] = useState(
    () => filteredSections[0]?.name ?? "",
  );
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    if (
      filteredSections.length > 0 &&
      !filteredSections.some((section) => section.name === selectedSection)
    ) {
      setSelectedSection(filteredSections[0].name);
    }
  }, [filteredSections, selectedSection]);

  const handleSelect = (name) => {
    if (name === selectedSection) return;

    setContentVisible(false);
    window.setTimeout(() => {
      setSelectedSection(name);
      setContentVisible(true);
    }, 140);
  };

  if (!filteredSections.length) {
    return null;
  }

  const activeSection = filteredSections.find(
    (section) => section.name === selectedSection,
  );

  return (
    <div className="section-toggle">
      <div
        className="flex flex-wrap gap-2.5 border-b border-slate-200 pb-4"
        role="tablist"
        aria-label="Secciones de información"
      >
        {filteredSections.map((section) => {
          const isActive = selectedSection === section.name;

          return (
            <button
              key={section.name}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${tabBaseClass} ${isActive ? tabActiveClass : tabInactiveClass}`}
              onClick={() => handleSelect(section.name)}
            >
              {section.name}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        aria-live="polite"
        className={`mt-5 transition-opacity duration-200 ease-out ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {activeSection?.content && (
          <TextContent content={activeSection.content} />
        )}
      </div>
    </div>
  );
};

export default SectionToggle;
