import React from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { connect } from "react-redux";
import { actionType } from "../../../store/action";

const Login = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    props.login("member");
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                {/* maybe can use CForm instead this form */}
                <form
                  style={{ width: "100%", height: "100%" }}
                  onSubmit={onSubmit}
                >
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          placeholder="Username"
                          autoComplete="username"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            type="submit"
                            color="primary"
                            className="px-4"
                          >
                            Login
                          </CButton>
                        </CCol>
                        {/* used to forget password */}
                      </CRow>
                    </CForm>
                  </CCardBody>
                </form>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                {/* used to register */}
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (role) => dispatch({ type: actionType.LOGIN, value: role }),
  };
};

export default connect(null, mapDispatchToProps)(Login);

//register
{
  /* <CCardBody className="text-center">
<div>
  <h2>Sign up</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.</p>
  <Link to="/register">
    <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
  </Link>
</div>
</CCardBody> */
}

//forget password
{
  /* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */
}
