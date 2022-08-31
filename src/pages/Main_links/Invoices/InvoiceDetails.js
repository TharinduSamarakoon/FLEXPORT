import React, { useState, useEffect } from "react";
import {
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  BlockDes,
  BlockHeadContent,
  Block,
  BlockBetween,
} from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LogoDark from "../../../images/logo-dark.png";
import { invoiceData } from "./Invoice";
import { Link } from "react-router-dom";

const InvoiceDetails = ({ match }) => {
  const [data] = useState(invoiceData);
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
      <Head title="INVOICE DETAILS"></Head>
      {user && (
        <Content>
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle>
                  Invoice <strong className="text-primary small">#{user.orderId}</strong>
                </BlockTitle>
                <BlockDes className="text-soft">
                  <ul className="list-inline">
                    <li>
                      Created At: <span className="text-base">{user.date}</span>
                    </li>
                  </ul>
                </BlockDes>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/invoices-list`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/invoice-list`}>
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
                <Link to={`${process.env.PUBLIC_URL}/invoice-print`} target="_blank">
                  <Button size="lg" color="primary" outline className="btn-icon btn-white btn-dim">
                    <Icon name="printer-fill"></Icon>
                  </Button>
                </Link>
              </div>
              <div className="invoice-wrap">
                <div className="invoice-brand text-center">
                  <img src={LogoDark} alt="" />
                </div>

                <div className="invoice-head">
                  <div className="invoice-contact">
                    <span className="overline-title">Invoice To</span>
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
                    <h3 className="title">Invoice</h3>
                    <ul className="list-plain">
                      <li className="invoice-id">
                        <span>Invoice ID</span>:<span>{user.orderId}</span>
                      </li>
                      <li className="invoice-date">
                        <span>Date</span>:<span>{user.date.split(",")[0]}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="invoice-bills">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className="w-150px">Description</th>
                          <th className="w-60">Unit Price</th>
                          <th>Qty</th>
                          <th>Amount</th>
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
                        <tr>
                          <td colSpan="2"></td>
                          <td colSpan="2">Total</td>
                          <td>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2"></td>
                          <td colSpan="2">Advance</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td colSpan="2"></td>
                          <td colSpan="2">Balance</td>
                          <td></td>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="nk-notes ff-italic fs-12px text-soft">
                      Invoice was created on a computer and is valid without the signature and seal.
                    </div>
                  </div>
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