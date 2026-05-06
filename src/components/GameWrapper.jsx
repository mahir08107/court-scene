import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DialogueBox from "./DialogueBox.jsx";
import StatHUD from "./StatHUD.jsx";
import cases from "../data/cases.json";

export default function GameWrapper({ onGameOver }) {
  const [caseIdx, setCaseIdx] = useState(0);
  const [currentCase, setCurrentCase] = useState(cases[0]);
  const [stats, setStats] = useState({ trust: 50, economy: 50, chaos: 50 });
  const [day, setDay] = useState(1);

  // Background path logic: use the 'scene' field from JSON or fallback to idle
  const getBgPath = () => {
    const sceneName = currentCase.scene || "Accused Scene";
    return `/assets/${sceneName}.png`;
  };

  const nextCase = () => {
    const nextIdx = (caseIdx + 1) % cases.length;
    setCaseIdx(nextIdx);
    setCurrentCase(cases[nextIdx]);
    setDay((d) => d + 1);
  };

  const applyImpact = (impact) => {
    setStats((s) => {
      const newStats = {
        trust: Math.min(100, Math.max(0, s.trust + impact.trust)),
        economy: Math.min(100, Math.max(0, s.economy + impact.economy)),
        chaos: Math.min(100, Math.max(0, s.chaos + impact.chaos)),
      };
      if (Object.values(newStats).some((v) => v === 0 || v === 100)) {
        onGameOver(day);
      }
      return newStats;
    });
    nextCase();
  };

  return (
    <div className="relative w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Cinematic Stage */}
      <div className="relative w-full h-full max-w-[177.78vh] max-h-[56.25vw] aspect-video shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={getBgPath()}
            src={getBgPath()}
            alt="courtroom scene"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        <StatHUD stats={stats} day={day} />

        <DialogueBox caseData={currentCase} onChoice={applyImpact} />
      </div>
    </div>
  );
}
