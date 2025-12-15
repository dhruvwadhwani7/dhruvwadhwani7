import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "../project_layout.css";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "dhruvwadhwani77277@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleDownload = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      // Open in a new tab for iOS devices
      window.open("/assets/Dhruv_Wadhwani_Resume.pdf", "_blank");
    } else {
      // Direct download for desktop and Android
      const link = document.createElement("a");
      link.href = "/assets/Dhruv_Wadhwani_Resume.pdf";
      link.download = "Dhruv_Wadhwani_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-2">
      {/* Copy Email Button */}
      <motion.button
        onClick={copyToClipboard}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 1.05 }}
        className="relative px-3 py-3 text-xs text-center rounded-full font-light bg-primary w-[10rem] cursor-pointer overflow-hidden email-copy-button"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.p
              className="flex items-center justify-center gap-2"
              key="copied"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <img src="assets/copy-done.svg" className="w-4" alt="copy Icon" />
              Email Copied
            </motion.p>
          ) : (
            <motion.p
              className="flex items-center justify-center gap-2"
              key="copy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <img src="assets/copy.svg" className="w-4" alt="copy icon" />
              Copy Email
            </motion.p>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Download Resume Button */}
      <motion.button
        onClick={handleDownload}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 1.05 }}
        className="relative px-3 py-3 text-xs text-center rounded-full font-light bg-primary w-[10rem] cursor-pointer overflow-hidden flex items-center justify-center gap-2 download-button"
      >
        Download Resume
      </motion.button>
    </div>
  );
};

export default CopyEmailButton;
