import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BusinessTemplateHero } from "./BusinessTemplateHero";
import TemplateSidebar from "./TemplateSidebar/TemplateSidebar";
import "./template-general.css";
import Logo from "../../assets/motivv-logo.png";
import { TemplateContainer } from "./TemplatesContainer/TemplateContainer";

import axios from "axios";
const BusinessTemplateComponent = () => {
  const [templates, setTemplates] = useState([]);
  const [templatesCopy, setTemplatesCopy] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTemplates = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://www.motivv.co/api/fetchTemplates.php"
        );
        await setTemplates(response.data.templates);
        await setTemplatesCopy(response.data.templates);
        setLoading(false);
      } catch (e) {
        console.log("An error occurredF");
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  return (
    <div className="mot-business-template">
      <div className="w-100 d-flex flex-wrap justify-content-between align-items-baseline mot-business-template-navbar">
        <div className="mb-2">
          <Link to="/">
            <img src={Logo} alt="" className="brand-logo" />
          </Link>
        </div>
        <div className="mot-template-suggest__btn">
          <Link
            to="/business-template/suggest"
            className="mot-template-suggest_resouce"
          >
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            Suggest Resources
          </Link>
        </div>
      </div>
      <BusinessTemplateHero />
      <Container className="mot-business-template-container">
        <Row className="mot-business-template-main">
          <Col md={2}>
            <TemplateSidebar
              templates={templates}
              copy={templatesCopy}
              setTemplates={setTemplates}
            />
          </Col>
          <Col md={9} className="ml-md-5">
            {loading ? (
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  height: "50vh",
                }}
              >
                {" "}
                <Spinner
                  as="span"
                  animation="grow"
                  size="lg"
                  style={{ color: "#134A7C" }}
                  role="status"
                  aria-hidden="true"
                />
              </div>
            ) : (
              <TemplateContainer templates={templates} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BusinessTemplateComponent;
