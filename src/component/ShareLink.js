import React from "react";

import Icon from "../assets/Images/share-icon.png";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";

import useCopyToClipboard from "../Hooks/useClipboard.ts";

function ShareLink() {
  const [value, copy] = useCopyToClipboard();
  return (
    <div style={{ float: "right" }}>
      <div className="share-icon" onClick={() => copy(window.location.href)}>
        <img src={Icon} alt="share" />
      </div>
      {value ? (
        <div className="copied">
          <div>Copied to clipboard</div>
          <div onClick={() => copy(null)}>
            <strong>clear</strong>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default ShareLink;
