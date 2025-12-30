
export function InfoButtons() {
  return (
    <div className="flex flex-row gap-2 items-center justify-center py-1 px-1 border border-white/10 rounded-md" style={{
        background: "linear-gradient(94deg, rgba(255, 255, 255, 0.10) 74%, rgba(255, 255, 255, 0.02) 100%)"
    }}>
      <button className="bg-[#888888]/80 text-white text-sm  px-2  py-0.5 hover:bg-white/10 active:bg-white/20 rounded-md">
      Ages 7-10
      </button>
      <button className="bg-[#888888]/80 text-white text-sm   px-2  py-0.5 hover:bg-white/10 active:bg-white/20 rounded-md">
      Online 1:1
      </button>
      <button className="bg-[#888888]/80 text-white text-sm   px-2  py-0.5 hover:bg-white/10 active:bg-white/20 rounded-md">
      Self-paced
      </button>
    </div>
  );
}