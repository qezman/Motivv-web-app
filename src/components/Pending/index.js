import React from "react";
import Fade from "react-reveal/Fade";
import { Row } from "react-bootstrap";
import Dashboard from "../Dashboard/Dashboard";
import PendingCard from "../PendingCard";
import "./styles.css";
import useFetch from "../../hooks/useFetch";
const Pending = (props) => {
  const { response, loading } = useFetch("fetchDesigners.php");
  return (
    <Dashboard {...props}>
      <Fade className="bts-history">
        <Row>
          {loading ? (
            "loading..."
          ) : response.data.applicants &&
            response.data.applicants.filter(
              (item) => item.status !== "approved"
            ).length > 0 ? (
            response.data.applicants &&
            response.data.applicants
              .filter((item) => item.status !== "approved")
              .map((item, i) => (
                <PendingCard
                  key={i}
                  props={props}
                  name={item.name}
                  startPrice={item.startprice}
                  endPrice={item.endprice}
                  avatar={item.avatar}
                  skill1={item.skill1}
                  skill2={item.skill2}
                  skill3={item.skill3}
                  skill4={item.skill4}
                  link={item.link}
                  {...props}
                  email={item.email}
                  title={item.headline}
                />
              ))
          ) : (
            <p className="d-block text-center"> No pending application</p>
          )}
        </Row>
      </Fade>
    </Dashboard>
  );
};

export default Pending;
