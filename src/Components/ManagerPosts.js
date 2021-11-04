import React from "react";

function ManagerPosts(props) {
  return (
    <div className="container manager-posts">
      <p className="manager-posts__title">Các bài đã viết</p>
      <div className="border manager-posts__box">
        <div className="manager-posts__control">
          <span className="manager-posts__control--label">Chỉnh sửa</span>
          <span className="manager-posts__control--label">Xóa</span>
        </div>
        <div className="row">
          <div className="col-4 manager-posts__img">
            <img src="" alt="IMG BLog" />
          </div>
          <div className="col-8 manager-posts__content">
            <div className="manager-posts__content--title">Title Blog</div>
            <div className="manager-posts__content--des">Short content</div>
          </div>
        </div>
      </div>
      <div className="border manager-posts__box">
        <div className="manager-posts__control">
          <span className="manager-posts__control--label">Chỉnh sửa</span>
          <span className="manager-posts__control--label">Xóa</span>
        </div>
        <div className="row">
          <div className="col-4 manager-posts__img">
            <img src="" alt="IMG BLog" />
          </div>
          <div className="col-8 manager-posts__content">
            <div className="manager-posts__content--title">Title Blog</div>
            <div className="manager-posts__content--des">Short content</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerPosts;
