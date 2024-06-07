import Image from "next/image"

interface LogoProps {
  width: number,
  height: number,
  label?: string
}

export default function Logo({ label, height, width }: LogoProps){
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/assets/icon.svg" alt="logo" width={width} height={height} />
      {label && <span className="text-2xl font-bold text-brand-500 mb-4">{label}</span>}
    </div>
  )
}