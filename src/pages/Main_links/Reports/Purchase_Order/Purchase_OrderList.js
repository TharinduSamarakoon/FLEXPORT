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
      <Head title="PURCHASE ORDER" />
      <Content>
      <BlockHeadContent>
              <BlockTitle page>PURCHASE ORDER</BlockTitle>
              <BlockDes className="text-soft">
              </BlockDes>
            </BlockHeadContent>
        <Block size="lg w-70">
          <BlockHead>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title-lg text-light text-center">
              {" "}
              Purchase Order{" "}
            </OverlineTitle>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Name (Supplier)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  PO No.
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
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Prepared by
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input person" />
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <hr className="preview-hr"></hr>
            <Row className="gy-4">
            <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Qty
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input quantity" />
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
                  Amount
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input amount" />
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
                <th className="col-sm-2 text-center">Qty</th>
                <th className="col-sm-6 text-center">Description</th>
                <th className="col-sm-6 text-center">Unit Price</th>
                <th className="col-sm-6">Amount</th>
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
                      <tfoot>
                        <tr>
                          <td colSpan="2"></td>
                          <td colSpan="2">Total</td>
                          <td>
                          </td>
                        </tr>
                      </tfoot>
              </table>
          </div>
          <br />
          <div className="mb-5">
            <Link to="/purchase_order-details">
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
