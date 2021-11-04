import React from "react";

function CreatePost(props) {
  return (
    <form className="create-post">
      <div className="container">
        <div className="create-post__title">Title Blog</div>
        <div className="row justify-content-center align-items-center">
          <div className="col-2 create-post__item">
            <label htmlFor="post-title" className="create-post__label">
              Nhập tiêu đề của bài viết
            </label>
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              id="post-title"
              required
            />
          </div>
        </div>
        <label htmlFor="post-up-img" className="create-post__label">
          Tải lên ảnh nổi bật của bài viết:
        </label>
        <input type="file" name="" id="post-up-img" accept="image/*" required />
        <label htmlFor="post-up-img" className="d-block create-post__label">
          Nội dung bài viết:
        </label>
        <textarea name="" id="" cols="100" rows="16" required></textarea>
      </div>
      <input type="submit" value="Đăng bài" className="btn create-post__btn" />
    </form>
  );
}

export default CreatePost;
