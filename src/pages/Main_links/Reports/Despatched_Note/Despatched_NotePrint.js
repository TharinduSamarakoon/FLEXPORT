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
import LogoDark from "../../../../images/logo-dark2x.png";
import { quotationData } from "./Despatched_Note";

const QuotationPrint = ({ match }) => {
  const [data] = useState(quotationData);
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(() => window.print(), 500);
  }, []);

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
    <body className="bg-white">
      <Head title="DESPATCH NOTE"></Head>
      {user && (
        <Content className="">
          <Block className="w-120">
            <div className="invoice invoice-print">
              <div className="invoice-wrap">
<div className="invoice-brand text-center">
                  <img src={LogoDark} alt="" />
                  <h3 className="mt-2">FLEXFORT INTERNATIONAL</h3>
                  <h6>Ancient art & modern technology</h6>
                  <span>127, Jambugasmulla Mawatha, Nugegoda, Sri Lanka</span>
                  <br />
                  <span>Tel: 94 11 555 555 6, 5552718, 555 2721-22, 2856077,2-81 82 83</span>
                  <br />
                  <span>Fax: 555 555 4 </span>
                  <br />
                  <span>www.flexport.biz</span>
                  <h3 className="mt-5"><u>Despatch Note</u></h3>
                </div>

                <div className="invoice-head">
                  <div className="invoice-contact">
                    <span className="overline-title">To (Name)</span>
                    <div className="invoice-contact-info">
                      <h4 className="title">{user.name}</h4>
                      <ul className="list-plain">
                        <li>
                          <Icon name="map-pin-fill"></Icon>
                          <span>
                            {user.address}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="invoice-desc">
                    <ul className="list-plain">
                    <li className="invoice-date">
                        <span>No</span>:<span>N354</span>
                      </li>
                      <li className="invoice-id">
                        <span>Date</span>:<span>29 / 07 / 2022</span>
                      </li>
                    </ul>
                  </div> 
                </div>
                <span className="">Please acknowledge receipt of the following items sent through bearer</span>
                <div className="invoice-bills">
                  <div className="table-responsive">
                    <table className="table table-striped">
                    <thead>
                        <tr>
                          <th className="col-sm-2 text-center">Job No.</th>
                          <th className="col-sm-4 text-center">Description</th>
                          <th className="col-sm-6 text-center">Quantity
                          <th className="col-sm-2 text-center">Ordered</th>
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
                    <hr />
                    <Row className="gy-4">
                    <Col sm="4" className="border-right border-bottom">
          <Row className="gy-4">
          <Col sm="6">
          <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Prepared by{" "}
            </OverlineTitle>
            <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Name
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="3 mt-5">
                <FormGroup className="">
                <h6 htmlFor="default-0" className="form-label">
                  .........................................
                  </h6>
                  <br />
                  <h6 htmlFor="default-0" className="form-label">
                  Signature
                  </h6>
                </FormGroup>
              </Col>
              </Col>
          <Col sm="6">
          <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Dispatching Officer{" "}
            </OverlineTitle>
            <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Name
                  </Label>
                </FormGroup>
              </Col>
            <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  .......................................
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Signature
                  </Label>
                </FormGroup>
              </Col>
          </Col>
            </Row>
          </Col>
          <Col sm="4" className="border-right border-bottom">
          <Row className="gy-4">
          <Col sm="7">
            <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
               Payments{" "}
            </OverlineTitle>
              <ul className="custom-control-group g-1 align-center flex-wrap ">
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
                  <div className="g align-center flex-wrap">
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
                  <ul className="custom-control-group g-2 align-center flex-wrap">
                <li>
                  <div className="g-3 align-center flex-wrap">
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
                <Col sm="5">
                <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              PAYMENT COLLECTED BY{" "}
            </OverlineTitle>
            <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  ...............................
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Signature
                  </Label>
                </FormGroup>
              </Col>
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
            <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
      
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Name
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  .........................................
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Signature
                  </Label>
                </FormGroup>
              </Col>
          </Col>
          <Col sm="6">
          <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Goods Received by{" "}
            </OverlineTitle>
            <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Name
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Designation
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  .........................................
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Signature
                  </Label>
                </FormGroup>
              </Col>
          </Col>
            </Row>
          </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Block>
        </Content>
      )}
    </body>
  );
};

export default QuotationPrint;
