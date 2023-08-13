import React from "react";
import { Hero, Introduction, Skills, CTA } from "../../section";

export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <Hero />
      {/* Présentation*/}
      <Introduction />
      {/* Compétences*/}
      <Skills />
      {/* Call to Action */}
      <CTA />
    </section>
  );
}
