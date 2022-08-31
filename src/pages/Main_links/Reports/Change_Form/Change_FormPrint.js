import React, { useState, useEffect } from "react";
import {FormGroup, Label, Row, Col} from "reactstrap";
import { Button, Icon, Block } from "../../../../components/Component";
import Content from "../../../../layout/content/Content";
import Head from "../../../../layout/head/Head";
import LogoDark from "../../../../images/logo-dark2x.png";
import { quotationData } from "./Change_Form";

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
      {user && (
        <Content>
          <Block>
            <div className="invoice invoice-print">
              <div className="invoice-action">
              </div>
              <div className="invoice-wrap">
              <h3 className="title text-center mb-5"> CHANGE FORM</h3>
              <div className="invoice-head">
                  <div className="invoice-contact">
                  <div className="invoice-desc">
                    <ul className="list-plain">
                    <li className="invoice-date">
                        <span>Date</span>:<span>29 / 07 / 2022</span>
                      </li>
                      <li className="invoice-date">
                        <span>Job No.</span>:<span>J3436</span>
                      </li>
                    </ul>
                  </div>
                  </div>
                  <div className="invoice-desc">
                    <ul className="list-plain">
                      <li className="invoice-id">
                        <span>Delivery Date</span>:<span>29 / 07 / 2022</span>
                      </li>
                      <li className="invoice-id">
                        <span>sales Person</span>:<span>Saman</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-control-wrap">
                    <textarea className="form-control" type="text" rows="30" />
                 </div>
                 <div className="invoice-bills mt-5">
                <span className="">Approvals:</span>
                <Row className="gy-4">
              <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  ..............................................
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Chairperson
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  ..............................................
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Director
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  ..............................................
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  CEO
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="3 mt-5">
                <FormGroup className="text-center">
                <Label htmlFor="default-0" className="form-label">
                  ..............................................
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label ">
                  Accounts
                  </Label>
                </FormGroup>
              </Col>
            </Row>
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
