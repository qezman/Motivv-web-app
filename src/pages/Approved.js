import React from "react";
import Fade from "react-reveal/Fade";
import Dashboard from "../components/Dashboard/Dashboard";
import useFetch from "../hooks/useFetch";
import ApprovedCard from "../components/ApprovedCard/";
const Pending = (props) => {
  const { response, loading } = useFetch("fetchDesigners.php");
  return (
    <Dashboard {...props}>
      <Fade className="bts-history">
        <div>
          {loading ? (
            "loading..."
          ) : response.data.applicants &&
            response.data.applicants.filter(
              (item) => item.status === "approved"
            ).length > 0 ? (
            response.data.applicants
              .filter((item) => item.status === "approved")
              .map((item, i) => (
                <ApprovedCard
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
                  date={item.date}
                />
              ))
          ) : (
            <p className="text-center"> No pending application</p>
          )}
        </div>
      </Fade>
    </Dashboard>
  );
};

export default Pending;
