import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Dashboard from "../Dashboard/Dashboard";
import HomeCard from "../HomeCard";
import "./styles.css";
import work from "../../assets/work.png";
import clock from "../../assets/clock.png";
import profile from "../../assets/profile.png";
import checkbox from "../../assets/checkbox.png";
import { PieChart } from "react-minimal-pie-chart";
import Fade from "react-reveal/Fade";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { URL } from "../../constants";

const url = `${URL}/fetchClient.php/`;
export default function DashboardHome(props) {
  const { response, loading } = useFetch("fetchDesigners.php");
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const fetchClients = async () => {
      await axios.get(url).then((res) => {
        setClients(res.data.clients);
      });
    };
    fetchClients();
  }, [response]);
  return (
    <Dashboard {...props}>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Fade>
          <Row>
            <Col md={8}>
              <Row>
                <Col md={5}>
                  <HomeCard
                    title="Approved"
                    color="#F89707"
                    img={checkbox}
                    number={
                      response.data.applicants &&
                      response.data.applicants.filter(
                        (item) => item.status === "approved"
                      ).length
                    }
                  />
                </Col>
                <Col md={5}>
                  <HomeCard
                    title="Total Applicants"
                    color="#83B900"
                    img={work}
                    number={
                      response.data.applicants
                        ? response.data.applicants.length
                        : 0
                    }
                  />
                </Col>
                <Col md={5}>
                  <HomeCard
                    title="Pending"
                    color="#FF0202"
                    img={clock}
                    number={
                      response.data.applicants &&
                      response.data.applicants.filter(
                        (item) => item.status !== "approved"
                      ).length
                    }
                  />
                </Col>
                <Col md={5}>
                  <HomeCard
                    title="Clients"
                    color="#134A7C"
                    img={profile}
                    number={clients ? clients.length : 0}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <PieChart
                data={[
                  { title: "Expected", value: 10, color: "#E38627" },
                  {
                    title: "Outcome",
                    value: response.data.applicants
                      ? parseInt(
                          response.data.applicants.filter(
                            (item) =>
                              new Date(item.date).getDate() ===
                              new Date().getDate() - 1
                          ).length
                        )
                      : 0,
                    color: "#BDBDBD",
                  },
                ]}
                animate={true}
                animationDuration={3000}
                labelStyle={{ fontSize: 5, color: "red" }}
                label={({ dataEntry }) =>
                  dataEntry.value + "\n" + dataEntry.title
                }
              />
            </Col>
          </Row>
        </Fade>
      )}
    </Dashboard>
  );
}
