"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { NavLink } from "@/components/navLink";
import { Route, ROUTES, routes } from "@/consts/routes";
import homeIcon from "public/home-3d.svg";
import aboutIcon from "public/footer-foot-3d.svg";
import { useUIContext } from "@/app/context";
import { useRefsContext } from "@/app/components/header/components/navigation/context";
import { MEDIA_QUERY } from "@/consts/mediaQueries";
import { useMediaQuery } from "@/hooks";

export const FooterNavigation = () => {
  const pathname = usePathname() as Route;
  const { headerAnimationControls } = useUIContext();
  const { navLinksRef } = useRefsContext();
  const isMobile = useMediaQuery(MEDIA_QUERY.IS_MOBILE);
  const isHomePage = pathname === "/";
  const top = isHomePage ? 0 : 80;

  const handleClick = () => {
    const nextRoute = pathname === "/" ? ROUTES["O MNIE"] : ROUTES.HOME;
    const nextLinkRect = navLinksRef.current[nextRoute].getBoundingRect();
    if (!nextLinkRect) return;

    headerAnimationControls.start({
      x: nextLinkRect.x,
      y: isMobile ? nextLinkRect.y : 40,
    });
  };

  return (
    <div className="flex flex-1 items-end h-40">
      <aside className="flex-1 flex justify-end h-full relative">
        <motion.div className="absolute" animate={{ top }} initial={false}>
          <Image src={isHomePage ? homeIcon : aboutIcon} alt="" className="h-20 w-20" />
        </motion.div>
      </aside>
      <ul className="grid gap-10 h-full">
        {routes.map(({ href, name }) => (
          <NavLink key={href} {...{ href }} onClick={handleClick}>
            {name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
