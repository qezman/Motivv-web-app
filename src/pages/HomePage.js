import React from "react";

import LandingPage from "../components/LandingPage";
import Vetted from "../components/Vetted";
import New from "../components/New";
import Users from "../components/Users";
import More from "../components/More";
import Footer from "../components/Footer";
import Helmet from "../components/Helmet";
import Challenge from "../components/Challenge";
import JobPost from "../components/JobPost";
import CheckSchool from '../components/CheckSchool';

export default function HomePage(props) {
  return (
    <>
      <Helmet
        page="home"
        title="We connect prospective clients to vetted designers"
        description="Connect with the best designers in the industry – Engage with clients and Get hired by creating a profile with us"
      />
      <LandingPage />
      <Vetted props={props} />
      <New />
      <Users />
      <Challenge />
      <JobPost />
      <CheckSchool />
      <More />
      <Footer />
    </>
  );
}
