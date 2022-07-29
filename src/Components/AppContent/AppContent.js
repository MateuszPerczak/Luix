import GlobalStyle from "../GlobalStyle/GlobalStyle";
import Loader from "../Loader/Loader";
import Desktop from "../Desktop/Desktop";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setTimeout(() => {
      setIsDesktop(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        {isLoading && <Loader />}
        {isDesktop && <Desktop />}
      </AnimatePresence>
    </>
  );
};

export default AppContent;
