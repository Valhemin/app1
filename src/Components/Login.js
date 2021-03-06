import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
function Login(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  // initilazion state

  let isLogin = true;
  const history = useHistory();
  const register = () => {};
  // const register = (e) => {
  //   e.preventDefault();
  //   // block action default brower

  //   const info = JSON.stringify({
  //     daXoa: 0,
  //     donvi: "string",
  //     id: 0,
  //     ngaySua: "2021-11-04 08:13:46",
  //     ngayTao: "2021-11-04 08:13:46",
  //     nguoiSua: "admin",
  //     nguoiTao: "admin",
  //     username: user,
  //     password: pass,
  //     ten: "string",
  //     token: "string",
  //   });
  //   // transfer data(get user,pass) to JSON
  //   const header = {
  //     Authorization:
  //       "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjAxNzQ0MywiZXhwIjoxNjY3NTUzNDQzfQ.a4WG8FnSnW3V7YyFzMA5wniAmKLluGRxAjNB5IT70L5WRW3P2T6xsMXkasM31QTVx9DTw7SV8XBweEeLcWvJow",
  //     "Content-Type": "application/json",
  //     Cookie: "JSESSIONID=0528A1EB475D38DB73044E537772FC62",
  //   };
  //   const url = "http://192.168.2.224:8080/api/auth/register";
  //   var config = {
  //     method: "POST",
  //     url,
  //     header,
  //     data: info,
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   // Axios method register
  // };

  const login = (e) => {
    e.preventDefault();
    var info = JSON.stringify({
      userName: user,
      passWord: pass,
    });

    const url = "http://192.168.2.224:8080/api/auth/login";

    const headers = {
      "Content-Type": "application/json",
      Cookie: "JSESSIONID=0528A1EB475D38DB73044E537772FC62",
    };

    const config = {
      method: "post",
      url,
      headers,
      data: info,
    };

    axios(config)
      .then(function (res) {
        if (res.data.errorCode === 0) {
          props.isLogined(true);
          history.push("/");
        } else alert("M???t kh???u kh??ng ????ng, th??? l???i !");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <form className="form-login ">
          {isLogin ? (
            <p className="btn-switch-form">????ng k??</p>
          ) : (
            <p className="btn-switch-form">????ng Nh???p</p>
          )}
          <div className="mb-3 row">
            <label
              htmlFor="userName"
              className="col-sm-4 fw-bold col-form-label"
            >
              T??i kho???n:
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="p-2 form-control"
                id="userName"
                placeholder="T??i kho???n"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="passWord"
              className="col-sm-4 fw-bold col-form-label"
            >
              M???t kh???u:
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                className="p-2 form-control"
                id="passWord"
                placeholder="M???t kh???u"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                required
              />
            </div>
          </div>
          {isLogin ? (
            <button
              className="btn float-end form-login__btn"
              onClick={(e) => login(e)}
            >
              ????ng nh???p
            </button>
          ) : (
            <button
              className="btn float-end form-login__btn"
              onClick={(e) => register(e)}
            >
              ????ng K??
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
