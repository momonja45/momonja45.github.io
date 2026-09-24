import { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        momonja<span>.</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={
          isMenuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      <nav
        id="primary-navigation"
        className={isMenuOpen ? "nav-open" : ""}
      >
        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#github" onClick={closeMenu}>
          GitHub
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? (
            <svg
              className="theme-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
            </svg>
          ) : (
            <svg
              className="theme-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.5 15.5A9 9 0 0 1 8.5 3.5a9 9 0 1 0 12 12Z" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;