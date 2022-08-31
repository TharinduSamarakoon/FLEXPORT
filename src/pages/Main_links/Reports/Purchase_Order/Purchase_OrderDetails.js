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
import { quotationData } from "./Purchase_Order";
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
      <Head title="PURCHASE ORDER"></Head>
      {user && (
        <Content>
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle>
                PURCHASE ORDER <strong className="text-primary small"></strong>
                </BlockTitle>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/purchase_order`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/purchase_order`}>
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
                <Link to={`${process.env.PUBLIC_URL}/purchase_order-print`} target="_blank">
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
                  <h3 className="mt-5"><u>Purchase Order</u></h3>
                </div>

                <div className="invoice-head">
                  <div className="invoice-contact">
                    <span className="overline-title">Name (Supplier)</span>
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
                    <li className="invoice-id">
                      <Row>
                        <Col><h6 className="">PO No. :</h6></Col>
                        <Col><h6>N354</h6></Col>
                      </Row> 
                      <br />
                      </li>
                      <li className="invoice-date">
                        <span>Date</span>:<span>29 / 07 / 2022</span>
                      </li>
                    <li className="invoice-id">
                        <span>Prepared by</span>:<span></span>
                      </li>
                    </ul>
                  </div> 
                </div>
                <div className="invoice-bills">
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
                          <td></td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr >
                          <td colSpan="2"></td>
                          <td colSpan="2">Total</td>
                          <td></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <br />
                  <br />
                <FormGroup className="mt-5">
                <h6 htmlFor="default-0" className="form-label">
                  ..............................................................
                  </h6>
                  <br />
                  <h6 htmlFor="default-0" className="form-label">
                  Authorised Signature
                  </h6>
                </FormGroup>
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
