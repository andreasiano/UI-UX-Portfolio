import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Small delay to ensure content is painted at the top
    const timeout = setTimeout(() => setReady(true), 0);
    return () => {
      clearTimeout(timeout);
      setReady(false);
    };
  }, [pathname]);

  // Hide content until scroll is set
  if (!ready) return null;

  return children || null;
}
