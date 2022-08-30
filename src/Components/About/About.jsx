import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './About.css';
import { Cards } from './Cards';
import "animate.css";
export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);
    return (
      <section className="aboutUs" id='About'>
        <h2 className="animate__animated animate__bounce bullet--points">
          About Us
        </h2>
        <section className="about--card">
          <div className="about--image" data-aos="fade-up"></div>
          <article>
            <p className="about--p" data-aos="zoom-in">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              consequatur sunt itaque odit placeat, accusantium fugit iste vitae
              reprehenderit, consequuntur voluptate sapiente facere id?
              Asperiores amet officiis nemo esse ipsa, voluptates possimus
              labore, ut iure necessitatibus, aut ipsum? Beatae laboriosam
              nesciunt nostrum dignissimos sit animi maxime corporis iure atque
              accusantium!
            </p>
            <h3 className="services--text">
              Tested & Trusted
            </h3>
            <section className="services--cards">
              {Cards.map((items, index) => {
                return (
                  <div
                    className={items.className
                    }
                    data-aos="flip-left"
                  >
                    <div className="icons">
                      <i className={items.icon}></i>
                    </div>
                    <p className="service">{items.title}</p>
                    <p className="short--text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero nemo.
                    </p>
                  </div>
                );
              })}
            </section>
          </article>
        </section>
      </section>
    );
}