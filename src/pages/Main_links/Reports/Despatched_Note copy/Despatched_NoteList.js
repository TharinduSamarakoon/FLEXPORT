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
      <Head title="DESPATCH NOTE" />
      <Content>
      <BlockHeadContent>
              <BlockTitle page>DESPATCH NOTE</BlockTitle>
              <BlockDes className="text-soft">
              </BlockDes>
            </BlockHeadContent>
        <Block size="lg w-70">
          <BlockHead>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title-lg text-light text-center">
              {" "}
              Despatch Note{" "}
            </OverlineTitle>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  To (Name)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  No.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input number" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Address
                  </Label>
                  <div className="form-control-wrap">
                    <textarea className="form-control" type="text" id="default-0" placeholder="Input address" />
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
              <span className="ml-2">Please acknowledge receipt of the following items sent through bearer</span>
            </Row>
            <hr className="preview-hr"></hr>
            <Row className="gy-4">
            <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Job No.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input job" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Description
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input description" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Quantity(Ordered)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input quantity(ordered)" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Quantity(Sent)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input quantity(sent)" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Quantity(Accepted)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input quantity(accepted)" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Remarks
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                <Button color="light" outline className="btn-white mt-5 float-right" onClick={() => setModal({ add: true })}>
                <span>Add</span>
                </Button>
                </FormGroup>
              </Col>
            </Row>
            <div className="table-responsive mt-5">
            <table className="table table-striped">
            <thead>
                        <tr>
                          <th className="col-sm-2 text-center">Job No.</th>
                          <th className="col-sm-4 text-center">Description</th>
                          <th className="col-sm-6 text-center">Quantity
                          <th className="col-sm-2">Ordered</th>
                          <th className="col-sm-2">Sent</th>
                          <th className="col-sm-2">Accepted</th>
                          </th>
                          <th className="col-sm-2">Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td></td>
                          <td></td>
                          <td>
                          <td></td>
                          <td></td>
                          <td></td>
                          </td>
                          <td></td>
                        </tr>
                      </tbody>
              </table>
          </div>
          <br />
          <hr />
          <Row className="gy-4">
          <Col sm="4" className="border-right border-bottom">
          <Row className="gy-4">
          <Col sm="6">
          <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Prepared by{" "}
            </OverlineTitle>
          <FormGroup className="mt-3">
                  <Label htmlFor="default-0" className="form-label">
                  Name
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
          </Col>
          <Col sm="6">
          <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Dispatching Officer{" "}
            </OverlineTitle>
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
          <Col sm="4" className="border-right border-bottom">
          <Row className="gy-4">
          <Col sm="6">
            <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
               Payments{" "}
            </OverlineTitle>
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
                  <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Paid in Full
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
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck17">
                        On Delivery
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
                        Payment Later
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
                        NOT Received
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
              PAYMENT COLLECTED BY{" "}
            </OverlineTitle>
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
          <Col sm="4" className="border-bottom">
          <Row className="gy-4">
          <Col sm="6">
          <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Goods Handed over by{" "}
            </OverlineTitle>
          <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Name
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
          </Col>
          <Col sm="6">
          <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Goods Received by{" "}
            </OverlineTitle>
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Name
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
                <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Designation
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input designation" />
                  </div>
                </FormGroup>
          </Col>
            </Row>
          </Col>
          </Row>
          <div className="mb-5">
            <Link to="/despatched_note-details">
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
