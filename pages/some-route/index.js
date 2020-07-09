import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Aside from '../../components/aside';
import Layout from '../../components/layout';

const SomeRoute= () => {
  const menuLinks = [{
    ref: '/',
    text: 'Link' 
   },
   {
    ref: '/',
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

export default SomeRoute;