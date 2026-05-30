import { useEffect, useState } from 'react';

const PORTRAIT_LAYOUT_QUERY = '(max-width: 1023px) and (max-aspect-ratio: 1/1)';

export function useExperiencePortraitLayout() {
  const [isPortraitLayout, setIsPortraitLayout] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(PORTRAIT_LAYOUT_QUERY).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(PORTRAIT_LAYOUT_QUERY);
    const sync = () => setIsPortraitLayout(media.matches);

    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return isPortraitLayout;
}
