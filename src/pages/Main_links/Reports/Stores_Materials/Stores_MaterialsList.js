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
      <Head title="STORE MATERIAL REQUISITION" />
      <Content>
      <BlockHeadContent>
              <BlockTitle page>STORE MATERIAL REQUISITION</BlockTitle>
              <BlockDes className="text-soft">
              </BlockDes>
            </BlockHeadContent>
        <Block size="lg ">
          <BlockHead>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title-lg text-light text-center">
              {" "}
              Store Material Requisition{" "}
            </OverlineTitle>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Serial no.
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
                  SR no. (Day)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input job" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  QTY. Order (Month)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input description" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Year
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input quantity(ordered)" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Section
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input quantity(sent)" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Job no.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Description
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Code No.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Unit of issue
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Cost Code
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Qty. issue
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                 Rs (Unit price)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  cts. (Unit price)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                 Rs (Value)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  cts. (Value)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Line No.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input remarks" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Card balan
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
                          <th className="col-sm-2 text-center">Day</th>
                          <th className="col-sm-2">SR No.</th>
                          <th className="col-sm-2 text-center">Month</th>
                          <th className="col-sm-2">SR No.</th>
                          <th className="col-sm-2 text-center">Year</th>
                          <th className="col-sm-2 text-center">Section</th>
                          <th className="col-sm-2 text-center">Job No.</th>
                          <th className="col-sm-6">Description</th>
                          <th className="col-sm-2">Code No.</th>
                          <th className="col-sm-2">Unit of Issue</th>
                          <th className="col-sm-2 text-center">Cost Code</th>
                          <th className="col-sm-2 text-center">Qty Issue</th>

                          <th className="col-sm-2 text-center">Unit Price
                          <th className="col-sm-2">CRs.</th>
                          <th className="col-sm-2">Cts.</th>
                          </th>
                          <th className="col-sm-2 text-center">Value
                          <th className="col-sm-2">Rs.</th>
                          <th className="col-sm-2">Cts.</th>
                          </th>

                          <th className="col-sm-2">Line No</th>
                          <th className="col-sm-2">Card Balan</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                          <td></td>
                          <td></td>
                          </td>
                          <td>
                          <td></td>
                          <td></td>
                          </td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
              </table>
          </div>
          <br />
          <div className="mb-5">
            <Link to="/stores_materials-details">
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
