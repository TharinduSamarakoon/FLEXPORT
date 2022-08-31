import React, { useState, useEffect } from "react";
import { Button, Icon, Block } from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LogoDark from "../../../images/logo-dark2x.png";
import { quotationData } from "./Quotation";

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
      <Head title="QUOTATION PRINT"></Head>
      {user && (
        <Content>
          <Block>
            <div className="invoice invoice-print">
              <div className="invoice-action">
                <Button
                  size="lg"
                  color="primary"
                  outline
                  className="btn-icon btn-white btn-dim"
                  onClick={() => window.print()}
                >
                  <Icon name="printer-fill"></Icon>
                </Button>
              </div>
              <div className="invoice-wrap">
                <div className="invoice-brand text-center">
                  <img src={LogoDark} alt="" />
                </div>

                <div className="invoice-head">
                  <div className="invoice-contact">
                    <span className="overline-title">Quotation To</span>
                    <div className="invoice-contact-info">
                      <h4 className="title">{user.name}</h4>
                      <ul className="list-plain">
                        <li>
                          <Icon name="map-pin-fill"></Icon>
                          <span>
                          {user.address}
                          </span>
                        </li>
                        <li>
                          <Icon name="call-fill"></Icon>
                          <span>{user.phone}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="invoice-desc">
                    <h3 className="title">Quotation</h3>
                    <ul className="list-plain">
                    <li className="invoice-date">
                        <span>Date</span>:<span>{user.date.split(",")[0]}</span>
                      </li>
                      <li className="invoice-id">
                        <span>Quotation ID</span>:<span>{user.orderId}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="invoice-bills">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                        <th className="col-sm-2">Quantity</th>
                          <th className="col-sm-6">Description</th>
                          <th className="col-sm-2">Unit Price</th>
                          <th className="col-sm-2">Line Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>{user.invoiceItem1}</td>
                          <td></td>
                          <td>{user.invoiceItem1}</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="2"></td>
                          <td colSpan="2">Total</td>
                          <td>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2"></td>
                          <td colSpan="2">Advance Paid</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td colSpan="2"></td>
                          <td colSpan="2">Balance</td>
                          <td></td>
                        </tr>
                      </tfoot>
                    </table>
                    <br />
                    <br />
                    <div className="nk-notes ff-italic fs-15px text-soft">
                    This is a quotation on the goods named, subject to the conditions noted below:
                    <br />
                    60% advance payment along with the purchase order to commence work and
                    balance on delivery of goods
                    <br />
                    Quotation validity - 30 days
                    <br />
                    To accept this quotation, sign here and return: __________________________
                    </div>
                    <div className="thank float-right fs-20px mt-5">
                      Thank you for your business!
                    </div>
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
