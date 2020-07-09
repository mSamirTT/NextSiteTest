import React from "react";
import Layout from "../components/layout";
import { Row, Col } from "react-bootstrap";
import Aside from '../components/aside';

export default function Home() {

  const menuLinks = [{
    ref: '/some-route',
    text: 'Link' 
   },
   {
    ref: '/some-route',
    text: 'Link' 
   },
   {
    ref: '/some-route',
    text: 'Link' 
   },
   {
    ref: '/some-route',
    text: 'Link' 
   },
   {
    ref: '/some-route',
    text: 'Link',
    variant: 'Primary'
   },
 ]

  return (
    <Layout>
      <Row>
        <Col sm={3}>
          <Aside links={menuLinks}>
          </Aside>
        </Col>
        <Col sm={9}>
          Main Body
        </Col>
      </Row>
    </Layout>
  );
}
