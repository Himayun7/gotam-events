"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const pathUrl = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <header
      className={`ud-header left-0 top-0 z-40 w-full items-center ${
        sticky
          ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex w-full items-center justify-between px-4">
          {/* Logo Left */}
          <div className="font-playfair w-auto">
            <Link
              href="/"
              className={`block text-2xl font-bold ${sticky ? "py-2 text-dark" : "py-5 text-white"}`}
            >
              Gotam Events
            </Link>
          </div>

          {/* Menu Center */}
          <nav
            id="navbarCollapse"
            className={`navbar absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded border-[.5px] border-body-color/50 px-6 py-4 duration-300 dark:border-body-color/20 lg:visible lg:static lg:transform-none lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
              navbarOpen ? "visibility top-full opacity-100" : "invisible top-[120%] opacity-0"
            }`}
          >
            <ul className="flex items-center justify-center gap-x-8 xl:gap-x-12">
              <li className="submenu-item group relative">
                <button
                  onClick={() => handleSubmenu(0)}
                  className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                    sticky
                      ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                      : "text-white"
                  }`}
                >
                  À propos de nous
                  <span className="pl-1">
                    <svg
                      className={`duration-300 lg:group-hover:rotate-180`}
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`submenu relative left-0 top-full w-[200px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                    openIndex === 0 ? "!-left-[25px]" : "hidden"
                  }`}
                >
                  <Link
                    href="/our-events"
                    className="block rounded bg-white px-4 py-[10px] text-sm text-yellow-500 hover:bg-white hover:text-yellow-600"
                  >
                    Nos événements
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`ud-menu-scroll block py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                    sticky ? "text-dark dark:text-white" : "text-white"
                  }`}
                >
                  Contactez nous
                </Link>
              </li>
            </ul>
          </nav>

          {/* Button Right */}
          <div className="hidden items-center justify-end sm:flex">
            <a
              href="tel:+33787278287"
              className="rounded-xl bg-white/10 px-6 py-3 text-base font-medium text-white shadow-md backdrop-blur-lg transition duration-300 hover:bg-white/20"
            >
              réserver une voiture
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={navbarToggleHandler}
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
          >
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                navbarOpen ? " top-[7px] rotate-45" : ""
              } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                pathUrl === "/" && sticky ? "bg-dark dark:bg-white" : "bg-white"
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                navbarOpen ? "opacity-0 " : ""
              } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                pathUrl === "/" && sticky ? "bg-dark dark:bg-white" : "bg-white"
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                navbarOpen ? " top-[-8px] -rotate-45" : ""
              } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                pathUrl === "/" && sticky ? "bg-dark dark:bg-white" : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
