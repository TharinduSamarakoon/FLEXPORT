import React, { useState, useEffect } from "react";
import {FormGroup, Label, Row, Col} from "reactstrap";
import {
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  BlockDes,
  BlockHeadContent,
  Block,
  BlockBetween,
} from "../../../../components/Component";
import Content from "../../../../layout/content/Content";
import Head from "../../../../layout/head/Head";
import LogoDark from "../../../../images/logo-dark.png";
import { quotationData } from "./Change_Form";
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
      <Head title="CHANGE FORM"></Head>
      {user && (
        <Content>
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle>
                 CHANGE FORM <strong className="text-primary small">#{user.orderId}</strong>
                </BlockTitle>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/change_form`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/quotation-list`}>
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
                <Link to={`${process.env.PUBLIC_URL}/change_form-print`} target="_blank">
                  <Button size="lg" color="primary" outline className="btn-icon btn-white btn-dim">
                    <Icon name="printer-fill"></Icon>
                  </Button>
                </Link>
              </div>
              <div className="invoice-wrap">
              <h3 className="title text-center mb-5">FLEXPORT CHANGE FORM</h3>
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
    </React.Fragment>
  );
};
export default InvoiceDetails;
