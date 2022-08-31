import React, { useState } from "react";
import Content from "../../../../layout/content/Content";
import Head from "../../../../layout/head/Head";
import { FormGroup, Label, Input, Row, Col, Button} from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
  OverlineTitle,
  OutlinedInput,
  Icon,
  UserAvatar,
} from "../../../../components/Component";
import { Link } from "react-router-dom";
import makeAnimated from "react-select/animated";

const FormElementsPage = () => {
  const [file, setFile] = useState("");
  const animatedComponents = makeAnimated();

  return (
    <React.Fragment>
      <Head title="CHANGE FORM" />
      <Content>
      <BlockHeadContent>
              <BlockTitle page> CHANGE FORM</BlockTitle>
              <BlockDes className="text-soft">
              </BlockDes>
            </BlockHeadContent>
        <Block size="lg">
          <BlockHead>
          </BlockHead>
          <PreviewCard className="w-50">
            <OverlineTitle tag="span" className="preview-title-lg text-light text-center f-30">
              {" "}
               CHANGE FORM{" "}
            </OverlineTitle>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Date
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="date" id="default-0" placeholder="Input ddate" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Delivery Date
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control " type="date" id="default-0" placeholder="Input delivery date" />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Job No
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input jon no." />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Sales Person
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text"  placeholder="Input sales person" />
                  </div>
                </FormGroup>
              </Col>
            <hr className="preview-hr"></hr>

              <Col sm="12">
                <FormGroup>
                  <Label htmlFor="default-0" className="form-label">
                  Information
                  </Label>
                  <div className="form-control-wrap">
                    <textarea className="form-control" type="text" rows="30" placeholder="Input information" />
                  </div>
                </FormGroup>
              </Col>
            </Row>
          <div>
            <Link to="/change_form-details">
            <Button  color="light" outline className="btn-white mt-5 float-right">
          <span>Submit</span>
          </Button>
            </Link>
          </div>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default FormElementsPage;
