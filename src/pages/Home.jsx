import React from "react";
import Hero from "../components/Hero";
import "./Home.css";
import ProjectScopePage from "./ProjectScopePage";
import MethodologyPage from "./MethodologyPage";
import TeamPage from "./TeamPage";
import SystemArchitecture from "../components/SystemArchitecture";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <ProjectScopePage />
      <SystemArchitecture />
      <MethodologyPage />
      <TeamPage />
    </div>
  );
}

export default Home;
