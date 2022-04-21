import React from "react";
import Scrollbar from "react-smooth-scrollbar";
const SmoothScroll = (props) => {
  return <Scrollbar 
  alwaysShowTracks={true}
  >{props.children}</Scrollbar>;
};

export default SmoothScroll;
