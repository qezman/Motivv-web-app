import React from "react";
import Fade from "react-reveal/Fade";
import { Row } from "react-bootstrap";
import Dashboard from "../Dashboard/Dashboard";
import "./styles.css";
import useFetch from "../../hooks/useFetch";
import JobsCard from "../JobsCard/index";
import Loader from "../../assets/loader.mp4";

const Pending = (props) => {
  const { response, loading } = useFetch("fetchAdminJobs.php");
  const jobsList = response ? response.data.jobs : [];
  return (
    <Dashboard {...props}>
      <Fade className="bts-history">
        <Row>
          {loading ? (
            <div className="d-flex w-100 align-items-center justify-content-center">
              <video
                src={Loader}
                autoPlay
                muted
                loop
                height="200px"
                width="200px"
              />
            </div>
          ) : jobsList.length > 0 ? (
            jobsList.map((job, i) => {
              const {
                date,
                name,
                logo,
                type,
                title,
                location,
                instructions,
                email,
                approved,
                websiteUrl,
              } = job;
              return (
                <JobsCard
                  key={i}
                  dateposted={date}
                  companyName={name}
                  jobLogo={logo}
                  jobLocation={location}
                  jobType={type}
                  jobName={title}
                  jobApplyLink={instructions}
                  email={email}
                  websiteUrl={websiteUrl}
                  admin
                  approved={approved === "true" ? false : true}
                />
              );
            })
          ) : (
            <p className="d-block mx-auto">No Job Post Available</p>
          )}
        </Row>
      </Fade>
    </Dashboard>
  );
};

export default Pending;
