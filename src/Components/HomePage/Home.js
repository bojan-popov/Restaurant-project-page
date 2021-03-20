import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <main className="home-main">
        <h1 className="home-header">Home page</h1>
        <section className="home-section">
          <h2>Welcome to out restaurant page</h2>
          <article>Our restauran history :</article>
          <article>We are glad to show our menu :</article>
          <article>U can contack us :</article>
          <article>We are located :</article>
          <article>Special offers :</article>
        </section>
      </main>
    </>
  );
}

export default Home;
