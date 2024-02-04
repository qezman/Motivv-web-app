import React, { useState } from "react";
import "./Pending.css";
import { Icons } from "./PendingData";
import { Modal, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { information } from "./PendingData";

const Pending = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [leftSectionActive, setLeftSectionActive] = useState(true);

  const handleRightSectionClick = () => {
    setLeftSectionActive(false);
  };

  const handleLeftSectionClick = () => {
    setLeftSectionActive(true);
  };

  // Filter items based on the search query
  // const filteredItems = items.filter((items) =>
  //   items.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const SlidesSelection = () => {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  // };

  return (
    <section className="container-component">
      {/* toggle bar */}
      <article className="left-section">
        <div className="bar-icon">
          <img className="motivv-logo" src={"/assets/motivv-logo.png"} />

          {/* <button className="bar">
            <FaBars />
          </button> */}
        </div>

        {Icons.map((item) => {
          return (
            <div key={item.id}>
              <div className="icon-text">
                {/* <img className="icons" src={item.icon} /> */}
                <p>{item.icon}</p>
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </article>
      

      <article className="right-section">
        <section className="search-icons">
          <div className="search-cont">
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6 18.5L10.3 12.2C9.8 12.6 9.225 12.9167 8.575 13.15C7.925 13.3833 7.23333 13.5 6.5 13.5C4.68333 13.5 3.146 12.8707 1.888 11.612C0.63 10.3533 0.000666667 8.816 0 7C0 5.18333 0.629333 3.646 1.888 2.388C3.14667 1.13 4.684 0.500667 6.5 0.5C8.31667 0.5 9.85433 1.12933 11.113 2.388C12.3717 3.64667 13.0007 5.184 13 7C13 7.73333 12.8833 8.425 12.65 9.075C12.4167 9.725 12.1 10.3 11.7 10.8L18 17.1L16.6 18.5ZM6.5 11.5C7.75 11.5 8.81267 11.0627 9.688 10.188C10.5633 9.31333 11.0007 8.25067 11 7C11 5.75 10.5627 4.68767 9.688 3.813C8.81333 2.93833 7.75067 2.50067 6.5 2.5C5.25 2.5 4.18767 2.93767 3.313 3.813C2.43833 4.68833 2.00067 5.75067 2 7C2 8.25 2.43767 9.31267 3.313 10.188C4.18833 11.0633 5.25067 11.5007 6.5 11.5Z"
                fill="#C4C4C4"
              />
            </svg>
          </div>

          <div className="right-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <g clip-path="url(#clip0_610_1426)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0001 19.5C15.0003 20.0046 14.8097 20.4906 14.4666 20.8605C14.1235 21.2305 13.6532 21.4572 13.1501 21.495L13.0001 21.5H11.0001C10.4955 21.5002 10.0095 21.3096 9.63954 20.9665C9.26956 20.6234 9.04294 20.1532 9.00509 19.65L9.00009 19.5H15.0001ZM12.0001 2.5C13.8151 2.49997 15.5591 3.20489 16.8643 4.46607C18.1695 5.72726 18.9339 7.44609 18.9961 9.26L19.0001 9.5V13.264L20.8221 16.908C20.9016 17.067 20.9414 17.2429 20.9381 17.4206C20.9347 17.5984 20.8884 17.7727 20.8029 17.9286C20.7175 18.0845 20.5956 18.2174 20.4476 18.3158C20.2996 18.4143 20.1299 18.4754 19.9531 18.494L19.8381 18.5H4.16209C3.98426 18.5001 3.80906 18.457 3.65151 18.3745C3.49397 18.292 3.35877 18.1725 3.25751 18.0264C3.15625 17.8802 3.09194 17.7116 3.0701 17.5351C3.04825 17.3586 3.06953 17.1795 3.13209 17.013L3.17809 16.908L5.00009 13.264V9.5C5.00009 7.64348 5.73759 5.86301 7.05035 4.55025C8.3631 3.2375 10.1436 2.5 12.0001 2.5ZM12.0001 4.5C10.7116 4.50007 9.47293 4.99754 8.54232 5.88866C7.6117 6.77978 7.06101 7.99575 7.00509 9.283L7.00009 9.5V13.264C7.0001 13.512 6.95399 13.7579 6.86409 13.989L6.78909 14.159L5.61909 16.5H18.3821L17.2121 14.158C17.1011 13.9363 17.0323 13.6959 17.0091 13.449L17.0001 13.264V9.5C17.0001 8.17392 16.4733 6.90215 15.5356 5.96447C14.5979 5.02678 13.3262 4.5 12.0001 4.5Z"
                  fill="#BBBBBB"
                />
              </g>
              <defs>
                <clipPath id="clip0_610_1426">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5 5.5H11C11.55 5.5 12 5.05 12 4.5C12 3.95 11.55 3.5 11 3.5H5C3.9 3.5 3 4.4 3 5.5V19.5C3 20.6 3.9 21.5 5 21.5H11C11.55 21.5 12 21.05 12 20.5C12 19.95 11.55 19.5 11 19.5H5V5.5Z"
                fill="#BBBBBB"
              />
              <path
                d="M20.65 12.15L17.86 9.36004C17.7905 9.28859 17.7012 9.23952 17.6036 9.21911C17.506 9.19869 17.4045 9.20787 17.3121 9.24545C17.2198 9.28304 17.1408 9.34733 17.0851 9.43009C17.0295 9.51286 16.9999 9.61033 17 9.71004V11.5H10C9.45 11.5 9 11.95 9 12.5C9 13.05 9.45 13.5 10 13.5H17V15.29C17 15.74 17.54 15.96 17.85 15.64L20.64 12.85C20.84 12.66 20.84 12.34 20.65 12.15Z"
                fill="#BBBBBB"
              />
            </svg>

            <button className="bar">
              <FaBars />
            </button>
          </div>
        </section>

        <h1 className="pending-text">Pending Talents</h1>

        <div>
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
                  <button>Approve</button>
                  <button>Reject</button>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
export default Pending;
