import { useEffect, useState } from "react";

/** Tracks whether the page has scrolled past a threshold, used to add a
 * shadow under the fixed navbar. */
export function useNavScroll(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
