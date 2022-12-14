// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicDetails,
  DefaultDetailsProps
} from "./plasmic/plasmic/PlasmicDetails";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface DetailsProps extends Omit<DefaultDetailsProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultDetailsProps altogether and have
// total control over the props for your component.
export interface DetailsProps extends DefaultDetailsProps {}

function Details_(props: DetailsProps, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicDetails to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicDetails are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all DetailsProps here, but feel free
  // to do whatever works for you.

  return <PlasmicDetails container={{ ref }} {...props} />;
}

const Details = React.forwardRef(Details_);
export default Details;
