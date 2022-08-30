import React ,{useState} from 'react'
import {MenuItems} from "./MenuItems";
export default function Navbar(){
  const [clicked, setClicked] = React.useState(false);
  function toggleButton() {
    setClicked(!clicked)
  }
    return (
      <nav className="nav--bar">
        <h1 className='logo--name'>SIMSIGN</h1>
        <ul className={clicked?'links active':'links'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.type} className={item.className}>
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
        <button className='navbar--toogle' onClick={toggleButton}>
          <i className={clicked?"fa-solid fa-xmark":"fa-solid fa-bars"}></i>
        </button>
      </nav>
    );
}