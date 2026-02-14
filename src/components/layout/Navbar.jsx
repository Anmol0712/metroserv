import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ROUTES } from "../../routes/route";
import Logo from "../ui/Logo";

const sections = [
  { label: "Home", id: "home", path: ROUTES.HOME },
  { label: "About Us", id: "about", path: ROUTES.ABOUT },
  { label: "Services", id: "services", path: ROUTES.SERVICES },
  { label: "Contact", id: "contact", path: ROUTES.CONTACT },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef(null);
  const location = useLocation();

  /* ---------- Scroll Effect (Gloss) ---------- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- Outside Click Close ---------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  /* ---------- Scroll-Spy ---------- */
  useEffect(() => {
    // Only use scroll-spy on the home page
    if (location.pathname !== ROUTES.HOME) {
      // Set active based on current route
      const currentSection = sections.find(sec => sec.path === location.pathname);
      if (currentSection) {
        setActive(currentSection.id);
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Update active state when clicking on menu items
  const handleNavClick = (id) => {
    setActive(id);
    setOpen(false);
    // Scroll to top when navigating to a different page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/70 backdrop-blur-2xl shadow-md" : "bg-white"}
      `}
    >
      {/* NAV BAR */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <Logo className="h-10 w-auto" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <DesktopNavItem
              key={s.id}
              id={s.id}
              label={s.label}
              to={s.path}
              onClick={handleNavClick}
              active={active === s.id}
            />
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <NavLink
          to={ROUTES.BOOK_CALL}
          className="hidden md:inline-flex bg-teal-600 text-white px-6 py-2.5 rounded-full
                     shadow-sm hover:shadow-md transition"
        >
          Book Strategy Call
        </NavLink>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-900"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white/70 backdrop-blur-2xl border-t border-white/30 shadow-lg">
          <div className="px-6 py-8 flex flex-col gap-6">
            {sections.map((s) => (
              <MobileNavItem
                key={s.id}
                id={s.id}
                label={s.label}
                to={s.path}
                onClick={handleNavClick}
                active={active === s.id}
              />
            ))}

            {/* MOBILE CTA */}
            <NavLink
              to={ROUTES.BOOK_CALL}
              onClick={() => setOpen(false)}
              className="mt-6 relative group bg-teal-600 text-white text-center py-4 rounded-full
                         font-semibold shadow-lg overflow-hidden"
            >
              <span className="relative z-10">Book Strategy Call</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

/* ---------- Desktop Nav Item ---------- */
const DesktopNavItem = ({ to, label, active, id, onClick }) => (
  <NavLink
    to={to}
    onClick={() => onClick(id)}
    className={({ isActive }) => `
      group relative py-2 px-3 rounded-lg overflow-hidden
      ${isActive ? "text-teal-600" : "text-slate-700 hover:text-slate-900"}
    `}
  >
    {/* Glossy hover layer */}
    <span
      className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent
                 opacity-0 group-hover:opacity-100
                 transition-opacity duration-300 -z-10"
    />
    
    {/* Text */}
    <span className="relative text-sm font-medium transition-colors">
      {label}
      
      {/* Underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-teal-600 transition-all duration-300
          ${active ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </span>
  </NavLink>
);

/* ---------- Mobile Nav Item ---------- */
const MobileNavItem = ({ id, to, label, onClick, active }) => (
  <NavLink
    to={to}
    onClick={() => onClick(id)}
    className={({ isActive }) => `
      group relative py-3 px-4 -mx-4 rounded-lg overflow-hidden active:bg-slate-50
      ${isActive ? "text-teal-600" : "text-slate-900"}
    `}
  >
    {/* Enhanced Glossy hover layer */}
    <span
      className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-white/10
                 opacity-0 group-hover:opacity-100 group-active:opacity-100
                 transition-all duration-200 -z-10"
    />
    
    {/* Text */}
    <span className="relative inline-block text-lg font-medium">
      {label}

      {/* Underline (text-width only) */}
      <span
        className={`absolute left-0 -bottom-2 h-[2px] bg-teal-500
          transition-all duration-200 ease-out
          ${active ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </span>
  </NavLink>
);


export default Navbar;
