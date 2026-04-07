import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import bg from "./assets/bg.png";
import code from "./assets/code.svg";
import idea from "./assets/idea.svg";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [solidNav, setSolidNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const sections = ["home", "about", "skills", "projects", "contact"];
  const [showMore, setShowMore] = useState(false);

  // Handle Scroll (active section + navbar bg)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 4;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }

      setSolidNav(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Nav click (desktop)
  const handleNavClick = (sec) => (e) => {
    e.preventDefault();

    const el = document.getElementById(sec);

    if (el) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
      const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="relative w-full text-white overflow-x-hidden">
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
          solidNav ? "bg-white/80 py-4" : "bg-black/0 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16">
          {/* Logo */}
          <div
            className={`text-xl font-semibold tracking-[0.3em] ${
              solidNav ? "text-black" : "text-white"
            }`}
          >
            MEK
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-12 text-xs uppercase tracking-[0.25em]">
            {sections.map((sec) => (
              <li key={sec} className="relative">
                <a
                  href={`#${sec}`}
                  onClick={handleNavClick(sec)}
                  className={`relative pb-1 ${
                    solidNav
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}

                  {activeSection === sec && (
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-purple-500 via-yellow-400 to-transparent" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden ${solidNav ? "text-black" : "text-white"}`}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 flex items-start justify-center pt-28 bg-black/40 backdrop-blur-sm">
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-[85%] max-w-sm bg-white text-black rounded-2xl shadow-xl px-8 py-10"
            >
              <ul className="flex flex-col items-center gap-8 text-sm uppercase tracking-[0.25em]">
                {sections.map((sec) => (
                  <li key={sec} className="relative">
                    <a
                      href={`#${sec}`}
                      onClick={(e) => {
                        e.preventDefault();

                        const el = document.getElementById(sec);

                        setMenuOpen(false);

                        setTimeout(() => {
                          if (el) {
                            const navbarHeight =
                              document.querySelector("nav")?.offsetHeight || 80;
                            const y =
                              el.getBoundingClientRect().top +
                              window.scrollY -
                              navbarHeight;

                            window.scrollTo({
                              top: y,
                              behavior: "smooth",
                            });
                          }
                        }, 120);
                      }}
                    >
                      {sec.charAt(0).toUpperCase() + sec.slice(1)}

                      {/*ACTIVE INDICATOR */}
                      {activeSection === sec && (
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-[70%] bg-gradient-to-r from-purple-500 via-yellow-400 to-transparent rounded-full transition-all duration-300" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center text-center h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-6"
      >
        {/* Small intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="uppercase tracking-[0.6em] text-xs text-gray-400 mb-6"
        >
          Monica Edem Kokovena
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-extrabold leading-none tracking-tight"
        >
          DEVELOPER
        </motion.h1>

        {/* CTA */}
        <motion.a
          href="/cv.pdf"
          download
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-14 px-12 py-3 border border-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
        >
          Download CV
        </motion.a>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs tracking-[0.3em]">
          <span>SCROLL</span>
          <div className="w-[1px] h-10 bg-white animate-pulse"></div>
        </div>
      </motion.section>

      {/* About Section */}
      <section
        id="about"
        className="w-full bg-white text-black px-6 md:px-16 py-22"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* LEFT - TEXT */}
          <div className="lg:col-span-2 pr-0 lg:pr-6 order-2 lg:order-1">
            <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-4">
              About
            </p>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-gray-900">
              <span className="text-yellow-400 drop-shadow-[2px_2px_0_rgb(0,0,0)]">
                T
              </span>
              urning ideas into meaningful web experiences
            </h2>

            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              {/* ALWAYS VISIBLE */}
              <p>
                Hello! I’m Monica Kokovena, a frontend developer based in Accra,
                Ghana. With a background in Computer Science and a Master’s in
                Health Informatics, I have cultivated a strong foundation in
                building digital solutions that are both functional and
                user-friendly.
              </p>

              <p>
                Over the years, I’ve collaborated on diverse projects; from
                developing reusable components for news platforms to delivering
                scalable solutions for startups. I enjoy transforming complex
                ideas into seamless, intuitive web experiences that delight
                users and meet business goals.
              </p>

              {/* HIDDEN UNTIL READ MORE */}
              <div
                className={`transition-all duration-500 overflow-hidden mt-[-10px] ${
                  showMore ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-5 mt-5">
                  <p>
                    My approach to development emphasizes clean design,
                    responsive interfaces, and collaboration. I thrive in
                    dynamic environments where I can contribute to the entire
                    product lifecycle—design, implementation, testing, and
                    optimization.
                  </p>

                  <p>
                    Beyond coding, I’m passionate about learning, solving
                    challenging problems, and creating web experiences that
                    leave a lasting impact. I’m always excited to explore new
                    technologies and bring innovative ideas to life.
                  </p>

                  <p>
                    I also believe in creating designs that are visually
                    engaging, intuitive, and modern. Combining functionality
                    with aesthetics is key to delivering digital experiences
                    that truly resonate with users.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 text-xs uppercase tracking-[0.3em] border-b border-black pb-1 hover:text-gray-600 transition"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* RIGHT - IMAGE + ART */}
          <div className="relative flex justify-center order-1 lg:order-2 mt-10 lg:mt-0">
            {/* PURPLE GLOW */}
            <div className="absolute w-[260px] md:w-[320px] h-[260px] md:h-[320px] bg-purple-500/70 blur-[80px] rounded-full animate-pulse"></div>

            {/* YELLOW GLOW */}
            <div className="absolute w-[200px] md:w-[260px] h-[200px] md:h-[260px] bg-yellow-400/60 blur-[60px] rounded-full animate-pulse"></div>

            {/* YELLOW RING */}
            <div className="absolute w-[260px] md:w-[320px] h-[260px] md:h-[320px] border-[4px] md:border-[6px] border-yellow-400/70 rounded-full animate-spin-slow"></div>

            {/* ICONS */}
            <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 flex gap-6 md:gap-10 z-20">
              <img
                src={idea}
                alt="Idea icon"
                className="w-10 h-10 md:w-[70px] md:h-[70px] opacity-0"
                style={{ animation: "fadeSwap 6s infinite" }}
              />
              <img
                src={code}
                alt="Code icon"
                className="w-10 h-10 md:w-[70px] md:h-[70px] opacity-0"
                style={{
                  animation: "fadeSwap 6s infinite",
                  animationDelay: "3s",
                }}
              />
            </div>

            {/* ONLY THIS PART IS NEW */}
            <div className="relative z-10 flex flex-col items-center">
              {/* IMAGE (UNCHANGED) */}
              <img
                src={bg}
                alt="About visual"
                className="w-[220px] md:w-[280px] lg:w-[320px] object-contain"
              />

              {/* BUTTON */}
              <a
                href="/cv.pdf"
                download
                className="mt-6 px-8 py-3 border border-black text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-300"
              >
                Download CV
              </a>
            </div>

            {/* BACK SOFT BASE */}
            <div className="absolute -z-10 w-[220px] md:w-[300px] h-[220px] md:h-[300px] bg-gray-100 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
