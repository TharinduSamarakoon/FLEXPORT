import React, { useState } from "react";
import Content from "../../../../layout/content/Content";
import Head from "../../../../layout/head/Head";
import LogoDark from "../../../../images/logo-dark.png";
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
      <Head title="PAYMENT RECEIPT" />
      <Content>
      <BlockHeadContent>
              <BlockTitle page>PAYMENT RECEIPT</BlockTitle>
              <BlockDes className="text-soft">
              </BlockDes>
            </BlockHeadContent>
        <Block size="lg w-50">
          <BlockHead>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col sm="6">
              <div className="invoice-brand">
                  <img src={LogoDark} alt="" />
                  <br />
                  <span>Ancient art & modern technology</span>
                  <br />
                  <span>127, Jambugasmulla Mawatha, Nugegoda, Sri Lanka</span>
                  <br />
                  <span>Tel / FAX : 555 555 6, 555 555 4</span>
                </div>
              </Col>
              <Col sm="6 text-right">
                <span>Receipt No: <input className="form-control-inside " type="text"  placeholder="Input number"/></span>
                <br />
                <span>Date: <input className="form-control-inside mt-2 w-50" type="date" /></span>
              </Col>
            </Row>
            <Label htmlFor="default-0" className="form-label mr-2">
            Received from :
            </Label>
            <input className="form-control-inside mt-2 w-70 ml-4" type="text" id="default-0" />
          <br />
          <Label htmlFor="default-0" className="form-label mr-4">
          Address :  
            </Label>
            <input className="form-control-inside mt-2 w-70 ml-5" type="text" id="default-0" />
            <br />
            <Label htmlFor="default-0" className="form-label">
            The sum of Rupees:
            </Label>
            <input className="form-control-inside mt-2 w-70 " type="text" id="default-0" />
            <hr className="preview-hr"></hr>
            <Row className="gy-4">
          <Col sm="5" className="">
          <Row className="gy-4">
          <Col sm="6">
          <FormGroup className="mt-3">
                  <Label htmlFor="default-0" className="form-label">
                  Being
                  </Label>
                  <br />
                  <br />
                  <Label htmlFor="default-0" className="form-label">
                  For
                  </Label>
          
                </FormGroup>
          </Col>
          <Col sm="6">
          <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="mt-3">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Full Payment
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
                        Manufacture
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul>
          </Col>
            </Row>
          </Col>
          <Col sm="5" className="">
          <Row className="gy-4">
          <Col sm="6">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="mt-3">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Advance Payment
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
                        Service
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul>
                  <br />
                </Col>
                <Col sm="6">
                <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="mt-3">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Balance Payment
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
                        Contract
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul>
          </Col>
          </Row>
          </Col>
          <Col sm="2" className="">
          <Row className="gy-4">
          <Col sm="6">
          <br />
          <br />
          <br />
          <br />
                  <Label htmlFor="default-0" className="form-label ml-3 mt-2">
                  Stamp
                  </Label>
          </Col>
            </Row>
          </Col>
          </Row>

    {/*. second line */}

          <Row className="gy-4">
          <Col sm="4" className="">
          <Row className="gy-4">
          <Col sm="12">
          <FormGroup className="mt-3">
                  <Label htmlFor="default-0" className="form-label">
                  Job No
                  </Label>  
                  <input className="form-control-inside" type="text" id="default-0" /> 
                </FormGroup>
          </Col>
            </Row>
          </Col>
          <Col sm="4" className="">
          <Row className="gy-4">
          <Col sm="12">
          <FormGroup className="mt-3">
                  <Label htmlFor="default-0" className="form-label">
                  Qut. No
                  </Label>  
                  <input className="form-control-inside" type="text" id="default-0" /> 
                </FormGroup>
          </Col>
            </Row>
          </Col>
          <Col sm="4" className="">
          <Row className="gy-4">
          <Col sm="12">
          <FormGroup className="mt-3">
                  <Label htmlFor="default-0" className="form-label">
                  Inv. No
                  </Label>  
                  <input className="form-control-inside" type="text" id="default-0" /> 
                </FormGroup>
          </Col>
            </Row>
          </Col>
          </Row>

          {/* third line */}

          <Row className="gy-4">
          <Col sm="5" className="">
          <Row className="gy-4">
          <Col sm="12">
          <FormGroup className="mt-3">
                  <Label htmlFor="default-0" className="form-label">
                  Value Rs
                  </Label>  
                  <input className="form-control-inside" type="text" id="default-0" /> 
                </FormGroup>
          </Col>
            </Row>
          </Col>
          <Col sm="2" className="">
          <Row className="gy-4">
          <Col sm="12">
          <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="mt-3">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Cash
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul>
          </Col>
            </Row>
          </Col>
          <Col sm="5" className="">
          <Row className="gy-4">
          <Col sm="12">
          <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="mt-3 ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label ml-1" htmlFor="customCheck16">
                        Cheque No
                        </label>
                        <input className="form-control-inside" type="text" id="default-0" /> 
                      </div>
                    </div>
                  </div>
                  </li>
                  <li className="ml-4">
                  <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label ml-1">
                  Bank Name
                  </Label>  
                  <input className="form-control-inside " type="text" id="default-0" /> 
                </FormGroup>
                  </li>
                  </ul>
          </Col>
            </Row>
          </Col>
          </Row>
          <hr />
          <div className="mb-5">
            <Link to="/payment_recipt-details">
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
