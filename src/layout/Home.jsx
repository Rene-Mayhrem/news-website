import React from "react";

import Header from "../components/Header";
import MagazineFilter from "../components/MagazineFilter";
import MagazineCollection from "../collection/MagazineCollection";
import EditorCollection from "../collection/EditorCollection";
import ReporterCollection from "../collection/ReporterCollection";
import TagCollection from "../collection/TagCollection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-container">
      <Header></Header>
      <MagazineFilter></MagazineFilter>
      <MagazineCollection></MagazineCollection>
      <EditorCollection></EditorCollection>
      <ReporterCollection></ReporterCollection>
      <TagCollection></TagCollection>
      <Footer></Footer>
    </div>
  );
}
