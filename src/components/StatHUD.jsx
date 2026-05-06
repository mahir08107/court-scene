import { motion, AnimatePresence } from "framer-motion";

export default function StatHUD({ stats, day }) {
  const bar = (value, color) => (
    <div className="w-32 h-2 bg-gray-700 rounded overflow-hidden">
      <motion.div
        className={`h-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ type: "spring", stiffness: 100 }}
      />
    </div>
  );

  return (
    <>
      {/* Day counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-lg font-bold text-white drop-shadow-[0_2px_0_rgba(0,0,0,1)] uppercase">
        Day {day}
      </div>

      {/* Trust – top left */}
      <div className="absolute top-4 left-4 flex flex-col gap-1">
        <span className="text-[10px] text-white drop-shadow-[0_1px_0_rgba(0,0,0,1)] uppercase">Trust</span>
        {bar(stats.trust, "bg-blue-500 border border-white")}
      </div>

      {/* Economy – top right */}
      <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
        <span className="text-[10px] text-white drop-shadow-[0_1px_0_rgba(0,0,0,1)] uppercase">Economy</span>
        {bar(stats.economy, "bg-green-500 border border-white")}
      </div>

      {/* Chaos – bottom left (shifted for new dialogue box) */}
      <div className="absolute top-16 left-4 flex flex-col items-start gap-1">
        <span className="text-[10px] text-white drop-shadow-[0_1px_0_rgba(0,0,0,1)] uppercase">Chaos</span>
        {bar(stats.chaos, "bg-red-500 border border-white")}
      </div>
    </>
  );
}
