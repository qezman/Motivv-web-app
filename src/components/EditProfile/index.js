import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import Footer from '../Footer/index';
import axios from 'axios';
import { EDIT_PROFILE_URL } from '../../constants';

export default function EditProfile() {
  const history = useHistory();

  // State to manage input values
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent the page from reloading.
    try {
      // Make an API request to save data to the database
      const response = await axios.post(EDIT_PROFILE_URL, {
        email,
        phoneNumber,
      });

      // Check if the save was successful
      if (response.status === 200) {
        // Redirect to "/otppage" after successful save
        // history.push('/otppage');
        history.push('/verification');
      } else {
        console.error('Failed to save data to the database');
        // Handle error scenario
      }
    } catch (error) {
      console.error('API request error:', error);
      // Handle error scenario
    }
  };

  return (
    <form onClick={handleSubmit}>
      <Link to="/">
        <div className="header">
          <img className="header-logo" src="/assets/motivv-logo.png" alt="" />
        </div>
      </Link>

      <div>
        <div className="edit-text-cont">
          <p className="edit-header">Edit your Profile</p>
        </div>

        <div style={{ marginTop: '21px' }} className="edit-input-cont">
          <input
            type="text"
            required
            placeholder="Email Address"
            className="edit-text-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="email-text">Enter the email you used to create your Profile card</p>
        </div>

        <div style={{ marginTop: '36px' }} className="edit-input-cont">
          <input
            type="text"
            required
            placeholder="Phone Number"
            className="edit-text-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <p className="email-text">Input the number you used to create your Profile card</p>
          <button className="edit-submit-btn">Submit</button>
        </div>
      </div>

      <div className="edit-footer">
        <Footer />
      </div>
    </form>
  );
}
