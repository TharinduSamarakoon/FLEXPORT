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
      <Head title="JOB EVALUATION/ REJECTION" />
      <Content>
      <BlockHeadContent>
              <BlockTitle page>JOB EVALUATION/ REJECTION</BlockTitle>
              <BlockDes className="text-soft">
              </BlockDes>
            </BlockHeadContent>
        <Block size="lg w-70">
          <BlockHead>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title-lg text-light text-center">
              {" "}
             JOB EVALUATION/ REJECTION{" "}
            </OverlineTitle>
            <Row className="gy-4">
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
                  Name
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Department
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input number" />
                  </div>
                </FormGroup>
              </Col>
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
                  Quantity
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input quantity" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Labour Cost
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input labour cost" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Material Cost
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input material cost" />
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
                          <th className="col-sm-4 text-center">Qty</th>
                          <th className="col-sm-4">Labour Cost</th>
                          <th className="col-sm-4">Material Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
              </table>
          </div>
          <br />
          <hr />


          
          <Row className="gy-4">
          <Col sm="2" className="">
          <Row className="gy-4">
          <Col sm="12">
          <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Spellings
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Tool
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
                        Artwork
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
                        Design
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
                        JS delay
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
          <Col sm="12">
          <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Engraving
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Fixing/Pasting
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
                        Dome
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
                        Fabricating
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
                        Finishing
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
          <Col sm="12">
          <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Colour filling
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Cutting
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
                        Carpentry
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
                        Polishing
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
                        Painting
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
          <Col sm="12">
          <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Plating
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Soldering
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
                        Transport
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
                        Installation
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
                        Raw materials
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
          <Col sm="12">
          <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Postponing
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Sub contract fault
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
                        Customer
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
                        Emp. on leave
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
                        Urgent/critical/rush
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
          <Col sm="12">
          <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="align-center flex-wrap">
                    <div className="">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Not answering the phone
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="align-center flex-wrap">
                    <div className="">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label mr-5" htmlFor="customCheck16">
                        Personal error
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
                        Careless mistakes
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
                        Forgetfulness
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
                        Other
                        </label>
                       
                      </div>
                      <textarea className="form-control" type="text" id="default-0" placeholder="Input other reason" />
                    </div>
                  </div>
                  </li>
                  </ul>
          </Col>
            </Row>
          </Col>
          </Row>
          <hr className="preview-hr"></hr>
          <Row className="gy-4">
            <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Authorised by (Name)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name"/>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          <div className="mb-5">
            <Link to="/rejection_form-details">
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
