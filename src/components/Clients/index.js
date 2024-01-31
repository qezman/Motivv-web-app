import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Card } from "react-bootstrap";
import Dashboard from "../../components/Dashboard/Dashboard";
import axios from "axios";
import "./styles.css";
import { URL } from "../../constants";

const url = `${URL}/fetchClient.php/`;
const Clients = (props) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchClients = async () => {
      await axios.get(url).then((res) => {
        setClients(res.data.clients);
        setLoading(false);
      });
    };
    fetchClients();
  }, []);
  return (
    <Dashboard {...props}>
      <Fade className="bts-history">
        <div className="col-md-12 col-sm-12">
          <div className="scroll">
            <div className="bts-history-wrapper px-3 justify-content-between d-flex pb-3">
              <span className="b7">Email</span>
              <span className="b7">Hire From</span>
            </div>
            <Card>
              {loading ? (
                <p className="text-center d-block">loading...</p>
              ) : (
                <Card.Body>
                  {clients &&
                    clients.map((client, i) => (
                      <div
                        key={i}
                        className="bts-history-list justify-content-between d-flex"
                      >
                        <span>{client.email}</span>
                        <span>{client.package}</span>
                      </div>
                    ))}
                </Card.Body>
              )}
            </Card>
          </div>
        </div>
      </Fade>
    </Dashboard>
  );
};

export default Clients;
