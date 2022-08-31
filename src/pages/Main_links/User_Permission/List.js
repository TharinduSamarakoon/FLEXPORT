import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  PaginationComponent,
  DataTableHead,
  DataTableRow,
  DataTableItem,
  TooltipComponent,
  RSelect,
  PreviewAltCard,

} from "../../../components/Component";
import { FormGroup, Label, Input, Row, Col , Button} from "reactstrap";

const CheckboxRadio = () => {
  return (
    <React.Fragment>
       <Head title="USER PERMISSIONS" />
      <Content className="mx-auto">
      <BlockTitle tag="h3" page>
         User Permissions
       </BlockTitle>
       <BlockTitle tag="h5" page>
          User Permission Management List
        </BlockTitle>
        <Block className="mt-5">
        <Row className="gy-4">
              <Col sm="8">
                  <Label htmlFor="default-0" className="form-label">
                  Role
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input role" />
                  </div>
              </Col>
              <Col sm="4 mt-4">
              <Button color="light" outline className="btn-white  mt-1" onClick={() => setModal({ add: true })}>
          <span>Assign</span>
          </Button>
              </Col>
            </Row>
        {/* line 2 start */}
            <Row className="ml-5 mt-5">
            <Col lg="5 mt-5">
                <p className="text-light">
                User management
                </p>
              </Col>
              
              <Col lg="7 mt-5">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck5" />
                        <label className="custom-control-label form-label" htmlFor="customCheck5">
                         CREATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck6" />
                        <label className="custom-control-label form-label" htmlFor="customCheck6">
                         READ
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck7" />
                        <label className="custom-control-label form-label" htmlFor="customCheck7">
                         UPDATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck8" />
                        <label className="custom-control-label form-label" htmlFor="customCheck8">
                         DALETE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                    </ul>
              </Col>
            </Row>
            {/* line 2 end */}

            {/* line 3 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Permission Management
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck9" />
                        <label className="custom-control-label form-label" htmlFor="customCheck9">
                         CREATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck10" />
                        <label className="custom-control-label form-label" htmlFor="customCheck10">
                         READ
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck11" />
                        <label className="custom-control-label form-label" htmlFor="customCheck11">
                         UPDATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck12" />
                        <label className="custom-control-label form-label" htmlFor="customCheck12">
                         DALETE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                    </ul>
              </Col>
            </Row>
            {/* line 3 end */}

            {/* line 4 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Role management
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck17" />
                        <label className="custom-control-label form-label" htmlFor="customCheck17">
                         CREATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck18" />
                        <label className="custom-control-label form-label" htmlFor="customCheck18">
                         READ
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck19" />
                        <label className="custom-control-label form-label" htmlFor="customCheck19">
                         UPDATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck20" />
                        <label className="custom-control-label form-label" htmlFor="customCheck20">
                         DALETE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                    </ul>
              </Col>
            </Row>
            {/* line 4 end */}

            {/* line 5 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Customer mangement
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck21" />
                        <label className="custom-control-label form-label" htmlFor="customCheck21">
                         CREATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck22" />
                        <label className="custom-control-label form-label" htmlFor="customCheck22">
                         READ
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck23" />
                        <label className="custom-control-label form-label" htmlFor="customCheck23">
                         UPDATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck24" />
                        <label className="custom-control-label form-label" htmlFor="customCheck24">
                         DALETE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                    </ul>
              </Col>
            </Row>
            {/* line 5 end */}

            {/* line 6 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Material management
                </p>
              </Col>
              <Col lg="7"> 
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck25" />
                        <label className="custom-control-label form-label" htmlFor="customCheck25">
                         CREATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck26" />
                        <label className="custom-control-label form-label" htmlFor="customCheck26">
                         READ
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck27" />
                        <label className="custom-control-label form-label" htmlFor="customCheck27">
                         UPDATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck28" />
                        <label className="custom-control-label form-label" htmlFor="customCheck28">
                         DALETE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                    </ul>
              </Col>
            </Row>
            {/* line 6 end */}


            {/* line 8 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Product management
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck29" />
                        <label className="custom-control-label form-label" htmlFor="customCheck29">
                         CREATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck30" />
                        <label className="custom-control-label form-label" htmlFor="customCheck30">
                         READ
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck31" />
                        <label className="custom-control-label form-label" htmlFor="customCheck31">
                         UPDATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck32" />
                        <label className="custom-control-label form-label" htmlFor="customCheck32">
                         DALETE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                    </ul>
              </Col>
            </Row>
            {/* line 8 end */}

            {/* line 9 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Sales management
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck33" />
                        <label className="custom-control-label form-label" htmlFor="customCheck33">
                         CREATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck34" />
                        <label className="custom-control-label form-label" htmlFor="customCheck34">
                         READ
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck35" />
                        <label className="custom-control-label form-label" htmlFor="customCheck35">
                         UPDATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck36" />
                        <label className="custom-control-label form-label" htmlFor="customCheck36">
                         DALETE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                    </ul>
              </Col>
            </Row>
            {/* line 9 end */}

            {/* line 10 start */}
            <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Order management
                </p>
              </Col>
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck1" />
                        <label className="custom-control-label form-label" htmlFor="customCheck1">
                         CREATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck2" />
                        <label className="custom-control-label form-label" htmlFor="customCheck2">
                         READ
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck3" />
                        <label className="custom-control-label form-label" htmlFor="customCheck3">
                         UPDATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck4" />
                        <label className="custom-control-label form-label" htmlFor="customCheck4">
                         DALETE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                    </ul>
              </Col>
            </Row>
            {/* line 10 end */}


             {/* line 7 start */}
             <Row className="ml-5 mt-2">
            <Col lg="5">
                <p className="text-light">
                Invoice & quotation
                </p>
              </Col>
              <Col lg="7">         
               <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck40" />
                        <label className="custom-control-label form-label" htmlFor="customCheck40">
                         CREATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck37" />
                        <label className="custom-control-label form-label" htmlFor="customCheck37">
                         READ
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck38" />
                        <label className="custom-control-label form-label" htmlFor="customCheck38">
                         UPDATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck39" />
                        <label className="custom-control-label form-label" htmlFor="customCheck39">
                         DALETE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                    </ul>
              </Col>
            </Row>
            {/* line 7 end */}


            {/* line 11 start */}
            <Row className="ml-5">
            <Col lg="5">
                <p className="text-light">
                Customer Feedback
                </p>
              </Col>
              
              <Col lg="7">
              <ul className="custom-control-group g-3 align-center flex-wrap">
                <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck41" />
                        <label className="custom-control-label form-label" htmlFor="customCheck5">
                         CREATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck42" />
                        <label className="custom-control-label form-label" htmlFor="customCheck42">
                         READ
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck43" />
                        <label className="custom-control-label form-label" htmlFor="customCheck43">
                         UPDATE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                  <li>
                  <div className="g- align-center flex-wrap">
                    <div className="g ml-5">
                      <div className="custom-control custom-control-sm custom-checkbox">
                        <input type="checkbox" className="custom-control-input form-control" id="customCheck44" />
                        <label className="custom-control-label form-label" htmlFor="customCheck44">
                         DALETE
                        </label>
                      </div>
                    </div>
                  </div>
                  </li>
                    </ul>
              </Col>
            </Row>
            {/* line 11 end */}
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default CheckboxRadio;
