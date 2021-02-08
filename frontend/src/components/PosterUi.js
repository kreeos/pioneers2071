import React from "react";
import "./posterui.css";
import medalIcon from "../images/medal-solid.svg";

function PosterUi(props) {
  const members = props.designation.split("<br/>");
  const membersList = members.map((member) => <li>{member}</li>);
  let medal;
  if (props.title.includes("Award"))
    medal = (
      <img src={medalIcon} height="20px" className="filter-white mr-2 mb-1" />
    );
  else medal = <></>;
  return (
    <div className="d-flex justify-content-center">
      <a href={props.link} style={{ textDecoration: "none" }}>
        <div className="poster-container">
          <div
            className="color-box"
            style={{
              backgroundColor: props.color,
            }}
          >
            {medal}
            {props.title}
          </div>

          <div className="content-box d-flex px-3 py-3">
            <img
              class="poster-img my-auto"
              src={props.imgUrl}
              alt="poster-img"
            />
            <div class="poster-box">
              <div class="poster-name">{props.name}</div>
              <div class="poster-des">
                <ol>{membersList}</ol>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PosterUi;
