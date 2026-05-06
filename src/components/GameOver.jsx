export default function GameOver({ daysSurvived }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white p-4">
      <div className="text-center border-4 border-white p-12 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)]">
        <h1 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Game Over</h1>
        <p className="text-sm mb-10 leading-loose">
          Your reign lasted<br/>
          <span className="text-3xl text-yellow-400">{daysSurvived}</span><br/>
          days before collapse.
        </p>
        <button
          className="px-8 py-4 bg-white text-black font-bold uppercase text-[12px] hover:bg-yellow-400 transition-colors shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
