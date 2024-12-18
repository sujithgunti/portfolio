"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocument } from "react-icons/hi";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const SocialLinks = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const links = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/sujithgunti",
      className: "hover:bg-[#2ea44f] hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/sujithgunti/",
      className: "hover:bg-[#0077b5] hover:text-white"
    },
    {
      name: "Resume",
      icon: <HiDocument className="w-5 h-5" />,
      action: () => setIsResumeOpen(true),
      className: "hover:bg-blue-500 hover:text-white"
    }
  ];

  return (
    <>
      <motion.div 
        className="fixed top-6 right-6 z-50 flex items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {links.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="relative group"
          >
            {link.url ? (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900/80 text-neutral-300 transition-all duration-300 border border-neutral-700/50 backdrop-blur-sm shadow-lg",
                  link.className
                )}
              >
                {link.icon}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-white whitespace-nowrap bg-neutral-900/90 px-2 py-1 rounded-full border border-neutral-700/50">
                  {link.name}
                </span>
              </a>
            ) : (
              <button
                onClick={link.action}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900/80 text-neutral-300 transition-all duration-300 border border-neutral-700/50 backdrop-blur-sm shadow-lg",
                  link.className
                )}
              >
                {link.icon}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-white whitespace-nowrap bg-neutral-900/90 px-2 py-1 rounded-full border border-neutral-700/50">
                  {link.name}
                </span>
              </button>
            )}
          </motion.div>
        ))}
      </motion.div>

      {isResumeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsResumeOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-neutral-900/90 p-4 rounded-2xl max-w-4xl w-full mx-4 h-[80vh] relative border border-neutral-700/50 modal-content"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-700/50 transition-colors duration-200"
            >
              ✕
            </button>
            <iframe
              src="/resume/SUJITH-GUNTI-Resume-.pdf"
              className="w-full h-full rounded-xl bg-white modal-content"
              title="Resume"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}; 