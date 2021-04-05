import React, { useState, useEffect } from "react";
import { Breadcrumb, Icon } from "semantic-ui-react";

import './NavBar.css';

// See semantic-ui-react document for further information on how Breadcrumb works
// https://react.semantic-ui.com/collections/breadcrumb/
const NavBar = ({ zones, scenarios, setFocus, initialFocus }) => {
  const [focus, setInternFocus] = useState();
  useEffect(() => {
    // console.log({ zones, scenarios });
    const data = { zone1: {}, zone2: {}, scenario: {} }
    if (scenarios != null && zones != null) {
      const { type, value } = initialFocus;
      if (type === 'scenarios') {
        data.scenario = scenarios.find(el => el.id === value);
        data.zone2 = zones.filter(el => el.zoneLevel === 2).find(el => el.scenariosId.includes(data.scenario.id));
        data.zone1 = zones.find(el => el.id === data.zone2.parentId);
      }
      if (type === 'zones') {
        const zoneLevel = zones.find(el => el.id === value);
        if (zoneLevel.zoneLevel === 2) {
          data.zone2 = zones.find(el => el.id === value);
          data.zone1 = zones.find(el => el.id === data.zone2.parentId);
        } else {
          data.zone1 = zones.find(el => el.id === value);
        }
      }
      setInternFocus(data);      
      // setFocus(data);      
    }  
  }, [zones, scenarios]);

  // Check if an object is empty
  const objIsEmpty = (obj) => {
    for (var x in obj) { return false; }
    return true;
  }

  if (!focus) return <div> Breadcrumbs menu is loadding... </div>
  return (    
    <div>
      <Breadcrumb className='breadcrumbs'>
        { focus.zone1 &&
          <Breadcrumb.Section>
            {
              Object.values(focus).map(focusPlace => {
                if (!objIsEmpty(focusPlace)) return (
                  <span key={focusPlace.id}>{focusPlace.label}<Breadcrumb.Divider icon='right chevron' /></span>
                )
              })
            }
          </Breadcrumb.Section>
        }
      </Breadcrumb>
    </div>
  );
};

export default NavBar;
