import React from "react";
import { Breadcrumb, Icon } from "semantic-ui-react";


// See semantic-ui-react document for further information on how Breadcrumb works
// https://react.semantic-ui.com/collections/breadcrumb/
const NavBar = ({ zones, scenarios, setFocus }) => {
  React.useEffect(() => {
    console.log({ zones, scenarios });
  }, [zones, scenarios]);

  return <div>my navbar</div>;
};

export default NavBar;
