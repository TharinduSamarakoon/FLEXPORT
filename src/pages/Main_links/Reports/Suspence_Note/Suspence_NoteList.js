import React, { useState } from "react";
import Content from "../../../../layout/content/Content";
import Head from "../../../../layout/head/Head";
import { FormGroup, Label, Row, Col, Button} from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
  OverlineTitle,
  OutlinedInput,
  Icon,
  UserAvatar,
} from "../../../../components/Component";
import { Link } from "react-router-dom";
import makeAnimated from "react-select/animated";

const FormElementsPage = () => {
  const [file, setFile] = useState("");
  const animatedComponents = makeAnimated();

  return (
    <React.Fragment>
      <Head title="SUSPENSE CHIT" />
      <Content>
      <BlockHeadContent>
              <BlockTitle page>SUSPENSE CHIT</BlockTitle>
              <BlockDes className="text-soft">
              </BlockDes>
            </BlockHeadContent>
        <Block size="lg w-70">
          <BlockHead>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title-lg text-light text-center">
              {" "}
              SUSPENSE CHIT{" "}
            </OverlineTitle>
            <Row className="gy-4">
            <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                 Issued To
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                 Date
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="date" id="default-0" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Suspence No.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input no." />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Through
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input through" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Amount issued Rs.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="number" id="default-0" placeholder="Input amount" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <div className="form-control-wrap">
                    <textarea className="form-control" rows="10" type="text" id="default-0" />
                  </div>
                </FormGroup>
              </Col>
            </Row>
          <br />
          <br />

          <Row className="gy-4">
          <Col sm="" className="border">
          <Row className="gy-4">
          <Col sm="12">
          <OverlineTitle tag="span" className="preview-title-lg text-light text-center">
              {" "}
              SUSPENSE SETTLEMENT{" "}
            </OverlineTitle>
          <FormGroup className="mt-3">
                  <Label htmlFor="default-0" className="form-label">
                  Checked by Acct
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Settled on
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Accountant
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
          </Col>
          <Col sm="12">
          <Label  tag="h6" className="form-label">
                  Sattled suspense amount with
                  </Label>
          <FormGroup className="">
          
                  <Label htmlFor="default-0" className="form-label">
                  Bill / Voucher Rs.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input amount" />
                  </div>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  ans Cash of Rs.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input amount" />
                  </div>
                </FormGroup>
          </Col>
            </Row>
          </Col>
          <Col sm="6" className="">
          <Row className="gy-4">
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Cheque in favour of
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input value" />
                  </div>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Cash Rs.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input amount" />
                  </div>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Approved by MD
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input value" />
                  </div>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Approved by director
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input value" />
                  </div>
                </FormGroup>
          </Col>
          <Col sm="12">
          <Label htmlFor="default-0" className="form-label">
                  Received Payment
                  </Label>
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="mt-3">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                         CASH
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li className="mt-3">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck17" />
                        <label className="custom-control-label form-label" htmlFor="customCheck17">
                        CHEQUE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul>
                  <br />
                </Col>
                <Col sm="12">
          <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Name
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
          </Col>
          </Row>
          </Col>
          </Row>
          <div className="mb-5">
            <Link to="/suspence_note-details">
            <Button  color="light" outline className="btn-white mt-5 float-right">
          <span>Submit</span>
          </Button>
            </Link>
          </div>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default FormElementsPage;
