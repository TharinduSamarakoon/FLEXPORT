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
      <Head title="VOUCHER INNOVATIONS" />
      <Content>
      <BlockHeadContent>
              <BlockTitle page>VOUCHER INNOVATIONS</BlockTitle>
              <BlockDes className="text-soft">
              </BlockDes>
            </BlockHeadContent>
        <Block size="lg w-70">
          <BlockHead>
          </BlockHead>
          <PreviewCard>
            <OverlineTitle tag="span" className="preview-title-lg text-light text-center">
              {" "}
              Voucher Innovations{" "}
            </OverlineTitle>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Name (Payee)
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
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
                  Voucher No.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input number" />
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
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Checked by
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Approved by
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input name" />
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <hr className="preview-hr"></hr>
            <Row className="gy-4">
            <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Payee Code
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input payee code" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Dept. Code
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input dept. code" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Acc. Code
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input acc. code" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Particulars
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input particulars" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Amount Rs.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input amount" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Cts.
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input cts." />
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
                          <th className="col-sm-2 text-center">Payee Code</th>
                          <th className="col-sm-2 text-center">Dept. Code</th>
                          <th className="col-sm-2 text-center">Acc. Code</th>
                          <th className="col-sm-4 text-center">Particulars</th>
                          <th className="col-sm-4 text-center">Amount</th>
                          <th className="col-sm-2">Cts</th>
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
                        </tr>
                      </tbody>
              </table>
          </div>
          <br />
          <hr />
          <br />
          <p className="text-light">Received Rupees<input className="form-control-inside w-10" type="text" />from FLEXPORT INNOVATIONS (PVT) LTD, On this day of<input className="form-control-inside w-10" type="text" />20<input className="form-control-inside w-10" type="text" /></p>
          <p className="text-light">Paid by <input className="form-control-inside w-10" type="text" />Cash / Cheque No.: <input className="form-control-inside w-10" type="text" />Bank <input className="form-control-inside w-10" type="text" /></p>
          <p className="text-light">Credit Ledger No: <input className="form-control-inside w-10" type="text" />Date: <input className="form-control-inside w-5" type="text" /> / <input className="form-control-inside w-5" type="text" /> / <input className="form-control-inside w-5" type="text" /></p>
          <p className="text-light">NIC No: <input className="form-control-inside w-10" type="text" />Name (with Initials) <input className="form-control-inside w-10" type="text" /></p>
          <div className="mb-5">
            <Link to="/voucher_innovations-details">
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
