import React from "react";
import { useHistory } from "react-router";
export default function ViewpostGuest(props) {
  const { url, title, des } = props;
  const history = useHistory();
  const onBack = () => {
    let path = "/";
    history.push(path);
  };
  // Create button back
  return (
    <div className="container ">
      <div className="view-post-g">
        <p className="view-post-g__back" onClick={onBack}>
          &#8592; Trở lại
        </p>
        <div className="view-post-g__content">
          <h3 className="view-post-g__content--title">{title}</h3>
          <div className="view-post-g__content--img">
            <img src={url} alt="Banner Post" />
          </div>
          <div className="view-post-g__content--des">{des}</div>
        </div>
      </div>
    </div>
  );
}
