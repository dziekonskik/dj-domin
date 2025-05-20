"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { NavLink } from "@/components/navLink";
import { Route, routes } from "@/consts/routes";
import homeIcon from "public/home-3d.svg";
import aboutIcon from "public/footer-foot-3d.svg";

export const FooterNavigation = () => {
  const pathname = usePathname() as Route;
  const isHomePage = pathname === "/";
  const top = isHomePage ? 0 : 80;

  return (
    <div className="flex flex-1 items-end h-40">
      <aside className="flex-1 flex justify-end h-full relative">
        <motion.div className="absolute" animate={{ top }} initial={false}>
          <Image src={isHomePage ? homeIcon : aboutIcon} alt="" className="h-20 w-20" />
        </motion.div>
      </aside>
      <ul className="grid gap-10 h-full">
        {routes.map(({ href, name }) => (
          <NavLink key={href} {...{ href }}>
            {name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
