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
import { quotationData } from "./Voucher_Innovations";
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
      <Head title="VOUCHER INNOVATIONS"></Head>
      {user && (
        <Content>
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle>
                VOUCHER INNOVATIONS <strong className="text-primary small"></strong>
                </BlockTitle>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/voucher_innovations`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/voucher_innovations`}>
                  <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
                    <Icon name="arrow-left"></Icon>
                  </Button>
                </Link>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <Block className="">
            <div className="invoice">
              <div className="invoice-action">
                <Link to={`${process.env.PUBLIC_URL}/voucher_innovations-print`} target="_blank">
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
                  <h3 className="mt-5"><u>Payment Voucher</u></h3>
                </div>

                <div className="invoice-head">
                  <div className="invoice-contact">
                    <span className="overline-title">Name (Payee)</span>
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
                        <span>Voucher No.</span>:<span>N354</span>
                      </li>
                      <li className="invoice-date">
                        <span>Date</span>:<span>29 / 07 / 2022</span>
                      </li>
                      <li className="invoice-id">
                        <span>Prepared by:</span>:<span></span>
                      </li>
                      <li className="invoice-id">
                        <span>Checked by:</span>:<span></span>
                      </li>
                      <li className="invoice-id">
                        <span>Approved by:</span>:<span></span>
                      </li>
                    </ul>
                  </div> 
                </div>
                <div className="invoice-bills">
                  <div className="table-responsive mt-5">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className="col-sm-2 text-center">Payee Code</th>
                          <th className="col-sm-2 text-center">Dept. Code</th>
                          <th className="col-sm-2 text-center">Acc. Code</th>
                          <th className="col-sm-4">Particulars</th>
                          <th className="col-sm-4">Amount</th>
                          <th className="col-sm-2">Cts.</th>
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
                <hr />
                <p>Received Rupees <span></span> from FLEXPORT INNOVATIONS (PVT) LTD, On this day of <span></span> 20<span></span> Paid by <span></span> Cash / Cheque No.: <span></span> Bank <span></span> 
                <br />
                Credit Ledger No: <span></span> Date: <span></span> / <span></span> /<span></span> NIC No: <span></span> Name (with Initials) <span></span></p>
                <br />
                <br />
                <h6>Signature .........................................</h6>
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
