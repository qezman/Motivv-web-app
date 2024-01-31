import React from "react";

import Helmet from "../components/Helmet";
import Jobs from "../components/Jobs";

export default function JobsPage() {
  return (
    <>
      <Helmet
        page="jobs"
        title="Apply for well curated and gotten jobs for the designer of your calibre"
        description="Customize your card, Input your name and Job Headline, Upload your avatar, Include your portfolio link,  Add your preferred software, Gain approval, Create a striking profile and get vetted for your design cause, Motivv | Apply page"
      />

      <Jobs />
    </>
  );
}
