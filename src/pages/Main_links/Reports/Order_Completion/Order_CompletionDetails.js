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
import { quotationData } from "./Order_Completion";
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
      <Head title="ORDER COMPLETION FORM"></Head>
      {user && (
        <Content>
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle>
                ORDER COMPLETION FORM <strong className="text-primary small"></strong>
                </BlockTitle>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/order_completion`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/order_completion`}>
                  <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
                    <Icon name="arrow-left"></Icon>
                  </Button>
                </Link>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <Block>
            <div className="invoice">
              <div className="invoice-action">
                <Link to={`${process.env.PUBLIC_URL}/order_completion-print`} target="_blank">
                  <Button size="lg" color="primary" outline className="btn-icon btn-white btn-dim">
                    <Icon name="printer-fill"></Icon>
                  </Button>
                </Link>
              </div>
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
                  <h3 className="mt-5"><u>Order Completion Form</u></h3>
                </div>

                <div className="invoice-head float-right">
                  <div className="invoice-desc">
                    <ul className="list-plain">
                      <li className="invoice-id">
                        <span>Date</span>:<span>29 / 07 / 2022</span>
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
                          <th className="col-sm-6 text-center">Quantity
                          <th className="col-sm-3">Name</th>
                          <th className="col-sm-3">Signature</th>
                          </th>
                          <th className="col-sm-2">Production Cost</th>
                          <th className="col-sm-2">Sub -Contract Cost</th>
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
                <hr />
                <Row className="gy-4">
                <Col sm="3" className="border-right border-bottom">
          <Row className="gy-4">
          <Col sm="12">
          <OverlineTitle tag="span" className="preview-title-lg text-light d-flex justify-content-center">
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
                  ..............................................
                  </h6>
                  <br />
                  <h6 htmlFor="default-0" className="form-label">
                  Signature
                  </h6>
                </FormGroup>
              </Col>
              </Col>
            </Row>
          </Col>
          <Col sm="3" className="border-right border-bottom">
          <Row className="gy-4">
          <Col sm="12">
          <OverlineTitle tag="span" className="preview-title-lg text-light d-flex justify-content-center">
              {" "}
              Production Manager{" "}
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
                  ..............................................
                  </h6>
                  <br />
                  <h6 htmlFor="default-0" className="form-label">
                  Signature
                  </h6>
                </FormGroup>
              </Col>
              </Col>
            </Row>
          </Col>
          <Col sm="3" className="border-right border-bottom">
          <Row className="gy-4">
          <Col sm="12">
          <OverlineTitle tag="span" className="preview-title-lg text-light d-flex justify-content-center">
              {" "}
              Factory Manager{" "}
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
                  ..............................................
                  </h6>
                  <br />
                  <h6 htmlFor="default-0" className="form-label">
                  Signature
                  </h6>
                </FormGroup>
              </Col>
              </Col>
            </Row>
          </Col>
          <Col sm="3" className="border-bottom">
          <Row className="gy-4">
          <Col sm="12">
          <OverlineTitle tag="span" className="preview-title-lg text-light d-flex justify-content-center">
              {" "}
              Sales Co-ordinator{" "}
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
                  ..............................................
                  </h6>
                  <br />
                  <h6 htmlFor="default-0" className="form-label">
                  Signature
                  </h6>
                </FormGroup>
              </Col>
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
