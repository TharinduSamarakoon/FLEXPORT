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
import { quotationData } from "./Suspence_Note";

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
      <Head title="SUSPENSE CHIT"></Head>
      {user && (
        <Content className="">
          <Block className="w-120">
            <div className="invoice invoice-print">
              <div className="invoice-wrap">
              <div className="invoice-brand text-center">
                  <img src={LogoDark} alt="" />
                  <h3 className="mt-2">FLEXFORT INTERNATIONAL</h3>
                  <h6>Ancient art & modern technology</h6>
                  <h3 className="mt-5"><u>Suppense Chit</u></h3>
                  <h4 className="mt-5">Money Required for Purchasing / Payment</h4>
                  <h6 className="text-danger float-left">To be settled within 2 days</h6>
                </div>

                <div className="invoice-head">
                  <div className="invoice-desc">
                    <ul className="list-plain">
                      <li className="invoice-id">
                        <span>Issued to.</span>:<span></span>
                      </li>
                      <li className="invoice-id">
                        <span>Through</span>:<span></span>
                      </li>
                      <li className="invoice-id">
                        <span>Amount issued Rs.</span>:<span></span>
                      </li>
                    </ul>
                  </div> 
                  <div className="invoice-desc">
                    <ul className="list-plain">
                    <li className="invoice-id">
                        <span>Suspense No.</span>:<span>N354</span>
                      </li>
                      <li className="invoice-id">
                        <span>Date</span>:<span>29 / 07 / 2022</span>
                      </li>
                    </ul>
                  </div> 
                </div>

                <textarea className="form-control" rows="10" type="text" id="default-0" />

                <br />
                <br />

                <Row className="gy-4">
          <Col sm="" className="border ml-3 ">
          <Row className="gy-4">
          <Col sm="12">
          <OverlineTitle tag="span" className="preview-title-lg text-light text-center">
              {" "}
              SUSPENSE SETTLEMENT{" "}
            </OverlineTitle>
          <FormGroup className="mt-3">
                  <Label htmlFor="default-0" className="form-label">
                  Checksdfed by Acct : 
                  </Label>
                  <span className="ml-3"></span>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Settled on :
                  </Label>
                  <span className="ml-3"></span>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Accountant
                  </Label>
                  <span className="ml-3"></span>
                </FormGroup>
          </Col>
          <Col sm="12">
          <Label  tag="h6" className="form-label">
                  Sattled suspense amount with
                  </Label>
          <FormGroup className="">
          
                  <Label htmlFor="default-0" className="form-label mt-1">
                  Bill / Voucher Rs. :
                  </Label>
                  <span className="ml-3"></span>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  ans Cash of Rs. :
                  </Label>
                  <span className="ml-3"></span>
                </FormGroup>
          </Col>
            </Row>
          </Col>
          <Col sm="6" className="">
          <Row className="gy-4">
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Cheque in favour of
                  </Label>
                  <span className="ml-3"></span>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Cash Rs. :
                  </Label>
                  <span className="ml-3"></span>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Approved by MD:
                  </Label>
                  <span className="ml-3"></span>
                </FormGroup>
          </Col>
          <Col sm="12">
          <FormGroup className="">
                  <Label htmlFor="default-0" className="form-label">
                  Approved by director
                  </Label>
                  <span className="ml-3"></span>
                </FormGroup>
          </Col>
          <Col sm="12">
          <Label htmlFor="default-0" className="form-label">
                  Received Payment
                  </Label>
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
                </Col>
                <Row>
                  
                </Row>
          <Col sm="6">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
            
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Name
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label mt-1">
                  .........................................................................
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label">
                  Signature
                  </Label>
                </FormGroup>
              </Col>
          </Row>
          </Col>
          </Row>
              </div>
            </div>
          </Block>
        </Content>
      )}
    </body>
  );
};

export default QuotationPrint;
