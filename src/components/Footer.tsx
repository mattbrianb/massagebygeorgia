export default function Footer() {
  return (
    <footer className="px-6 py-12 flex flex-col md:flex-row justify-between items-end border-t border-olive-700/20 bg-sand-50 text-ink-900 container mx-auto">
      <div className="flex flex-wrap gap-12 mb-8 md:mb-0">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Location</span>
          <span className="text-xs font-semibold">Boutique Studio, London</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Credentials</span>
          <span className="text-xs font-semibold">Certified Massage Therapist</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Vibe</span>
          <span className="text-xs font-semibold italic font-serif">Calm, Professional, Private</span>
        </div>
      </div>
      <div className="text-left md:text-right">
        <div className="flex gap-1 mb-2 md:justify-end text-olive-700">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="text-[10px] uppercase tracking-widest opacity-50 break-words max-w-full">
          4.9/5 from Verified Clients <br/>
          &copy; {new Date().getFullYear()} Massage by Georgia
        </p>
      </div>
    </footer>
  );
}
