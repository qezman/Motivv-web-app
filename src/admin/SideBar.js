import React, { useEffect, useRef, useState } from "react";
import { Icons } from "./Pending/PendingData";
import { Modal, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const SideBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(null);
  const listRef = useRef();

  const handleItemFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleScroll = () => {
    const scrollOffset = listRef.current.scrollTop;
    const itemHeight = 50;
    const newIndex = Math.floor(scrollOffset / itemHeight);
    setFocusedIndex(newIndex);
  };

  useEffect(() => {
    const listElement = listRef.current;
    listElement.addEventListener("scroll", handleScroll);

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
                  color: index === focusedIndex ? "#0074cc" : "#ffffff",
                }}
              >
                <div className="icon-text">
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
export default SideBar;
