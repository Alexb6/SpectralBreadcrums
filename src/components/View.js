import React from "react";
import { Segment } from "semantic-ui-react";

const View = ({ focus }) => {
  React.useEffect(() => {
    console.log({ focus });
  }, [focus]);

  return <div>the view main content will belong here</div>;
};

export default View;