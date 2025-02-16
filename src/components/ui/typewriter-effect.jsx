"use client";

import { cn } from "../../lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}) => {
  // Split text inside of words into array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { display: "inline-block", opacity: 1, width: "fit-content" },
        { duration: 0.3, delay: stagger(0.1), ease: "easeInOut" }
      );
    }
  }, [isInView]);

  const renderWords = () => (
    <motion.div ref={scope} className="tw-inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="tw-inline-block">
          {word.text.map((char, index) => (
            <motion.span
              key={`char-${index}`}
              className={cn("tw-text-black tw-hidden", word.className)}
            >
              {char}
            </motion.span>
          ))}
          <motion.span className="tw-inline-block">&nbsp;</motion.span>
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      className={cn(
        "tw-text-3xl lg:tw-text-5xl tw-font-bold tw-text-left",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "tw-inline-block tw-rounded-sm tw-w-[4px] tw-h-4 md:tw-h-6 lg:tw-h-10 tw-bg-accent-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="tw-inline-block mr-2">
          {word.text.map((char, index) => (
            <span key={`char-${index}`} className={cn("tw-text-black", word.className)}>
              {char}
            </span>
          ))}
          <span className="tw-inline-block">&nbsp;</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("tw-flex tw-space-x-1 tw-my-6", className)}>
      <motion.div
        className="tw-overflow-hidden tw-pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div
          className="tw-text-xs sm:tw-text-base md:tw-text-xl lg:tw-text-3xl xl:tw-text-5xl tw-font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "tw-block tw-rounded-sm tw-w-[4px] tw-h-4 sm:tw-h-6 xl:tw-h-12 tw-bg-accent-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
