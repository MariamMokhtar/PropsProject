import React from "react";
import propTypes from "prop-types";

function Profile(props) {
  return (
    <div onLoad={props.myAlert}>
      <div style={{ color: "pink" }}>{props.name}</div>
      <div style={{ color: "yellow" }}>{props.bio}</div>
      <div style={{ color: "lightblue" }}>{props.profession}</div>
      <div>{props.children}</div>
    </div>
  );
}

Profile.defaultProps = {
  name: "unicorn",
  bio: "Not available",
  profession: "Not available",
};

Profile.propTypes = {
  name: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
};

export default Profile;
