import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
  scrolled?: boolean;
}

export default function Logo({
  width = 50,
  height = 55,
  scrolled = false,
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={scrolled ? "/images/logo-dark.png" : "/images/logo.png"}
        alt="Bellmare Travels"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}
