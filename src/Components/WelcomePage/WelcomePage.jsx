import React from "react";
export default function WelcomePage() {
  return (
    <main className="welcome--page" id='Home'>
      <section className="intro--display">
        <h2 className="intro--text">
          LAURÈNESOUTHE <span>X</span> SIMSIGN - DIGITAL CANVAS
        </h2>
        <p className="short--intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit natus
          possimus quia ex, est omnis delectus dignissimos fugit.
        </p>
        <a><button className="learn--more animate__animated animate__bounce infinite">
          Check More
        </button></a>
      </section>
    </main>
  );
}
