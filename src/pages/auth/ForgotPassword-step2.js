import React from "react";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, PreviewCard } from "../../components/Component";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import { FormGroup } from "reactstrap";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <React.Fragment>
      <Head title="RESET PASSWORD" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
          <BlockTitle tag="h2" className="text-danger">FLEXPORT (PVT) LTD</BlockTitle>
          </div>
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h5">Reset password</BlockTitle>
                <BlockDes>
                  <p>Your email verification is successful, so reset user old user password to new password.</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <form>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    New Password
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="default-01"
                  placeholder="Enter your new password"
                />
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                  Re-enter New Password
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="default-01"
                  placeholder="Enter your new password again"
                />

              </FormGroup>
              <FormGroup>
                <Button color="danger" size="lg" className="btn-block" onClick={(ev) => ev.preventDefault()}>
                   Reset 
                </Button>
              </FormGroup>
            </form>
            <div className="form-note-s2 text-center pt-4">
            No need to reset? 
              <Link to={`${process.env.PUBLIC_URL}/auth-login`}>
              <strong> Sign In</strong>
              </Link>
            </div>
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default ForgotPassword;
