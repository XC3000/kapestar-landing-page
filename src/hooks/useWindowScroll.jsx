import React, { useEffect, useState } from "react";

const useWindowScroll = () => {
  const [scroll, setScroll] = useState(window.pageYOffset);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
};

export default useWindowScroll;
