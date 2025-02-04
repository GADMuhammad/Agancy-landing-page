import { motion } from "framer-motion";

const links = ["About", "Services", "Projects"];

const socialMediaLinks = [
  { iconName: "logo-linkedin", link: "https://www.linkedin.com/in/mohgad/" },
  { iconName: "mail", link: "mailto:muhammadgadwork@gmail.com" },
  { iconName: "call", link: "tel:+201069429820" },
  { iconName: "send", link: "https://t.me/mohgad" },
  {
    iconName: "storeFront",
    link: "https://www.frontendmentor.io/profile/GADMuhammad",
  },
];

export default function Footer() {
  return (
    <footer className="bg-light-moderate-cyan p-10 text-center font-bold">
      <h3 className="mb-6 font-Barlow text-3xl font-bold tracking-widest text-Dark-desaturated-cyan">
        sunnyside
      </h3>

      <ul className="mb-6 flex flex-wrap justify-center gap-10">
        {links.map((link) => (
          <li key={link}>
            <a
              className="text-lg font-semibold tracking-wider text-Dark-moderate-cyan transition-colors duration-300 hover:text-Dark-desaturated-cyan"
              href={`#${link}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <ul className="mb-10 flex flex-wrap justify-center gap-10">
        {socialMediaLinks.map(({ iconName, link }) => (
          <motion.li
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            key={iconName}
          >
            <a target="_blank" href={link}>
              <ion-icon name={iconName} />
            </a>
          </motion.li>
        ))}
      </ul>

      <p className="font-Barlow text-lg tracking-widest text-Dark-moderate-cyan hover:animate-pulse">
        Developed By Muhammad Gad
      </p>
    </footer>
  );
}
