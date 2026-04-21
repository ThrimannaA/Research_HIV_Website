import React from "react";
import Hero from "../components/Hero";
import "./Home.css";
import ProjectScopePage from "./ProjectScopePage";
import PresentationsPage from "./PresentationsPage";
import TeamPage from "./TeamPage";
import SystemArchitecture from "../components/MilestonesPage";
import DocumentsPage from "./DocumentsPage";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <ProjectScopePage />
      <SystemArchitecture />
      <DocumentsPage />
      <PresentationsPage />
      <TeamPage />
    </div>
  );
}

export default Home;

