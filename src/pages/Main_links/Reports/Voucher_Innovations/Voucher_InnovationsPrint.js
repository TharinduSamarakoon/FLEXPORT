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
import { quotationData } from "./Voucher_Innovations";

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
      <Head title="VOUCHER INNOVATIONS"></Head>
      {user && (
        <Content className="">
          <Block className="w-120">
            <div className="invoice invoice-print">
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
                    <li className="invoice-date">
                        <span>Voucher No</span>:<span>N354</span>
                      </li>
                      <li className="invoice-id">
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
                  <div className="table-responsive">
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
            </div>
          </Block>
        </Content>
      )}
    </body>
  );
};

export default QuotationPrint;
