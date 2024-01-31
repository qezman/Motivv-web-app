import React from "react";
import { Container } from "react-bootstrap";
import { BusinessTemplateCard } from "../BusinessTemplateCard/BusinessTemplateCard";

export const TemplateContainer = ({ templates }) => {
  return (
    <Container className="mot-templates-grid">
      {templates &&
        templates?.map((template, i) => {
          return (
            <BusinessTemplateCard
              key={`${template.id}-${template.title}-${i}`}
              {...template}
            />
          );
        })}
    </Container>
  );
};
