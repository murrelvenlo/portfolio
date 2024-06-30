import FancyButton from "@/components/ui/fancy-button";
import Profile from "@/components/ui/Profile";
import MagneticWrapper from "@/components/visual-effects/magnetic-wrapper";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import FullScreenMenu from "./full-screen-menu/full-screen-menu";
import ToggleButton from "./full-screen-menu/toggle-button";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [showToggle, setShowToggle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      {/* <div className="hidden md:inline sm:hidden xs:hidden">
        <MagneticWrapper>
          <FancyButton text="Let's talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div> */}
      {/* Toggle button */}
      {showToggle && <ToggleButton open={open} setOpen={setOpen} />}

      {/* Full screen menu */}
      <AnimatePresence mode="wait">
        {open && <FullScreenMenu isOpen={open} setIsOpen={setOpen} />}
      </AnimatePresence>
    </div>
  );
}
