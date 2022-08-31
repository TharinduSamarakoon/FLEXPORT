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
import { quotationData } from "./Job_Specification";

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
      <Head title="JOB SPECIFICATION"></Head>
      {user && (
        <Content className="">
          <Block className="w-120">
            <div className="invoice invoice-print">
              <div className="invoice-wrap">
<div className="invoice-brand text-center">
                  <img src={LogoDark} alt="" />
                  <h3 className="mt-2 ">FLEXFORT INTERNATIONAL</h3>
                  <h6 className="">Ancient art & modern technology</h6>
                  <h3 className="mt-5"><u> Job Specification Form</u></h3>
                </div>

                <Row className="gy-4">
                <Col sm="7">
                  <Row className="gy-4">
                    <Col sm="6">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Job No: 
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                    <Col sm="6">
                    <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Sample
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck17" />
                        <label className="custom-control-label form-label" htmlFor="customCheck17">
                        Install
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul>
                    </Col>
                  </Row>
{/* second row first col*/}
                  <Row className="gy-4">
                    <Col sm="6">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Order Date:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                    <Col sm="6">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Job Start:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                  </Row>
{/* third row first col*/}
                <Row className="gy-4">
                    <Col sm="6">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Conformation Dat:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                    <Col sm="6">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Delivery Date:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                  </Row>
{/* forth row first col*/}
                <Row className="gy-4">
                    <Col sm="6">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Delivery To:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                    <Col sm="6">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Delivery Time
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                  </Row>
{/* fifth row first col*/}
                <Row className="gy-4">
                    <Col sm="4">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  FlexLabel:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                    <Col sm="4">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  LabelType:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                    <Col sm="4">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  LabelPos:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                  </Row> 
 {/* sixth row first col*/}
                <Row className="gy-4">
                    <Col sm="6">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Product:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                    <Col sm="6">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Quantity:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                    </Col>
                  </Row>    
{/* seventh(img) row first col*/}
                <Row className="gy-4">
                    <Col sm="12">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Image
                  </Label>
                  <div className="form-control-wrap border h-100">
                    <img src="" alt="" height="500" />
                  </div>
                </FormGroup>
                    </Col>
                  </Row> 

                  <hr className="preview-hr"></hr>
                  <br />
{/* last part first col*/}
              <Row className="gy-4">
                    <Col sm="6">
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  SWG/Thickness:
                  </Label>
                  <span className="ml-2 text-light"></span>
                  </FormGroup>
                  <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Backing:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Panatone:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Note:
                  </Label>
                  <div className="form-control-wrap">
                  <textarea className="form-control" type="text" id="default-0" placeholder="Input note" />
                  </div>
                </FormGroup>
                    </Col>
                    <Col sm="6">
                      <br />
                      <br />
                    <FormGroup className="mt-5">
                  <Label htmlFor="default-0" className="form-label">
                  ................................................
                  </Label>
                  <br />
                  <Label htmlFor="default-0" className="form-label">
                  Signature:
                  </Label>
                  </FormGroup>
                    <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Sales Manager:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Sales Person:
                  </Label>
                  <span className="ml-2 text-light"></span>
                </FormGroup>
                  </Col>
                  </Row>                        
                </Col>


         {/* second col*/}           
            <Col sm="5">
            <OverlineTitle tag="span" className="preview-title-lg text-light text-center">
              {" "}
             Details from Head Office to factory {" "}
            </OverlineTitle>
            <Row className="gy-4">
              <Col sm="6">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        JS
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        ColPrint
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Samp
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Neg/Pos
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Tracing
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Mockup
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Art Work
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Ni-Print
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Actual A\W
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Pattern
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Copper
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        CD
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Aluminium
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        InstantPrint
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        ColSample
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Dome
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Mould
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        JSticker
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
            </Row>
             
            <hr className="preview-hr"></hr>
             
                   {/* second part second col*/}
            <Row className="gy-4">
              <Col sm="3">
              <OverlineTitle tag="span" className="preview-title-md text-light">
              {" "}
              Letter{" "}
            </OverlineTitle>
              </Col>
              <Col sm="3">
              <OverlineTitle tag="span" className="preview-title-md text-light">
              {" "}
              Logo{" "}
            </OverlineTitle>
              </Col>
              <Col sm="3">
              <OverlineTitle tag="span" className="preview-title-md text-light">
              {" "}
              Border{" "}
            </OverlineTitle>
              </Col>
              <Col sm="3">
              <OverlineTitle tag="span" className="preview-title-nd text-light">
              {" "}
              B.Ground{" "}
            </OverlineTitle>
              </Col>
            </Row>

            <Row className="gy-4">
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Ni-Print
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>

              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Engrave
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>

              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Relief
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Embossed
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        BoxForm
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Plate
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Cut-out
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Casting
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>

              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Beveled
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>

              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Textured
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Screen
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Pad Print
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Sticker
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Laser
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        DGS
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap ">
                <li className="">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Dome
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                          
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li className=" ml-2">
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mr-5">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
              <Col sm="3">
              <ul className="custom-control-group align-center flex-wrap ">
                <li className="">
                  <div className=" align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox mt-1">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label " htmlFor="customCheck16">
                        Instant Print
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  </ul> 
              </Col>
            </Row>
            <hr className="preview-hr"></hr>

            {/*third part second col*/}

            <Row className="gy-4">
              <Col sm="6">
              <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Material {" "}
            </OverlineTitle>
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Brass
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
              <OverlineTitle tag="span" className="preview-title-lg text-light">
              {" "}
              Finishes {" "}
            </OverlineTitle>
            <div className="g- align-center flex-wrap">
                    <div className="">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        H/Polish
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Brass
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        H/Polish
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Brass
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        H/Polish
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Brass
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        H/Polish
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        S/S
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Royal Flex
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Copper
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Lacquered
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Aluminium
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Gold Plated
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Acrylic
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Dome
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Wood
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        DGS
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        MDF
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Chrome Plate
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Sticker
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Silver Plate
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Velvet
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Copper Plate
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Glass
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Oxidize
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Granite
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Anodize
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        GI
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Power Coating
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        White Metal
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Stain
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="6">
            <div className="g- align-center flex-wrap pb-">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Fibre
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col sm="4">
            <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox ">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
                        <label className="custom-control-label form-label" htmlFor="customCheck16">
                        Paint Colour
                        </label>
                      </div>
                    </div>
                  </div>
              </Col>
            </Row>
 
            <hr className="preview-hr"></hr>

{/*third part second col*/}

<Row className="gy-4">
  <Col sm="6">
  <OverlineTitle tag="span" className="preview-title-lg text-light">
  {" "}
  Accessories {" "}
</OverlineTitle>
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Curtain
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
  <OverlineTitle tag="span" className="preview-title-lg text-light">
  {" "}
  Packing {" "}
</OverlineTitle>
<div className="g- align-center flex-wrap">
        <div className="">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Display Box
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Ribbon
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Velvet Box
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Stand
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            CardBoard
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Key Hole
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Corrugated
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Bolt
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Shrink Wrap
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Frames
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Bag
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Clutch pin
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Zipper bag
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Safety Pins
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Polythene
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Crocodile Pin
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Bubble Pack
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Pendant
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Regiform
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Magnet
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Export
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Velvet
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Copper Plate
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Glass
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Oxidize
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Granite
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Anodize
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            GI
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Power Coating
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            White Metal
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Stain
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="6">
<div className="g- align-center flex-wrap pb-">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Fibre
            </label>
          </div>
        </div>
      </div>
  </Col>
  <Col sm="4">
<div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Paint Colour
            </label>
          </div>
        </div>
      </div>
  </Col>
</Row>

<hr className="preview-hr"></hr>
<OverlineTitle tag="span" className="preview-title-lg text-light">
  {" "}
  Installation {" "}
</OverlineTitle>
{/* last part second col*/} 
    <Row className="gy-4">
      <Col sm="4">
      <div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Screws
            </label>
          </div>
        </div>
      </div>
      </Col>
      <Col sm="4">
      <div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Roll Plugs
            </label>
          </div>
        </div>
      </div>
      </Col>
      <Col sm="4">
      <div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Gum
            </label>
          </div>
        </div>
      </div>
      </Col>
      <Col sm="4">
      <div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Chains
            </label>
          </div>
        </div>
      </div>
      </Col>
      <Col sm="4">
      <div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Scaffolding
            </label>
          </div>
        </div>
      </div>
      </Col>
      <Col sm="4">
      <div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Caps
            </label>
          </div>
        </div>
      </div>
      </Col>
      <Col sm="4">
      <div className="g- align-center flex-wrap">
        <div className="g">
          <div className="custom-control custom-control-sm custom-checkbox ">
            <input type="checkbox" className="custom-control-input form-control" id="customCheck16" />
            <label className="custom-control-label form-label" htmlFor="customCheck16">
            Ladder
            </label>
          </div>
        </div>
      </div>
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
