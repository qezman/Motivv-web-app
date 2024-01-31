import React from "react";
import { ReactComponent as Suitcase } from "../../assets/suitcase.svg";
import { Col } from "react-bootstrap";
import "./styles.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { URL } from "../../constants";

const urlDelete = `${URL}deleteJob.php`;
const urlApprove = `${URL}approveJob.php`;
const JobsCard = ({
  dateposted,
  companyName,
  jobLogo,
  jobName,
  jobType,
  jobLocation,
  jobApplyLink,
  email,
  admin,
  approved,
  websiteUrl,
}) => {
  const history = useHistory();

  const handleApprove = async () => {
    let a = window.confirm("Are you sure");
    if (a) {
      await axios
        .post(urlApprove, {
          name: companyName,
          email,
          type: jobType,
          location: jobLocation,
          instructions: jobApplyLink,
          title: jobName,
        })
        .then((res) => {
          alert(res.data.msg);
          history.push("/all-jobs");
        });
    }
  };
  const handleDelete = async () => {
    await axios
      .post(urlDelete, { name: companyName, logo: jobLogo, email })
      .then((res) => {
        let a = window.confirm("Are you sure you want to delete");
        if (a) {
          alert(res.data.msg);
          history.push("/all-jobs");
        }
      });
  };
  return (
    <Col md={4} lg={3} className="d-flex flex-column mb-5">
      {/*<Card></Card>*/}
      <div className="mot-job-card d-flex flex-column">
        {admin && websiteUrl && (
          <span>
            <a target="_blank" rel="noopener noreferrer" href={websiteUrl}>
              URL
            </a>
          </span>
        )}
        <span className="align-self-end">{dateposted}</span>

        <div className="mot-company-details mt-3 mb-4">
          {!jobLogo ? (
            <div className="mot-default-logo mb-3">MV</div>
          ) : (
            <img
              src={`${URL}company/${jobLogo}`}
              alt={companyName}
              className="mot-job-company-logo mb-3"
            />
          )}
          <h2 className="mot-job-name">{jobName}</h2>
        </div>
        <div className="mt-2">
          <span className="smaller-texts bleaker-color">Needed at:</span>
          <p>{companyName}</p>
        </div>
        <div className="d-flex justify-content-between w-100">
          <p className="green-color smaller-texts d-flex justify-content-between align-items-center">
            <Suitcase className="mr-2" />
            {jobType}
          </p>
          <p className="bleak-color smaller-texts">{jobLocation}</p>
        </div>
      </div>
      {admin && approved && (
        <div className="block mt-2 p-0">
          <button className="m-0" onClick={handleApprove}>
            Approve
          </button>
        </div>
      )}
      {/* <div> */}

      {/* </div> */}
      <div className="d-flex justify-content-center">
        {admin ? (
          <button
            onClick={handleDelete}
            className="btn btn-light my-2 text-red"
          >
            Delete
          </button>
        ) : (
          <a href={`mailto:${email}`}>
            <button className="mot-job-apply-btn">Apply Now</button>
          </a>
        )}
      </div>
    </Col>
  );
};

export default JobsCard;
