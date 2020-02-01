import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const PageLoader = () => {
  return (
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
  );
};

export default PageLoader;
