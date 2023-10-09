import React from "react";
import Header from "../../features/home/components/header/Header";
import Menu from "../../features/home/components/menu/Menu";
import Tag from "../../features/home/components/filters/tag/Tag";
import Editor from "../../features/home/components/filters/editor/Editor";
import Reporter from "../../features/home/components/filters/reporter/Reporter";
import MagazineCollection from "../../features/home/components/magazine-collection/MagazineCollection";
import Footer from "../../features/home/components/footer/Footer";
import './Home.css'

export default function Home() {
  return (
    <div id="home">
      <Header />
      <Menu />
      <Tag />
      <Editor />
      <Reporter />
      <MagazineCollection />
      <Footer />
    </div>
  );
}
