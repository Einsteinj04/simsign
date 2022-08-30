import React, { useEffect} from 'react'
import { ScrollCards} from './ScrollCards'
import './Collections.css'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Collections() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
    return (
      <div className="collections" id='Collections'>
        <p className="bullet--points">Collections</p>
        <div className="collections--wrapper">
          
                {
                    ScrollCards.map((collection, index) => {
                      return (
                        <div
                          data-aos="slide-right"
                          key={index}
                          style={{
                            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, .3) ), url(${collection.bImage})`,
                          }}
                          className="collection details"
                        />
                      );
                    })
                }
        </div>
      </div>
    );
}