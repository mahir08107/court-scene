import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function DialogueBox({ caseData, onChoice }) {
  const handleClick = (impact) => {
    // Flash effect placeholder (could be implemented in GameWrapper)
    onChoice(impact);
  };

  return (
    <div className="absolute bottom-4 left-4 right-4 flex flex-col p-6 bg-[#f4e4bc] border-4 border-[#8b4513] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] rounded-sm">
      {/* Speaker name */}
      <div className="text-[10px] mb-2 text-[#8b4513] font-bold uppercase tracking-widest">
        {caseData.speaker}
      </div>

      {/* Dialogue Text */}
      <div className="w-full text-[12px] leading-relaxed text-black mb-8 min-h-[60px]">
        <Typewriter
          options={{
            strings: caseData.text,
            autoStart: true,
            delay: 20,
            cursor: "█",
          }}
        />
      </div>

      {/* Buttons - Bottom Right */}
      <div className="flex justify-end gap-4 mt-auto">
        {caseData.choices.map((c, i) => (
          <motion.button
            key={i}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#222",
              color: "#fff"
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 text-[10px] border-2 border-black font-bold uppercase transition-colors
              ${i === 0 ? "bg-[#4ade80] hover:bg-[#22c55e]" : "bg-[#f87171] hover:bg-[#ef4444]"}
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
            `}
            onClick={() => handleClick(c.impact)}
          >
            {c.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
