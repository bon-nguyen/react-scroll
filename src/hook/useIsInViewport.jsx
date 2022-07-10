import React, { useState, useEffect } from "react";

function useIsInViewport(ref) {
  const [isInViewPort, setIsInViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { bottom } = ref.current.getBoundingClientRect();
      return setIsInViewport(window.innerHeight - bottom > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, isInViewPort]);

  return isInViewPort;
}

export default useIsInViewport;
