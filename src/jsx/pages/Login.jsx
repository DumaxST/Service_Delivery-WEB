import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  loadingToggleAction,
  loginAction,
} from "../../store/actions/AuthActions";

//language
import { useTranslation } from "react-i18next";

//
import logo from "../../assets/images/logo-2.png";
import login from "../../assets/images/bg-image4.jpg";
import loginbg from "../../assets/images/bg-image.jpeg";
import { getFakeJson } from "../../common/commonQueries";

function Login(props) {
  let year = new Date().getFullYear();
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@example.com");
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(false);

  
  const dispatch = useDispatch();

  //language
  const { t, i18n } = useTranslation("login");
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    i18n.changeLanguage("es");
  }, [i18n]);


  const toggleSwitch = () => {
    const newLanguage = isEnglish ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  function onLogin(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = t("emailRequired");
      error = true;
    }
    if (password === "") {
      errorObj.password = t("passwordRequired");
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }
    dispatch(loadingToggleAction(true));
    dispatch(loginAction(email, password, navigate));
  }

  return (
    <div
      className="login-main-page"
      style={{ backgroundImage: "url(" + loginbg + ")" }}
    >
      <div className="login-wrapper vh-100">
        <div
          className="login-aside-left"
          style={{ backgroundImage: "url(" + login + ")" }}
        >
         
         
        </div>
        <div className="login-aside-right">
          <div className="row m-0 justify-content-center h-100 align-items-center">
            <div className="col-xl-7 col-xxl-7">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form-1">
                      <div className="mb-4">
                        <h3 className="text-primary mb-1">{t("welcome")}</h3>
                        <p className="">
                          {t("signInInfo")}
                        </p>
                      </div>
                      {props.errorMessage && (
                        <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                          {props.errorMessage}
                        </div>
                      )}
                      {props.successMessage && (
                        <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
                          {props.successMessage}
                        </div>
                      )}
                      <form onSubmit={onLogin}>
                        <div className="form-group">
                          <label className="mb-2 ">
                            <strong>{t("email")}</strong>
                            <span className="required"> *</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && (
                            <div className="text-danger fs-12">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                        <label className="mb-2 ">
                          <strong>{t("password")}</strong>
                          <span className="required"> *</span>
                        </label>
                        <div className="input-group">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                            <i className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                          </div>
                        </div>
                        {errors.password && (
                          <div className="text-danger fs-12">
                            {errors.password}
                          </div>
                        )}
                      </div>
                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                          <div className="form-group">
                            <div className="form-check custom-checkbox ms-1 ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="basic_checkbox_1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="basic_checkbox_1"
                              >
                                {t("rememberPreference")}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            {t("signIn")}
                          </button>
                        </div>
                      </form>
                      <div className="text-center mt-3">
                        <Link to="#" className="text-primary">
                          {t("forgotPassword")}
                        </Link>
                      </div>
                      <div className="new-account mt-2 text-center">
                        <p className="">
                          {t("noAccount")}{" "}
                          <Link className="text-primary" to="/page-register">
                            {t("signUp")}
                          </Link>
                        </p>
                      </div>
                      <div className="container-languages">
                        <span className="language">
                          {isEnglish ? "Eng" : "Esp"}
                        </span>
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={isEnglish}
                            onChange={toggleSwitch}
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};
export default connect(mapStateToProps)(Login);
