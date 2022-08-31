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
import { quotationData } from "./Stores_Materials";
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
      <Head title="STORE MATERIAL REQUISITION"></Head>
      {user && (
        <Content>
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle>
                STORE MATERIAL REQUISITION <strong className="text-primary small"></strong>
                </BlockTitle>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/stores_materials`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/stores_materials`}>
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
                <Link to={`${process.env.PUBLIC_URL}/stores_materials-print`} target="_blank">
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
                  <h3 className="mt-5"><u>Store Material Requisition</u></h3>
                </div>

                <div className="invoice-head float-right">
                  <div className="invoice-desc">
                    <ul className="list-plain">
                    <li className="invoice-date">
                        <span>Serial No</span>:<span>N354</span>
                      </li>
                    </ul>
                  </div> 
                </div>
                <div className="invoice-bills">
                  <div className="table-responsive mt-5">
                    <table className="table table-striped">
                      <thead>
                      <tr>
                          <th className="col-sm-2 text-center">Day</th>
                          <th className="col-sm-2">SR No.</th>
                          <th className="col-sm-2 text-center">Month</th>
                          <th className="col-sm-2">SR No.</th>
                          <th className="col-sm-2 text-center">Year</th>
                          <th className="col-sm-2 text-center">Section</th>
                          <th className="col-sm-2 text-center">Job No.</th>
                          <th className="col-sm-6">Description</th>
                          <th className="col-sm-2">Code No.</th>
                          <th className="col-sm-2">Unit of Issue</th>
                          <th className="col-sm-2 text-center">Cost Code</th>
                          <th className="col-sm-2 text-center">Qty Issue</th>

                          <th className="col-sm-2 text-center">Unit Price
                          <th className="col-sm-2">CRs.</th>
                          <th className="col-sm-2">Cts.</th>
                          </th>
                          <th className="col-sm-2 text-center">Value
                          <th className="col-sm-2">Rs.</th>
                          <th className="col-sm-2">Cts.</th>
                          </th>

                          <th className="col-sm-2">Line No</th>
                          <th className="col-sm-2">Card Balan</th>
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
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                          <td></td>
                          <td></td>
                          </td>
                          <td>
                          <td></td>
                          <td></td>
                          </td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                <Row className="gy-4 border">
                <Col sm="4" className="border-right">
          <Row className="gy-4">
          <Col sm="12">
          <p className="text-light text-center">
              <strong>
              AUTHORISED
              <br />
          BY FM/Prod’ M/Super
              </strong> 
            </p>
              </Col>
            </Row>
          </Col>
          <Col sm="4" className="border-right ">
          <Row className="gy-4">
          <Col sm="6 border-right">
            <p className="text-light">
              <strong>
              NAME
              </strong> 
            </p>
            <p className="text-light mt-5">
              <strong>
                <br />
                <br />
              RECEIVED
              </strong> 
            </p>
            </Col>
            <Col sm="6">
            <p className="text-light">
              <strong>
              ISSUED/POSTED
              </strong> 
              </p>
              <p className="text-light mt-5">
              <strong>
                <br />
                <br />
              SK
              </strong> 
            </p>
            </Col>
          </Row>
          </Col>
          <Col sm="4" className="border-right border-bottom">
          <Row className="gy-4">
          <Col sm="6 border-right">
          <p className="text-light">
              <strong>
              DATA/SC
              </strong> 
            </p>
            <p className="text-light mt-5">
              <strong>
                <br />
                <br />
              SIGN
              </strong> 
            </p>
            </Col>
            <Col sm="6">
            <p className="text-light mt-5">
              <strong>
                <br />
                <br />

              <br />
              ACCOUNTS
              </strong> 
            </p>
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
