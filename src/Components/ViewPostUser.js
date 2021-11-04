import React from "react";
import PropTypes from "prop-types";

function ViewPostUser(props) {
  return (
    <div className="container ">
      <div className="view-post-g">
        <p className="view-post-g__back">&#8592; Trở lại</p>
        <div className="manager-posts__control view-post-u__control">
          <span className="manager-posts__control--label view-post-u__control--label">
            Chỉnh sửa
          </span>
          <span className="manager-posts__control--label view-post-u__control--label">
            Xóa
          </span>
        </div>
        <div className="view-post-g__content">
          <h3 className="view-post-g__content--title">Title Blog</h3>
          <div className="view-post-g__content--img">
            <img src="" alt="Post1" />
          </div>
          <div className="view-post-g__content--des">content</div>
        </div>
      </div>
    </div>
  );
}

ViewPostUser.propTypes = {};

export default ViewPostUser;
