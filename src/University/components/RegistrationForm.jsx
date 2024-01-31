import React, { useState } from "react";
import "../styles/registrationForm.css";
import { designNicheList } from "../data";
// import arrow from "../assets/keyboard_arrow_down.png";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    designNiche: "",
    userName: "",
    email: "",
    schoolType: "",
  });

  const getEmail = e => {
    let email = e.target.value;
    setFormData({ ...formData, email });
  };

  const getName = e => {
    let userName = e.target.value;
    setFormData({ ...formData, userName });
  };

  const getSchool = e => {
    let schoolType = e.target.value;
    setFormData({ ...formData, schoolType });
  };

  const handleValueChange = e => {
    let designNiche = e.target.value;
    setFormData({ ...formData, designNiche });
  };

  const handleProceed = () => {
    console.log(formData);
  };
  return (
    <div className="registration__form">
      <div className="registration__form__container">
        <h3>Please input your information to proceed to checkout</h3>

        <div className="registration__form__section">
          <div className="registration__form__section__sub">
            <div className="form-groupp">
              <div className="label-wrapper">
                <label htmlFor="username" className="account-label">
                  Name
                </label>
              </div>
              <input
                type="text"
                name="userName"
                className="account"
                placeholder="Name"
                onKeyUp={e => getName(e)}
                // onKeyDown={e => validate(e)}
                required
              />
            </div>
            <div className="form-groupp">
              <div className="label-wrapper">
                <label htmlFor="email" className="account-label">
                  Email
                </label>
              </div>
              <input
                type="email"
                name="email"
                className="account"
                placeholder="Email"
                onKeyUp={e => getEmail(e)}
                // onKeyDown={e => validate(e)}
                required
              />
            </div>
          </div>
          <div className="form-groupp">
            <div className="label-wrapper">
              <label htmlFor="schoolType" className="account-label">
                School Type
              </label>
            </div>
            <input
              type="text"
              name="schoolType"
              className="account_"
              placeholder="School Type"
              onKeyUp={e => getSchool(e)}
              // onKeyDown={e => validate(e)}
              required
            />
          </div>

          <div className="form-groupp">
            <div className="label-wrapper">
              <label htmlFor="designNiche" className="account-label">
                Design Niche
              </label>
            </div>
            <div className="form-group">
              <select
                name="receipt"
                className="account_"
                // value={formData.designNiche}
                onChange={handleValueChange}
                // list={cardReceiptList}
                required
              >
                <option hidden value="text">
                  Select Option
                </option>
                {designNicheList.map(item => {
                  const { text, id } = item;
                  return (
                    <option key={id} value={text}>
                      {text}
                    </option>
                  );
                })}
              </select>

              {/* <img src={arrow} alt="" /> */}
            </div>
          </div>
          <button onClick={() => handleProceed()}> Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
