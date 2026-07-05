"use client";

import Container from "@/components/common/Container";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils/cn";

export default function Header() {


  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 py-2 transition-all duration-300 backdrop-blur-xl bg-black/70 border-b border-white/10 shadow-lg"
      )}
    >
      <Container>
        <Navbar />
      </Container>
    </header>
  );
}
