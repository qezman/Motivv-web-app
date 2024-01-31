import React from "react";
// import { ChallengeContext } from '../components/ChallengeContext';
import DesignChallengeList from "../components/DesignChallengeList";
import Helmet from "../components/Helmet";

export default function Challenge(props) {
  // const { isEdit } = useContext(ChallengeContext)
  return (
    <>
      <Helmet
        page="Design Challenge"
        title="Motivv Design Challenge Directory"
        description="This page contains design challenges which helps budding / already established developers improve in their design career by curating a real life application challenges for them to pratice with"
      />
      <DesignChallengeList onEdit={null} {...props} />
    </>
  );
}
