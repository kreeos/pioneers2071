import React from "react";
import "./profileui.css";

function ProfileUi(props) {
  return (
    <div className="prof-container">
      <div className="box">
        <img class="img-box" src={props.imgUrl} alt="profile-img" />
        <div class="name">{props.name}</div>
        <div class="des">{props.designation.replace("<br/>", "\n")}</div>
      </div>
    </div>
  );
}

export default ProfileUi;
