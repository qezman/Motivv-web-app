import React from "react";
import JobPostPageComp from "../components/JobPostPage";
import Helmet from "../components/Helmet";

const JobPostPage = () => {
  return (
    <div>
      <Helmet
        page="job-post"
        title="We connect prospective clients to vetted designers"
        description="Post jobs online, and get your job ads seen by millions of job seekers."
      />
      <JobPostPageComp />
    </div>
  );
};

export default JobPostPage;
