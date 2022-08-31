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
import { quotationData } from "./Rejection_Form";

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
      <Head title="JOB EVALUATION/ REJECTION"></Head>
      {user && (
        <Content className="">
          <Block className="w-120">
            <div className="invoice invoice-print">
              <div className="invoice-wrap">
<div className="invoice-brand text-center">
                  <img src={LogoDark} alt="" />
                  <h3 className="mt-2">FLEXFORT INTERNATIONAL</h3>
                  <h6>Ancient art & modern technology</h6>
                  <h3 className="mt-5"><u>Job Evaluation/ Rejection</u></h3>
                </div>

                <div className="invoice-head">
                <div className="invoice-desc mt-5">
                    <ul className="list-plain">
                       <li className="invoice-date ">
                        <span >Date</span>:<span>29 / 07 / 2022</span>
                      </li>
                    <li className="invoice-date">
                        <span>Name</span>:<span></span>
                      </li>
                      <li className="">
                        <span>Department</span>:<span></span>
                      </li>
                    </ul>
                  </div> 
                </div>

                <div className="invoice-bills">
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
                <hr />
                </div>
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

          <Row className="gy-4">
                <Col sm="12" className="border-bottom">
          <Row className="gy-4">
          <Col sm="6">
            <Col sm="3 mt-5 align-center">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Authorised by (Name)
                  </Label>
                </FormGroup>
              </Col>
              </Col>
          <Col sm="6">
            <Col sm="3 mt-5 align-center">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  ...................................................................
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label text-center">
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
          </Block>
        </Content>
      )}
    </body>
  );
};

export default QuotationPrint;
