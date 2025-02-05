import { useRef } from "react";
import burgerMenu from "./BurgerMenu.module.scss";
import { useState } from "react";

const links = [
  { title: "About" },
  { title: "Services" },
  { title: "Projects" },
  { title: "Contact", url: "https://demo-store-tan-one.vercel.app/contact" },
];

export default function Header() {
  const menuRef = useRef(null);

  const closeMenu = () => {
    if (menuRef.current.checked) menuRef.current.checked = false;
  };

  return (
    <>
      <header
        className={`${burgerMenu.header} sticky top-0 z-10 flex h-20 items-center justify-between bg-light-blue px-6 py-5 shadow-header`}
      >
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="font-Barlow text-3xl font-semibold tracking-widest text-white"
        >
          sunnyside
        </button>

        <input
          ref={menuRef}
          type="checkbox"
          name="burgerInput"
          id="burgerInput"
        />

        <label htmlFor="burgerInput">
          <div />
          <div />
          <div />
        </label>

        <ul className="flex justify-between gap-10">
          {links.map(({ title, url }) => (
            <li key={title}>
              <a
                className={`rounded-full p-4 font-Barlow transition-colors hover:bg-light-Grayish-blue hover:text-white ${title === "Contact" ? "bg-white uppercase tracking-widest text-black transition-shadow hover:shadow-header" : "bg-transparent tracking-wider text-white"}`}
                href={url ?? `#${title}`}
                target={url ? "_blank" : "_self"}
                onClick={closeMenu}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section
        id="About"
        className="h-restScreenAfterHeader bg-headerBg bg-cover bg-center px-6 text-white max-second:bg-headerMobileBg"
      >
        <h2 className="py-28 text-center text-7xl font-bold tracking-widest max-forth:text-[12vw]">
          WE ARE CREATIVES
        </h2>

        <img
          src="icon-arrow-down.svg"
          className="mx-auto"
          alt="An arrow pointing to the image of an orange."
        />
      </section>
    </>
  );
}
