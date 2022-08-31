import React, { useState, useEffect } from "react";
import { FormGroup, Label, Row, Col, Button} from "reactstrap";
import {
  BlockHead,
  BlockTitle,
  Icon,
  BlockDes,
  BlockHeadContent,
  OverlineTitle,
  Block,
  BlockBetween,
} from "../../../../components/Component";
import Content from "../../../../layout/content/Content";
import Head from "../../../../layout/head/Head";
import LogoDark from "../../../../images/logo-dark.png";
import { quotationData } from "./Payment_Receipt";
import { Link } from "react-router-dom";

const InvoiceDetails = ({ match }) => {
  const [data] = useState(quotationData);
  const [user, setUser] = useState();

  useEffect(() => {
    const id = match.params.id;
    if (id !== undefined || null || "") {
      let spUser = data.find((item) => item.id === Number(id));
      setUser(spUser);
    } else {
      setUser(data[0]);
    }
  }, [match.params.id, data]);

  return (
    <React.Fragment>
      <Head title="PAYMENT RECEIPT"></Head>
      {user && (
        <Content>
          <BlockHead >
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle>
                PAYMENT RECEIPT <strong className="text-primary small"></strong>
                </BlockTitle>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/payment_recipt`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/payment_recipt`}>
                  <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
                    <Icon name="arrow-left"></Icon>
                  </Button>
                </Link>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <Block className="w-50">
            <div className="invoice">
              <div className="invoice-action">
                <Link to={`${process.env.PUBLIC_URL}/payment_recipt-print`} target="_blank">
                  <Button size="lg" color="primary" outline className="btn-icon btn-white btn-dim ml-5">
                    <Icon name="printer-fill" className=""></Icon>
                  </Button>
                </Link>
              </div>
              <div className="invoice-wrap">
                <br />
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
            <Label htmlFor="default-0" className="form-label">
            Received from :
            </Label>
            <Label htmlFor="default-0" className="form-label ml-2">
            ...............................................................................................................................................................................
            </Label>
          <br />
          <Label htmlFor="default-0" className="form-label ">
          Address :  
            </Label>
            <Label htmlFor="default-0" className="form-label ml-2">
            .......................................................................................................................................................................................
            </Label>
            <br />
            <Label htmlFor="default-0" className="form-label">
            The sum of Rupees:
            </Label>
            <Label htmlFor="default-0" className="form-label ml-2">
            ..................................................................................................................................................................
            </Label>
            <hr className="preview-hr"></hr>
                <div className="invoice-bills">
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
                  Job No:
                  </Label>  
                  <Label htmlFor="default-0" className="form-label ml-2">
                  ...............................................
                  </Label>   
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
                  <Label htmlFor="default-0" className="form-label ml-2">
                  ...............................................
                  </Label>
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
                  <Label htmlFor="default-0" className="form-label ml-2">
                  ...............................................
                  </Label>
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
                  <Label htmlFor="default-0" className="form-label ml-2">
                  ...............................................
                  </Label>
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
                        <Label htmlFor="default-0" className="form-label ml-2">
                  ...............................................
                  </Label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li className="ml-4">
                  <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label ml-4">
                  Bank Name
                  </Label>  
                  <Label htmlFor="default-0" className="form-label ml-2">
                  .........................................
                  </Label>
                </FormGroup>
                  </li>
                  </ul>
          </Col>
            </Row>
          </Col>
          </Row>
                </div>                
              </div>
            </div>
          </Block>
        </Content>
      )}
    </React.Fragment>
  );
};
export default InvoiceDetails;
