import type { ProjectVisual as VisualName } from "../types"

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="size-2 rounded-full bg-white/25" />
        <span className="size-2 rounded-full bg-white/25" />
        <span className="size-2 rounded-full bg-white/25" />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{label}</p>
    </div>
  )
}

function HealthcareArt() {
  return (
    <div className="flex h-full flex-col p-4 sm:p-5">
      <WindowChrome label="Operations" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Wait time", "Call routing", "Ingest errors −25%"].map((label) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-wider text-white/70">{label}</p>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 320 90" className="mt-4 h-24 w-full" aria-hidden="true">
        <path d="M0 70 H320" stroke="rgba(255,255,255,0.12)" />
        <path
          d="M8 62 C 40 60, 50 30, 80 34 S 120 66, 150 40 S 210 18, 240 28 S 290 48, 312 22"
          fill="none"
          stroke="#b3a4ff"
          strokeWidth="2.4"
        />
        <path
          d="M8 62 C 40 60, 50 30, 80 34 S 120 66, 150 40 S 210 18, 240 28 S 290 48, 312 22 V 78 H 8 Z"
          fill="rgba(179,164,255,0.16)"
        />
      </svg>
      <div className="mt-auto flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
        <span>Ingest</span>
        <span className="text-[#8ef0e4]">→</span>
        <span>Normalize</span>
        <span className="text-[#8ef0e4]">→</span>
        <span>Report</span>
      </div>
    </div>
  )
}

function RagArt() {
  return (
    <div className="flex h-full flex-col p-4 sm:p-5">
      <WindowChrome label="G-Scheme" />
      <div className="mt-4 grid flex-1 grid-cols-[1.1fr_0.9fr] gap-3">
        <div className="flex flex-col justify-end gap-2">
          <div className="ml-6 rounded-2xl rounded-bl-md bg-white/10 px-3 py-2 text-xs text-white/75">
            Which records match this scheme?
          </div>
          <div className="mr-4 rounded-2xl rounded-br-md border border-[#b3a4ff]/40 bg-[#b3a4ff]/15 px-3 py-2 text-xs text-white/85">
            Retrieved 4 passages, then answered from those.
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#8ef0e4]">Knowledge</p>
          <div className="mt-3 space-y-2">
            {["Policy", "Tables", "Notes"].map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full"
                  style={{ background: index === 1 ? "#8ef0e4" : "rgba(255,255,255,0.35)" }}
                />
                <span className="h-1.5 flex-1 rounded-full bg-white/15" />
                <span className="font-mono text-[10px] text-white/50">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CommerceArt() {
  return (
    <div className="flex h-full flex-col p-4 sm:p-5">
      <WindowChrome label="Revenue" />
      <div className="mt-5 flex h-32 items-end gap-1.5">
        {[42, 48, 46, 55, 52, 58, 90, 61, 57, 63, 60, 66].map((height, index) => (
          <div
            key={index}
            className="min-w-0 flex-1 rounded-t-md"
            style={{
              height: `${height}%`,
              background: index === 6 ? "#8ef0e4" : "rgba(179,164,255,0.8)",
            }}
          />
        ))}
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
        Anomaly marked on the revenue series
      </p>
    </div>
  )
}

function VoiceArt() {
  const bars = [8, 16, 28, 18, 36, 22, 40, 24, 32, 14, 26, 12, 20, 34, 16]
  return (
    <div className="flex h-full flex-col p-4 sm:p-5">
      <WindowChrome label="Voice flow" />
      <div className="mt-6 flex h-16 items-center justify-center gap-1" aria-hidden="true">
        {bars.map((height, index) => (
          <span
            key={index}
            className="w-1.5 rounded-full bg-[#b3a4ff]"
            style={{ height, opacity: 0.45 + (index % 4) * 0.12 }}
          />
        ))}
      </div>
      <ol className="mt-auto grid grid-cols-4 gap-2 text-center font-mono text-[10px] uppercase tracking-wider text-white/70">
        {["Greet", "Verify", "Lookup", "Handoff"].map((step) => (
          <li key={step} className="rounded-xl border border-white/10 bg-white/5 px-2 py-2">
            {step}
          </li>
        ))}
      </ol>
    </div>
  )
}

function SaasArt() {
  const tiles = ["Campus", "Learn", "Property", "Gym", "School"]
  return (
    <div className="flex h-full flex-col p-4 sm:p-5">
      <WindowChrome label="Concepts" />
      <div className="mt-4 grid flex-1 grid-cols-2 gap-2">
        {tiles.map((tile, index) => (
          <div
            key={tile}
            className={`flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-3 ${
              index === tiles.length - 1 ? "col-span-2" : ""
            }`}
          >
            <span className="font-mono text-[10px] text-[#8ef0e4]">0{index + 1}</span>
            <span className="font-display text-sm text-white">{tile}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const art = {
  healthcare: HealthcareArt,
  rag: RagArt,
  commerce: CommerceArt,
  voice: VoiceArt,
  saas: SaasArt,
}

export function ProjectVisual({ variant, label }: { variant: VisualName; label: string }) {
  const Art = art[variant]
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#10131c] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative h-full" aria-hidden="true">
        <Art />
      </div>
      <span className="sr-only">{label}</span>
    </div>
  )
}
