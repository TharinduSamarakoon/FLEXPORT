import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import DataCard from "../components/partials/default/DataCard";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Row,
  Col,
  BlockBetween,
} from "../components/Component";
import {
  DefaultCustomerChart,
  DefaultOrderChart,
  DefaultRevenueChart,
  DefaultVisitorChart,
} from "../components/partials/charts/default/DefaultCharts";

const Homepage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="DASHBOARD"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Dashboard
              </BlockTitle>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            <Col xxl="3" sm="6">
              <DataCard
                title="Today's Customer Registration"
                percentChange={"3"}
                up={true}
                chart={<DefaultOrderChart />}
                amount={"10"}
              />
            </Col>
            <Col xxl="3" sm="6">
              <DataCard
                title="Today's User Registration"
                percentChange={"9"}
                up={false}
                chart={<DefaultRevenueChart />}
                amount={"10"}
              />
            </Col>
            <Col xxl="3" sm="6">
              <DataCard
                title="Today's Sales Reps Registration"
                percentChange={"5"}
                up={true}
                chart={<DefaultCustomerChart />}
                amount={"10"}
              />
            </Col>
            <Col xxl="3" sm="6">
              <DataCard
                title="Today's Acccepted Orders"
                percentChange={"2"}
                up={false}
                chart={<DefaultVisitorChart />}
                amount={"29"}
              />
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default Homepage;
