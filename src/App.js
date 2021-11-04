import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ViewPosts from "./Components/ViewPosts";
import ViewPostGuest from "./Components/ViewPostGuest";
import Login from "./Components/Login";
import ManagerPosts from "./Components/ManagerPosts";
import CreatePost from "./Components/CreatePost";
// component

import "./style/sass/main.scss";
// main scss

export default function App() {
  const [userLogined, setUserLogined] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const getDataChild = (childData) => {
    setUrl(childData.url);
    setTitle(childData.title);
    setDes(childData.des);
  };
  const getisLogin = (logined) => {
    setUserLogined(logined);
  };
  return (
    <Router>
      <div className="container">
        <div className="header">
          <div className="navbar navbar-expand-lg p-3">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                {!userLogined && (
                  <Link to="/tai-khoan" className="nav-link">
                    Tài khoản
                  </Link>
                )}
              </li>
              {userLogined ? (
                <>
                  <li className="nav-item">
                    <Link to="/viet-blog" className="nav-link">
                      Viết Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/quan-li-bai-viet" className="nav-link">
                      Quản lí bài viết
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn-logout">Đăng xuất</Link>
                  </li>
                </>
              ) : (
                []
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* End HTML navbar */}
      <Switch>
        <Route exact path="/">
          <ViewPosts getDataPost={getDataChild} />
        </Route>
        <Route exact path="/view-post">
          <ViewPostGuest url={url} title={title} des={des} />
        </Route>
        <Route exact path="/tai-khoan">
          <Login isLogined={getisLogin} />
        </Route>
        <Route exact path="/viet-blog">
          <CreatePost />
        </Route>
        <Route exact path="/quan-li-bai-viet">
          <ManagerPosts />
        </Route>
      </Switch>
      {/* Function Switch component by URL  */}
    </Router>
    // Use Router-react
  );
}
