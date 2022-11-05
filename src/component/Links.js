import React from "react";
import { Link } from "react-router-dom";

export default function Links() {
  const Links = [
    {
      id: 1,
      Title: "Twitter Link",
      link: "https://twitter.com/Dextermufasa",
      link_id: "btn_twitter",
    },
    {
      id: 2,
      Title: "Zuri Team",
      link: "https://training.zuri.team/",
      link_id: "btn__zuri",
    },
    {
      id: 3,
      Title: "Zuri Books",
      link: "http://books.zuri.team",
      link_id: "books",
    },
    {
      id: 4,
      Title: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=felixawoyale",
      link_id: "book__python",
    },
    {
      id: 5,
      Title: "Background Check for Coders",
      link: "https://background.zuri.team",
      link_id: "pitch",
    },
    {
      id: 6,
      Title: "Design Books",
      link: "https://books.zuri.team/design-rules ",
      link_id: "book__design",
    },
  ];
  return (
    <div className="Link-section">
      <div>
        {Links.map((data) => (
          <a
            href={data.link}
            className="links"
            target="_blank"
            rel="noreferrer"
            key={data.id}
          >
            <div key={data.id} id={data.link_id} className="link-box">
              <h6>{data.Title}</h6>
            </div>
          </a>
        ))}
        <Link to="/contact" className="links" target="_blank" rel="noreferrer">
          <div id="contact" className="link-box">
            <h6>Contact Me</h6>
          </div>
        </Link>
      </div>
    </div>
  );
}
