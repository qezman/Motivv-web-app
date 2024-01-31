import React from "react";
import Helmet from "../components/Helmet";

import { ComingSoon } from "../DesignSchool/components/ComingSoon";

export default function DesignSchoolComingSoon() {
  return (
    <>
      <Helmet
        page="Design School | Coming Soon"
        title="Get ready for the coming of the design school"
        description=""
      />
      <ComingSoon />
    </>
  );
}
