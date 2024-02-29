import React, { useEffect, useRef, useState } from "react";
import "./Pending.css";
import { Icons } from "./PendingData";
import { Modal, Button } from "react-bootstrap";
import { FaBars, FaBell, FaSearch } from "react-icons/fa";
import { information } from "./PendingData";
import SearchCont from "../SearchCont";

const Pending = () => {
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
      {/* mobile header */}
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

        <article className={"right-section"}>
          <SearchCont />

          <h1 className="pending-text">Pending Talents</h1>

          <div className="grid-card">
            {information.map((item) => {
              return (
                <div className="info-cont" key={item.id}>
                  <img className="info-image" src={item.Image} />
                  <h5 className="info-name">{item.name}</h5>
                  <p className="info-role">{item.role}</p>
                  <div className="info-tools">
                    {item.tools.map((tool) => (
                      <p className="tool" key={item.id}>
                        {tool}
                      </p>
                    ))}
                  </div>
                  <p className="info-para">{item.paragraph}</p>
                  <p className="info-rate">NGN: {item.rate}</p>
                  <p className="view-btn">View Portfolio</p>
                  <div className="approve-reject">
                    <button className="apv-btn">Approve</button>
                    <button className="rjt-btn">Reject</button>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </article>
    </section>
  );
};
export default Pending;
