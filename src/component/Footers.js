import React from "react";
import Slack from "../assets/Images/slack.png";
import Github from "../assets/Images/github.png";
import Zuri from "../assets/Images/zuri.png";
import I4G from "../assets/Images/ingressive.png";

function Footers() {
  const Link = [
    {
      id: 1,
      name: "slack",
      src: Slack,
      slack_name: "",
      link: "#",
    },
    {
      id: 2,
      name: "github",
      src: Github,
      github_name: "",
      link: "#",
    },
  ];
  return (
    <div className="footer-area">
      <div className="slack-git">
        {Link.map((data) => (
          <a href={data.link} target="_blank" rel="noreferrer">
            <img src={data.src} alt={data.name} />
          </a>
        ))}
      </div>{" "}
      <hr style={{ width: "100%" }} />
      <div className="main-footer">
        <div>
          <img src={Zuri} alt="zuri" />
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <div>
          <img src={I4G} alt="I4G" />
        </div>
      </div>
    </div>
  );
}

export default Footers;
