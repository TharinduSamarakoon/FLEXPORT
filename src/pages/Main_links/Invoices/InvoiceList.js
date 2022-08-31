import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
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
} from "../../../components/Component";
import { Link } from "react-router-dom";
import makeAnimated from "react-select/animated";

const FormElementsPage = () => {
  const [file, setFile] = useState("");
  const animatedComponents = makeAnimated();

  return (
    <React.Fragment>
      <Head title="INVOICES" />
      <Content>
      <BlockHeadContent>
              <BlockTitle page>Invoices</BlockTitle>
              <BlockDes className="text-soft">
              </BlockDes>
            </BlockHeadContent>
        <Block size="lg">
          <BlockHead>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Invoice details{" "}
            </OverlineTitle>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Company
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input company" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Invoice Number
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input invoice number" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Address
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input address" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Advance
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input advance" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Customer
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input customer" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Total
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input total" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Tel
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input tel. number" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Balance
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input balance" />
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
            <hr className="preview-hr"></hr>
            <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Products details{" "}
            </OverlineTitle>
            <Row className="gy-4">
            <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Product
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input product" />
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
                  Unit Price
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input unit price" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Description
                  </Label>
                  <div className="form-control-wrap">
                    <textarea className="form-control" type="text" id="default-0" placeholder="Input description" />
                  </div>
                  <br />
                  <div className="form-control-wrap">
                    <input className="form-control" type="file" accept="image/*" id="default-0" placeholder="Input description" />
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
                          <th className="w-150px">Product</th>
                          <th className="w-60">Description</th>
                          <th>Quantity</th>
                          <th>Unit Price</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
              </table>
          </div>
          <div>
            <Link to="/invoice-details">
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
