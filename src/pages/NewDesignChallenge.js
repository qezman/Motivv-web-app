import React from "react";

import Helmet from "../components/Helmet";
import NewDesignChallengeBody from "../components/NewDesignChallengeBody";

export default function NewDesignChallenge(props) {
  return (
    <>
      <Helmet
        page="Design Challenge"
        title="We connect prospective clients to vetted designers"
        description="Get access to the Latest Design Challenge for your track and improve as a Designers"
      />
      <NewDesignChallengeBody />
    </>
  );
}
