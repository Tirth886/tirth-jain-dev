import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.2) {
  const { ref, inView } = useInView({
    threshold,
    rootMargin: sectionName === "Home" 
      ? "-50px 0px -30% 0px"  // Less restrictive for home section
      : "-120px 0px -40% 0px", // Normal margins for other sections
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 300) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
