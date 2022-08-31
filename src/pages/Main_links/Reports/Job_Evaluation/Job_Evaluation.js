import React, { useState } from "react";
import Content from "../../../../layout/content/Content";
import Head from "../../../../layout/head/Head";
import { FormGroup, Label, Input, Row, Col, Button} from "reactstrap";
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
import LogoDark from "../../../../images/logo-dark.png";

const FormElementsPage = () => {
  const [file, setFile] = useState("");
  const animatedComponents = makeAnimated();

  return (
    <React.Fragment>
      <Head title="JOB EVALUATION" />
      <Content>
      <BlockHeadContent className="mb-5">
              <BlockTitle page>Job Evaluation</BlockTitle>
       </BlockHeadContent>
       <BlockHeadContent>
       </BlockHeadContent>
        <Block size="lg ">
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title-lg text-light text-center">
              {" "}
              Job evaluation details{" "}
            </OverlineTitle>
            <Row className="gy-4">
            <Col sm="9">
            <Row className="gy-4">
              <Col sm="5">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Date
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="date" id="default-0" placeholder="Input company" />
                  </div>
                </FormGroup>
              </Col>
              </Row>
              <Row className="gy-4">
              <Col sm="5">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                   Customer
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input customer" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="5 ml-5">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Job No.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input job no." />
                  </div>
                </FormGroup>
              </Col>
            </Row>
            </Col>
            <Col sm="3">
            <div className="invoice-wrap">
                <div className="invoice-brand">
                  <img src={LogoDark} alt="" />
                </div>
                <h4 tag="h2" className="text-light">
                FLEXPORT (PVT) LTD
            </h4>
             </div>
            </Col>
            </Row>
            <Row>
            <Col sm="12">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Description
                  </Label>
                  <div className="form-control-wrap">
                    <textarea className="form-control" rows="10" type="text" id="default-0" placeholder="Type something" />
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <hr className="preview-hr"></hr>



            {/*selections */}
            <Row className="ml-5">
            <Col lg="5">
                <p className="text-light">
                First Impression - Greeting/Inviting (Visit at HO/Call)
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="cus-feedback"
                            id="feedback1"
                          />
                          <label className="custom-control-label" htmlFor="feedback1">
                            0
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback2"
                          />
                          <label className="custom-control-label" htmlFor="feedback2">
                            10
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback3"
                          />
                          <label className="custom-control-label" htmlFor="feedback3">
                            20
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback4"
                          />
                          <label className="custom-control-label" htmlFor="feedback4">
                            30
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback5"
                          />
                          <label className="custom-control-label" htmlFor="feedback5">
                            40
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback6"
                          />
                          <label className="custom-control-label" htmlFor="feedback6">
                            50
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback7"
                          />
                          <label className="custom-control-label" htmlFor="feedback7">
                            60
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback8"
                          />
                          <label className="custom-control-label" htmlFor="feedback8">
                            70
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback9"
                          />
                          <label className="custom-control-label" htmlFor="feedback9">
                            80
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback10"
                          />
                          <label className="custom-control-label" htmlFor="feedback10">
                            90
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback11"
                          />
                          <label className="custom-control-label" htmlFor="feedback11">
                            100
                          </label>
                        </div>
                      </li>
                    </ul>
              </Col>
            </Row>
            {/* line 1 end */}

            {/* line 2 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Customer Visits & Site Visits
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="cus-feedback"
                            id="feedback12"
                          />
                          <label className="custom-control-label" htmlFor="feedback12">
                            0
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback13"
                          />
                          <label className="custom-control-label" htmlFor="feedback13">
                            10
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback14"
                          />
                          <label className="custom-control-label" htmlFor="feedback14">
                            20
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback15"
                          />
                          <label className="custom-control-label" htmlFor="feedback15">
                            30
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback16"
                          />
                          <label className="custom-control-label" htmlFor="feedback16">
                            40
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback17"
                          />
                          <label className="custom-control-label" htmlFor="feedback17">
                            50
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback18"
                          />
                          <label className="custom-control-label" htmlFor="feedback18">
                            60
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback19"
                          />
                          <label className="custom-control-label" htmlFor="feedback19">
                            70
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback20"
                          />
                          <label className="custom-control-label" htmlFor="feedback20">
                            80
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback21"
                          />
                          <label className="custom-control-label" htmlFor="feedback21">
                            90
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback22"
                          />
                          <label className="custom-control-label" htmlFor="feedback22">
                            100
                          </label>
                        </div>
                      </li>
                    </ul>
              </Col>
            </Row>
            {/* line 2 end */}

            {/* line 3 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Sending Designs/AW
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="cus-feedback"
                            id="feedback23"
                          />
                          <label className="custom-control-label" htmlFor="feedback23">
                            0
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback24"
                          />
                          <label className="custom-control-label" htmlFor="feedback24">
                            10
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback25"
                          />
                          <label className="custom-control-label" htmlFor="feedback25">
                            20
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback26"
                          />
                          <label className="custom-control-label" htmlFor="feedback26">
                            30
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback27"
                          />
                          <label className="custom-control-label" htmlFor="feedback27">
                            40
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback28"
                          />
                          <label className="custom-control-label" htmlFor="feedback28">
                            50
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback29"
                          />
                          <label className="custom-control-label" htmlFor="feedback29">
                            60
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback30"
                          />
                          <label className="custom-control-label" htmlFor="feedback30">
                            70
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback31"
                          />
                          <label className="custom-control-label" htmlFor="feedback31">
                            80
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback32"
                          />
                          <label className="custom-control-label" htmlFor="feedback32">
                            90
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback33"
                          />
                          <label className="custom-control-label" htmlFor="feedback33">
                            100
                          </label>
                        </div>
                      </li>
                    </ul>
              </Col>
            </Row>
            {/* line 3 end */}

            {/* line 4 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Sending Quotation
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="cus-feedback"
                            id="feedback4-0"
                          />
                          <label className="custom-control-label" htmlFor="feedback4-0">
                            0
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback4-1"
                          />
                          <label className="custom-control-label" htmlFor="feedback4-1">
                            10
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback4-2"
                          />
                          <label className="custom-control-label" htmlFor="feedback4-2">
                            20
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback4-3"
                          />
                          <label className="custom-control-label" htmlFor="feedback4-3">
                            30
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback4-4"
                          />
                          <label className="custom-control-label" htmlFor="feedback4-4">
                            40
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback4-5"
                          />
                          <label className="custom-control-label" htmlFor="feedback4-5">
                            50
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback4-6"
                          />
                          <label className="custom-control-label" htmlFor="feedback4-6">
                            60
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback4-7"
                          />
                          <label className="custom-control-label" htmlFor="feedback4-7">
                            70
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback4-8"
                          />
                          <label className="custom-control-label" htmlFor="feedback4-8">
                            80
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback4-9"
                          />
                          <label className="custom-control-label" htmlFor="feedback4-9">
                            90
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback4-10"
                          />
                          <label className="custom-control-label" htmlFor="feedback4-10">
                            100
                          </label>
                        </div>
                      </li>
                    </ul>
              </Col>
            </Row>
            {/* line 4 end */}

            {/* line 5 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Updates/ Feedbacks on job situation and responding to the customer
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="cus-feedback"
                            id="feedback5-0"
                          />
                          <label className="custom-control-label" htmlFor="feedback5-0">
                            0
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback5-1"
                          />
                          <label className="custom-control-label" htmlFor="feedback5-1">
                            10
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback5-2"
                          />
                          <label className="custom-control-label" htmlFor="feedback5-2">
                            20
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback5-3"
                          />
                          <label className="custom-control-label" htmlFor="feedback5-3">
                            30
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback5-4"
                          />
                          <label className="custom-control-label" htmlFor="feedback5-4">
                            40
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback5-5"
                          />
                          <label className="custom-control-label" htmlFor="feedback5-5">
                            50
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback5-6"
                          />
                          <label className="custom-control-label" htmlFor="feedback5-6">
                            60
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback5-7"
                          />
                          <label className="custom-control-label" htmlFor="feedback5-7">
                            70
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback5-8"
                          />
                          <label className="custom-control-label" htmlFor="feedback5-8">
                            80
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback5-9"
                          />
                          <label className="custom-control-label" htmlFor="feedback5-9">
                            90
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback5-10"
                          />
                          <label className="custom-control-label" htmlFor="feedback5-10">
                            100
                          </label>
                        </div>
                      </li>
                    </ul>
              </Col>
            </Row>
            {/* line 5 end */}

            {/* line 6 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Quality of Products
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="cus-feedback"
                            id="feedback6-0"
                          />
                          <label className="custom-control-label" htmlFor="feedback6-0">
                            0
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback6-1"
                          />
                          <label className="custom-control-label" htmlFor="feedback6-1">
                            10
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback6-2"
                          />
                          <label className="custom-control-label" htmlFor="feedback6-2">
                            20
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback6-3"
                          />
                          <label className="custom-control-label" htmlFor="feedback6-3">
                            30
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback6-4"
                          />
                          <label className="custom-control-label" htmlFor="feedback6-4">
                            40
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback6-5"
                          />
                          <label className="custom-control-label" htmlFor="feedback6-5">
                            50
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback6-6"
                          />
                          <label className="custom-control-label" htmlFor="feedback6-6">
                            60
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback6-7"
                          />
                          <label className="custom-control-label" htmlFor="feedback6-7">
                            70
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback6-8"
                          />
                          <label className="custom-control-label" htmlFor="feedback6-8">
                            80
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback6-9"
                          />
                          <label className="custom-control-label" htmlFor="feedback6-9">
                            90
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback6-10"
                          />
                          <label className="custom-control-label" htmlFor="feedback6-10">
                            100
                          </label>
                        </div>
                      </li>
                    </ul>
              </Col>
            </Row>
            {/* line 6 end */}

            {/* line 7 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
              Value for Price/ Cost Effective
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="cus-feedback"
                            id="feedback7-0"
                          />
                          <label className="custom-control-label" htmlFor="feedback7-0">
                            0
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback7-1"
                          />
                          <label className="custom-control-label" htmlFor="feedback7-1">
                            10
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback7-2"
                          />
                          <label className="custom-control-label" htmlFor="feedback7-2">
                            20
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback7-3"
                          />
                          <label className="custom-control-label" htmlFor="feedback7-3">
                            30
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback7-4"
                          />
                          <label className="custom-control-label" htmlFor="feedback7-4">
                            40
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback7-5"
                          />
                          <label className="custom-control-label" htmlFor="feedback7-5">
                            50
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback7-6"
                          />
                          <label className="custom-control-label" htmlFor="feedback7-6">
                            60
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback7-7"
                          />
                          <label className="custom-control-label" htmlFor="feedback7-7">
                            70
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback7-8"
                          />
                          <label className="custom-control-label" htmlFor="feedback7-8">
                            80
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback7-9"
                          />
                          <label className="custom-control-label" htmlFor="feedback7-9">
                            90
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback7-10"
                          />
                          <label className="custom-control-label" htmlFor="feedback7-10">
                            100
                          </label>
                        </div>
                      </li>
                    </ul>
              </Col>
            </Row>
            {/* line 7 end */}

            {/* line 8 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
              Delivery & Service
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="cus-feedback"
                            id="feedback8-0"
                          />
                          <label className="custom-control-label" htmlFor="feedback8-0">
                            0
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback8-1"
                          />
                          <label className="custom-control-label" htmlFor="feedback8-1">
                            10
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback8-2"
                          />
                          <label className="custom-control-label" htmlFor="feedback8-2">
                            20
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback8-3"
                          />
                          <label className="custom-control-label" htmlFor="feedback8-3">
                            30
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback8-4"
                          />
                          <label className="custom-control-label" htmlFor="feedback8-4">
                            40
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback8-5"
                          />
                          <label className="custom-control-label" htmlFor="feedback8-5">
                            50
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback8-6"
                          />
                          <label className="custom-control-label" htmlFor="feedback8-6">
                            60
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback8-7"
                          />
                          <label className="custom-control-label" htmlFor="feedback8-7">
                            70
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback8-8"
                          />
                          <label className="custom-control-label" htmlFor="feedback8-8">
                            80
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback8-9"
                          />
                          <label className="custom-control-label" htmlFor="feedback8-9">
                            90
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback8-10"
                          />
                          <label className="custom-control-label" htmlFor="feedback8-10">
                            100
                          </label>
                        </div>
                      </li>
                    </ul>
              </Col>
            </Row>
            {/* line 8 end */}

            {/* line 9 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
              Innovativeness
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="cus-feedback"
                            id="feedback9-0"
                          />
                          <label className="custom-control-label" htmlFor="feedback9-0">
                            0
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback9-1"
                          />
                          <label className="custom-control-label" htmlFor="feedback9-1">
                            10
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback9-2"
                          />
                          <label className="custom-control-label" htmlFor="feedback9-2">
                            20
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback9-3"
                          />
                          <label className="custom-control-label" htmlFor="feedback9-3">
                            30
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback9-4"
                          />
                          <label className="custom-control-label" htmlFor="feedback9-4">
                            40
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback9-5"
                          />
                          <label className="custom-control-label" htmlFor="feedback9-5">
                            50
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback9-6"
                          />
                          <label className="custom-control-label" htmlFor="feedback9-6">
                            60
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback9-7"
                          />
                          <label className="custom-control-label" htmlFor="feedback9-7">
                            70
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback9-8"
                          />
                          <label className="custom-control-label" htmlFor="feedback9-8">
                            80
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback9-9"
                          />
                          <label className="custom-control-label" htmlFor="feedback9-9">
                            90
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback9-10"
                          />
                          <label className="custom-control-label" htmlFor="feedback9-10">
                            100
                          </label>
                        </div>
                      </li>
                    </ul>
              </Col>
            </Row>
            {/* line 9 end */}

            {/* line 10 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
              After sales services
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            name="cus-feedback"
                            id="feedback10-0"
                          />
                          <label className="custom-control-label" htmlFor="feedback10-0">
                            0
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback10-1"
                          />
                          <label className="custom-control-label" htmlFor="feedback10-1">
                            10
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback10-2"
                          />
                          <label className="custom-control-label" htmlFor="feedback10-2">
                            20
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback10-3"
                          />
                          <label className="custom-control-label" htmlFor="feedback10-3">
                            30
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback10-4"
                          />
                          <label className="custom-control-label" htmlFor="feedback10-4">
                            40
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback10-5"
                          />
                          <label className="custom-control-label" htmlFor="feedback10-5">
                            50
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback10-6"
                          />
                          <label className="custom-control-label" htmlFor="feedback10-6">
                            60
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback10-7"
                          />
                          <label className="custom-control-label" htmlFor="feedback10-7">
                            70
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback10-8"
                          />
                          <label className="custom-control-label" htmlFor="feedback10-8">
                            80
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback10-9"
                          />
                          <label className="custom-control-label" htmlFor="feedback10-9">
                            90
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input form-control"
                            defaultChecked
                            name="cus-feedback"
                            id="feedback10-10"
                          />
                          <label className="custom-control-label" htmlFor="feedback10-10">
                            100
                          </label>
                        </div>
                      </li>
                    </ul>
              </Col>
            </Row>
            {/* line 10 end */}
        <Block size="lg">
            <Row className="ml-5">
              <Col   sm="12 mt-4">
                <div className="">
                  <div className="g-3 align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck7" />
                        <label className="custom-control-label" htmlFor="customCheck7">
                        Agrees to team and conditions of Flexport (PVT) LTD.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {/* selections */}
            </Block>
          <div>
            <Link to="#">
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
