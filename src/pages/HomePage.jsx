import React from "react";
import FirstSection from "../components/FirstSection";
import Navbar from "../components/navbar";

export default function HomePage() {
  return (
    <div style={{ overflowY: "scroll", overflowx: "hidden" }}>
      <Navbar />
      <FirstSection />
    </div>
  );
}
