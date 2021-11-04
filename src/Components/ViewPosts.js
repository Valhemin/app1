import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
function ViewPosts(props) {
  const [items, setItem] = useState([]);
  const [showMain, setShowMain] = useState(true);

  // Initialization State

  const getData = () => {
    const url = "https://6182445084c2020017d89d65.mockapi.io/Posts";
    axios
      .get(url)
      .then(function (res) {
        const items = res.data;
        setItem(items);
      })
      .catch((error) => console.log(error));
  };

  useEffect(getData, [showMain]);
  // use Effect Hook

  const history = useHistory();
  // use useHistory to change URL

  return (
    <>
      {showMain && (
        <>
          <div className="container">
            <div className="row row-cols-xl-4 g-xl-4">
              {items.map((item) => {
                return (
                  <div className="col" key={item.id}>
                    <div
                      className="border posts"
                      onClick={() => {
                        setShowMain(false);
                        history.push("/view-post");
                        props.getDataPost(item);
                      }}
                    >
                      <img src={item.url} alt="IMG" className=" posts-img" />
                      <div className="py-2 px-4 posts-content">
                        <h3 className="posts-content__title">{item.title}</h3>
                        <p className="posts-content__des--short">{item.des}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ul className="pagination justify-content-center mt-4">
            <li className="page-item disabled">
              <div className="page-link">Trang đầu</div>
            </li>
            <li className="page-item">
              <div className="page-link">1</div>
            </li>
            <li className="page-item">
              <div className="page-link">2</div>
            </li>
            <li className="page-item">
              <div className="page-link">3</div>
            </li>
            <li className="page-item">
              <div className="page-link">Trang cuối</div>
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default ViewPosts;
