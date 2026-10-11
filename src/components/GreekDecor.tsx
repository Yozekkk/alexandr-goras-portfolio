export function HeroArchitecture() {
  return (
    <svg className="hero-architecture" viewBox="0 0 620 600" fill="none" aria-hidden="true">
      <path className="draw-line draw-line-a" d="M92 504V240c0-117 95-212 212-212h12c117 0 212 95 212 212v264" />
      <path className="draw-line draw-line-b" d="M132 504V246c0-94 76-170 170-170h16c94 0 170 76 170 170v258" />
      <path d="M63 504h494M112 538h396" />
      <path d="M81 504h54M485 504h54M99 471h22V249H99M499 471h-22V249h22" />
      <path d="M88 234h44m-36-18h28m365 18h44m-36-18h28" />
      <path className="hero-sun" d="M310 124v-24m0 82v-24m-41-17h24m34 0h24m-70-29 17 17m24 24 17 17m0-58-17 17m-24 24-17 17" />
      <circle className="hero-sun" cx="310" cy="141" r="13" />
    </svg>
  )
}

export function OliveBranch({ side }: { side: 'left' | 'right' }) {
  return (
    <svg className={`olive-branch olive-branch-${side}`} viewBox="0 0 128 300" fill="none" aria-hidden="true">
      <path className="draw-line draw-line-c" d="M104 286C61 226 45 153 60 74 64 53 73 33 88 14" />
      <g className="olive-leaves">
        <path d="M59 230c-24-3-39-15-46-35 21-1 37 10 46 35Z" />
        <path d="M64 203c22-8 35-23 38-44-21 4-35 19-38 44Z" />
        <path d="M53 166c-23-5-37-18-41-39 20 1 35 14 41 39Z" />
        <path d="M57 139c21-10 32-26 33-47-20 6-32 22-33 47Z" />
        <path d="M59 104c-19-8-30-22-31-41 18 5 29 19 31 41Z" />
        <path d="M68 75c18-10 27-25 26-43-17 7-26 21-26 43Z" />
      </g>
    </svg>
  )
}

export function EventArchitecture() {
  return (
    <svg className="event-architecture" viewBox="0 0 480 610" fill="none" aria-hidden="true">
      <path d="M46 566h388M74 534h332" />
      <path className="draw-line draw-line-a" d="M95 534V170m290 364V170" />
      <path d="M74 170h42m248 0h42M66 149h58m232 0h58M81 128h28m262 0h28" />
      <path d="M95 210c-18 0-31-13-31-29m321 29c18 0 31-13 31-29" />
      <path className="event-arch" d="M122 534V296c0-64 52-116 116-116h4c64 0 116 52 116 116v238" />
      <path d="M151 534V300c0-48 39-87 87-87h4c48 0 87 39 87 87v234" />
      <path className="meander-corner" d="M25 75h56v28H53v28h56V47H25v84" />
      <path className="meander-corner" d="M455 75h-56v28h28v28h-56V47h84v84" />
    </svg>
  )
}

export function BookLaurel() {
  return (
    <svg className="book-laurel" viewBox="0 0 620 250" fill="none" aria-hidden="true">
      <path className="draw-line draw-line-b" d="M44 212c106-4 190-60 266-164 76 104 160 160 266 164" />
      <path d="M141 185c-32-3-53-17-65-42 29-1 51 13 65 42Zm49-31c-29-8-47-25-53-51 28 4 46 21 53 51Zm49-42c-24-13-37-32-38-56 24 9 37 28 38 56Zm240 73c32-3 53-17 65-42-29-1-51 13-65 42Zm-49-31c29-8 47-25 53-51-28 4-46 21-53 51Zm-49-42c24-13 37-32 38-56-24 9-37 28-38 56Z" />
      <path d="M252 174c18-10 37-15 58-15s40 5 58 15v47c-18-10-37-15-58-15s-40 5-58 15v-47Z" />
      <path d="M310 159v47" />
    </svg>
  )
}

export function MeanderDivider() {
  return (
    <svg className="meander-divider" viewBox="0 0 720 32" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d="M0 16h50V5h25v22h25V5h25v22h25V16h420V5h25v22h25V5h25v22h25V16h50" />
    </svg>
  )
}
