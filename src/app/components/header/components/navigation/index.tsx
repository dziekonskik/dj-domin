"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { NavAnimation } from "./navAnimation";
import { routes } from "@/consts/routes";
import { NavigationLink } from "./navigationLink";
import { RefsProfider } from "./context";
import { MEDIA_QUERY } from "@/consts/mediaQueries";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { LIST_VARIANTS } from "./consts/motionVariants";
import { useListAnimationActions } from "./hooks/useListAnimationActions";

type Props = {
  isMenuOpen: boolean;
  closeMobileMenu: () => void;
};

export const Navigation = ({ isMenuOpen, closeMobileMenu }: Props) => {
  const { scrollY } = useScroll();
  const { controls } = useListAnimationActions(isMenuOpen);
  const isMobile = useMediaQuery(MEDIA_QUERY.IS_MOBILE);
  const isMobileMenuOpen = isMobile && isMenuOpen;

  return (
    <RefsProfider>
      <motion.div
        className="fixed top-10 right-5 bg-white w-10 h-10 -z-10 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: isMobileMenuOpen ? 50 : 0 }}
      />
      <nav
        style={{ marginTop: useTransform(scrollY, (value) => 200 + value).get() }}
        className={`mx-auto sm:!mt-10 flex justify-center items-center sm:visible sm:pointer-events-auto ${
          isMobileMenuOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
        }`}
      >
        <motion.ul
          variants={LIST_VARIANTS}
          animate={controls}
          className="flex flex-col sm:flex-row justify-center sm:justify-end gap-20"
        >
          {routes.map(({ href, name }) => (
            <NavigationLink key={href} {...{ href, closeMobileMenu }}>
              {name}
            </NavigationLink>
          ))}
        </motion.ul>
        <NavAnimation />
      </nav>
    </RefsProfider>
  );
};
