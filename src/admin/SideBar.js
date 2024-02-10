import React, { useEffect, useRef, useState } from "react";
import { Icons } from "./PendingData";
import { Modal, Button } from "react-bootstrap";
import { FaBars, FaBell, FaSearch } from "react-icons/fa";

const SideBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [focusedIndex, setFocusedIndex] = useState(null);
    const listRef = useRef();
  
    const handleItemFocus = (index) => {
      setFocusedIndex(index);
    };
  
    const handleScroll = () => {
      const scrollOffset = listRef.current.scrollTop;
      const itemHeight = 50; // Adjust this based on your item height
      const newIndex = Math.floor(scrollOffset / itemHeight);
      setFocusedIndex(newIndex);
    };
  
    useEffect(() => {
      // Attach scroll event listener to the list
      const listElement = listRef.current;
      listElement.addEventListener("scroll", handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        listElement.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <section>
      <section className="mobile-header">
        <img className="mot-logo" src={"/assets/motivv-logo.png"} />
        <FaBars style={{ width: 24, height: 24 }} />
      </section>
      <article className="container-component">
        <article className="left-section">
          <div className="bar-icon">
            <img className="motivv-logo" src={"/assets/motivv-logo.png"} />

            {/* <button className="bar">
            <FaBars />
          </button> */}
          </div>

          {Icons.map((item, index) => {
            return (
              <div
                ref={listRef}
                key={index}
                className={`icon-with-texts ${
                  index === focusedIndex ? "focused" : ""
                }`}
                onMouseEnter={() => handleItemFocus(index)}
                style={{
                  backgroundColor:
                    index === focusedIndex ? "#ffffff" : "transparent",
                  color: index === focusedIndex ? "#0074cc" : "#ffffff", // Adjust the colors
                }}
              >
                <div className="icon-text">
                  {/* <img className="icons" src={item.icon} /> */}
                  <p className="icons">{item.icon}</p>
                  <p className="icon-names">{item.name}</p>
                </div>
              </div>
            );
          })}
        </article>
      </article>
    </section>
  );
};
export default SideBar