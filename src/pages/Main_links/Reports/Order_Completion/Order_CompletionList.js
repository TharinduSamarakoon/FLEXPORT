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
      <Head title="ORDER COMPLETION FORM" />
      <Content>
      <BlockHeadContent>
              <BlockTitle page>ORDER COMPLETION FORM</BlockTitle>
              <BlockDes className="text-soft">
              </BlockDes>
            </BlockHeadContent>
        <Block size="lg w-70">
          <BlockHead>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title-lg text-light text-center">
              {" "}
              Order Completion form{" "}
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
                  Name (Quantity)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Production Cost
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input production cost" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Sub -Contract Cost
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input sub-contract cost" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Adv. (Job Value)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input advance" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Balance (Job Value)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input balance" />
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
                          <th className="col-sm-3">Name</th>
                          <th className="col-sm-3">Signature</th>
                          </th>
                          <th className="col-sm-2">Production Cost</th>
                          <th className="col-sm-2">Production Cost</th>
                          <th className="col-sm-6 text-center">Job Value
                          <th className="col-sm-3">Adv.</th>
                          <th className="col-sm-3">Balance</th>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td></td>
                          <td></td>
                          <td>
                          <td></td>
                          <td></td>
                          </td>
                          <td></td>
                          <td></td>
                          <td>
                          <td></td>
                          <td></td>
                          </td>
                        </tr>
                      </tbody>
              </table>
          </div>
          <br />
          <hr />
          <Row className="gy-4">
          <Col sm="3" className="border-right border-bottom">
          <Row className="gy-4">
          <Col sm="12">
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
            </Row>
          </Col>
          <Col sm="3" className="border-right border-bottom">
          <Row className="gy-4">
          <Col sm="12">
          <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Production Manager {" "}
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
            </Row>
          </Col>
          <Col sm="3" className="border-right border-bottom">
          <Row className="gy-4">
          <Col sm="12">
          <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Factory Manager{" "}
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
            </Row>
          </Col>
          <Col sm="3" className="border-bottom">
          <Row className="gy-4">
          <Col sm="12">
          <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Sales Co-ordinator{" "}
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
            </Row>
          </Col>
          </Row>
          <div className="mb-5">
            <Link to="/order_completion-details">
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
