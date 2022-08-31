import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
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
} from "../../../components/Component";
import makeAnimated from "react-select/animated";

const FormElementsPage = () => {
  const [file, setFile] = useState("");
  const animatedComponents = makeAnimated();

  return (
    <React.Fragment>
      <Head title="CUSTOMERS" />
      <Content>
      <BlockHeadContent>
              <BlockTitle tag="h3" page>Order Acceptance & Customers Details Form</BlockTitle>
              <BlockDes className="text-soft">
              </BlockDes>
            </BlockHeadContent>
        <Block size="lg">
          <BlockHead>
          </BlockHead>
          <PreviewCard className="w-50">
            <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Customer details{" "}
            </OverlineTitle>
            <Row className="gy-4">
              <Col sm="10">
                <Row className="gy-4">
                <Col sm="4">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Date
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="date" id="default-0"  />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="8" className="">
                <FormGroup className="float-right">
                  <Label htmlFor="default-0" className="form-label ">
                  Delivery
                  </Label>
                  <div className="form-control-wrap ">
                    <input className="form-control" type="time" id="default-0"  />
                  </div>
                </FormGroup>
              </Col>
              </Row>
              <Row className="gy-4">
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
              <Row className="gy-4">
              <Col sm="12">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Company
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input company name" />
                  </div>
                </FormGroup>
              </Col>
              </Row>
              <Row className="gy-4">
              <Col sm="12">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Address
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input address" />
                  </div>
                </FormGroup>
              </Col>
              </Row>
              <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Tel.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="number" id="default-0" placeholder="Input telephone number" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Fax
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="number" id="default-0" placeholder="Input fax number" />
                  </div>
                </FormGroup>
              </Col>
              </Row>
              <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Mobile.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="number" id="default-0" placeholder="Input mobile number" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Email
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input email" />
                  </div>
                </FormGroup>
              </Col>
              </Row>
              <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Alternative Contact Person
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input alternative contact person" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Alternative Contact Person Tel.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input alternative contact person tel." />
                  </div>
                </FormGroup>
              </Col>
              </Row>
              <Row className="gy-4">
              <Col sm="12">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Description
                  </Label>
                  <div className="form-control-wrap">
                  <input className="form-control mb-2" type="number" id="default-0" placeholder="Type something" />
                    <textarea className="form-control h-50" type="text" rows="10" id="default-0" placeholder="Type something" />
                  </div>
                </FormGroup>
              </Col>
              </Row>
              <Row className="gy-4">
              </Row>
              </Col>
              <Col sm="2">
              <Col>
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                      <div className="g- align-center flex-wrap ">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck1" />
                        <label className="custom-control-label form-label" htmlFor="customCheck1">
                         HO
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck2" />
                        <label className="custom-control-label form-label" htmlFor="customCheck2">
                        Call
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck3" />
                        <label className="custom-control-label form-label" htmlFor="customCheck3">
                        Fax
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck4" />
                        <label className="custom-control-label form-label" htmlFor="customCheck4">
                        Post
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck5" />
                        <label className="custom-control-label form-label" htmlFor="customCheck5">
                        Email
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck6" />
                        <label className="custom-control-label form-label" htmlFor="customCheck6">
                        E Mak
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck6" />
                        <label className="custom-control-label form-label" htmlFor="customCheck6">
                        Web
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck7" />
                        <label className="custom-control-label form-label" htmlFor="customCheck7">
                        Word of mouth
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck8" />
                        <label className="custom-control-label form-label" htmlFor="customCheck8">
                        Flex Lable
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck9" />
                        <label className="custom-control-label form-label" htmlFor="customCheck9">
                        Tender
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck10" />
                        <label className="custom-control-label form-label" htmlFor="customCheck10">
                        Supp. Regist
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck11" />
                        <label className="custom-control-label form-label" htmlFor="customCheck11">
                        RainB Pages
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck12" />
                        <label className="custom-control-label form-label" htmlFor="customCheck12">
                        Person Cont.
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck13" />
                        <label className="custom-control-label form-label" htmlFor="customCheck13">
                        News Paper
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck14" />
                        <label className="custom-control-label form-label" htmlFor="customCheck14">
                        TV
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                      <li>
                      <div className="g- align-center flex-wrap">
                    <div className="g ml-3">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck15" />
                        <label className="custom-control-label form-label" htmlFor="customCheck15">
                        Sales Lead
                        </label>
                      </div>
                    </div>
                  </div>
                      </li>
                    </ul>
              </Col>
              </Col>
            </Row>
            <hr className="preview-hr"></hr>
            <Row className="gy-4">
            <Col sm="6">
            <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
               Payments{" "}
            </OverlineTitle>
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                         CHEQUE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck17" />
                        <label className="custom-control-label form-label" htmlFor="customCheck17">
                         CASH
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul>
                  </Col>
            <Col sm="6">
            <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              CONFIRMED BY{" "}
            </OverlineTitle>
              <ul className="custom-control-group g-3 align-center flex-wrap">
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck19"/>
                        <label className="custom-control-label form-label" htmlFor="customCheck19">
                         DD
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck20" />
                        <label className="custom-control-label form-label" htmlFor="customCheck20">
                         MD
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck18" />
                        <label className="custom-control-label form-label" htmlFor="customCheck18">
                         CUSTOMER
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul>
                  </Col>
            </Row>
            <br />
            <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Quotation Evaluation{" "}
            </OverlineTitle>
            <Row className="gy-4">
            <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Quotation No.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="number" id="default-0" placeholder="Input quotation number" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Quotation Date
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="date" id="default-0" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  FollowUp Date
                  </Label>
                  <div className="form-control-wrap" sm="4">
                    <input className="form-control" type="date" id="default-0"  />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="9">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  FollowUp Comments
                  </Label>
                  <div className="form-control-wrap" sm="4">
                    <input className="form-control" type="text" id="default-0" placeholder="Input comment" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <div className="form-control-wrap" sm="4">
                    <input className="form-control" type="date" id="default-0"  />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="9">
                <FormGroup>
                  <div className="form-control-wrap" sm="4">
                    <input className="form-control" type="text" id="default-0" placeholder="Input comment" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>

                  <div className="form-control-wrap" sm="4">
                    <input className="form-control" type="date" id="default-0"  />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="9">
                <FormGroup>
                  <div className="form-control-wrap" sm="4">
                    <input className="form-control" type="text" id="default-0" placeholder="Input comment" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Date of Quo. Rejected
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="date" id="default-0" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="">
              <Label htmlFor="default-0" className="form-label">
                Reason For Rejection
                  </Label>
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="reject"
                            id="reject1-0"
                          />
                          <label className="custom-control-label text-light" htmlFor="reject1-0">
                          HIGH PRICE
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="reject"
                            id="reject1-1"
                          />
                          <label className="custom-control-label text-light" htmlFor="reject1-1">
                          POSTPONED
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="reject"
                            id="reject1-2"
                          />
                          <label className="custom-control-label text-light" htmlFor="reject1-2">
                          CANCELLED
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="reject"
                            id="reject1-3"
                          />
                          <label className="custom-control-label text-light" htmlFor="reject1-3">
                          SHORT NOTICE
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="reject"
                            id="reject1-4"
                          />
                          <label className="custom-control-label text-light" htmlFor="reject1-4">
                          NOT SATISFIED WITH THE EARLIER ORDER
                          </label>
                        </div>
                      </li>
                    </ul>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Other
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input other reason" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                <Button color="light" outline className="btn-white mt-5 float-right" onClick={() => setModal({ add: true })}>
                <span>Continue to Payments</span>
                </Button>
                </FormGroup>
              </Col>
            </Row>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default FormElementsPage;
