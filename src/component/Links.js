import React from "react";

export default function Links() {
  const Link = [
    {
      id: 1,
      Title: "Twitter Link",
      link: "https://twitter.com/Dextermufasa",
      link_id: "btn_twitter",
    },
    {
      id: 1,
      Title: "Zuri Team",
      link: "https://training.zuri.team/",
      link_id: "btn__zuri",
    },
    {
      id: 1,
      Title: "Zuri Books",
      link: "http://books.zuri.team",
      link_id: "books",
    },
    {
      id: 1,
      Title: "Python Books",
      link: "https://background.zuri.team",
      link_id: "book__python",
    },
    {
      id: 1,
      Title: "Background Check for Coders",
      link: "https://books.zuri.team/design-rules ",
      link_id: "pitch",
    },
    {
      id: 1,
      Title: "Design Books",
      link: "",
      link_id: "book__design",
    },
  ];
  return (
    <div className="Link-section">
      <div>
        {Link.map((data) => (
          <a
            href={data.link}
            className="links"
            target="_blank"
            rel="noreferrer"
          >
            <div key={data.id} id={data.link_id} className="link-box">
              <h6>{data.Title}</h6>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
