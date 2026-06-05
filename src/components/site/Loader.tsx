import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="font-display text-3xl text-foreground animate-fade-in">Nassim Bentayeb</div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-gold mt-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Centre Esthétique
        </div>
        <div className="mt-8 mx-auto h-px w-32 overflow-hidden bg-border">
          <div className="h-full bg-gradient-gold animate-[shimmer_1.4s_ease-out_forwards]" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}
