export function KosovoFlag({ className = "h-12 w-12" }: { className?: string }) {
  return <span role="img" aria-label="Drapeau du Kosovo" className={`relative grid place-items-center overflow-hidden rounded-xl border border-white/20 bg-[#244aa5] ${className}`}><i className="h-1/2 w-1/2 rotate-45 rounded-sm bg-[#f2cf32]"/><span className="absolute left-1/2 top-[14%] flex -translate-x-1/2 gap-[2px]">{Array.from({ length: 6 }).map((_, index) => <i key={index} className="h-1 w-1 rounded-full bg-white"/>)}</span></span>;
}
