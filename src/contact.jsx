import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mlgpqvde", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="relative w-full bg-white text-black px-6 md:px-16 py-28 overflow-hidden">
        {/* Animated layered waves */}
        <div className="absolute bottom-0 left-0 w-full h-36 overflow-hidden">
          {/* Wave 1 */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full opacity-100 animate-wave-slow"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C360,100 1080,0 1440,80 L1440,150 L0,150 Z"
              className="fill-black"
            />
          </svg>
          {/* Wave 2 */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full opacity-50 animate-wave-medium"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C360,20 1080,100 1440,50 L1440,150 L0,150 Z"
              className="fill-black"
            />
          </svg>
          {/* Wave 3 */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full opacity-30 animate-wave-fast"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C360,90 1080,30 1440,70 L1440,150 L0,150 Z"
              className="fill-black"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start z-10">
          {/* LEFT SIDE */}
          <div className="animate-fade-in">
            <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-4">
              Contact
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Let’s work together
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed">
              I’m always open to discussing new opportunities, collaborations, or
              creative ideas. Feel free to reach out — I’d love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-black w-5 h-5" />
                <span className="text-gray-700">monicaekokovena@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-black w-5 h-5" />
                <span className="text-gray-700">0501376295</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-black w-5 h-5" />
                <span className="text-gray-700">Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
            <input type="hidden" name="_subject" value="New message from portfolio!" />

            {/* NAME */}
            <div className="relative w-full">
              <input
                type="text"
                name="name"
                required
                className="peer block w-full border-b border-gray-300 py-3 bg-transparent outline-none focus:border-black transition"
                placeholder="Your Name"
              />
             
            </div>

            {/* EMAIL */}
            <div className="relative w-full">
              <input
                type="email"
                name="email"
                required
                className="peer block w-full border-b border-gray-300 py-3 bg-transparent outline-none focus:border-black transition"
                placeholder="Your Email"
              />
              
            </div>

            {/* MESSAGE */}
            <div className="relative w-full">
              <textarea
                name="message"
                required
                rows="4"
                className="peer block w-full border-b border-gray-300 py-3 bg-transparent outline-none focus:border-black transition resize-none"
                placeholder="Your Message"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 px-10 py-3 border border-black text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* FEEDBACK */}
            {status === "success" && (
              <p className="text-sm mt-2 font-medium animate-fade-in">
                Your message has been sent successfully ✨.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm mt-2 font-medium animate-fade-in">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="w-full bg-black text-white px-6 md:px-16 pt-2 pb-4 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm">
            © {new Date().getFullYear()} Monica Edem Kokovena. All rights reserved.
          </span>

          <div className="flex gap-6 text-sm">
            <a
              href="https://github.com/MonicaEdem"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/monica-edem-kokovena-6016a1118?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition"
            >
              LinkedIn
            </a>
           
          </div>
        </div>
      </footer>

      {/* INLINE ANIMATIONS */}
      <style jsx>{`
        @keyframes wave-slow {
          0%,100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes wave-medium {
          0%,100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-50%) translateY(-5px); }
        }
        @keyframes wave-fast {
          0%,100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-50%) translateY(3px); }
        }

        .animate-wave-slow { animation: wave-slow 20s ease-in-out infinite; }
        .animate-wave-medium { animation: wave-medium 15s ease-in-out infinite; }
        .animate-wave-fast { animation: wave-fast 12s ease-in-out infinite; }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.4s ease forwards; }
      `}</style>
    </>
  );
};

export default Contact;