import React from "react";
import LandingPageNew from "../components/LandingpageNew";
import Helmet from "../components/Helmet/index";
// import VettedNew from "../components/VettedNew";
import Vetted from "../components/Vetted";
import New from "../components/New";
import UsersNew from "../components/UsersNew";
import Challenge from "../components/Challenge";
import JobPost from "../components/JobPost";
import CheckSchool from "../components/CheckSchool";
import MoreNew from "../components/MoreNew";
import Footer from "../components/Footer"

const NewHomePage = (props) => {
  return (
    <section>
      <Helmet
        page="home"
        title="We connect prospective clients to vetted designers"
        description="Connect with the best designers in the industry – Engage with clients and Get hired by creating a profile with us"
      />
      <LandingPageNew />
      <Vetted props={props} />
      <New />
      <UsersNew />
      <Challenge />
      <JobPost />
      <CheckSchool />
      <MoreNew />
      <Footer/>
    </section>
  );
};
export default NewHomePage;
