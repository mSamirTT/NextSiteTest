import React from "react";
import Navbar from "./navbar";
import { Container } from "react-bootstrap";
import Head from "next/head";

const layout = (props) => {
  return (
    <React.Fragment>
      <style jsx>{``}</style>
      <Head>
        <title>Title</title>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link
          href="http://fonts.googleapis.com/css?family=Roboto+Condensed:700italic,400,300,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </Head>
      <Container>
        {/* <!-- Header --> */}
        <Navbar></Navbar>
        {/* <!-- /Header --> */}
      </Container>

      {/* <!-- Banner --> */}
      <section>{props.banner}</section>
      {/* <!-- /Banner --> */}
      <Container>
        {/* <!-- Body --> */}
        <section>{props.children}</section>
        {/* <!-- /Body --> */}

        {/* <!-- Footer --> */}
        <section
          style={{ borderTop: "1px solid lightGray", marginTop: "10px" }}
        >
          <p style={{ color: "black", textAlign: "center" }}>
            phone: 952-927-7810 | fax: 952-927-6309 | address: 7701 York Avenue
            S. Suite 180, Edina, MN 55435
            <br />© Endocrinology Clinic of Minneapolis, P.A.&nbsp;All Rights
            Reserved&nbsp;
          </p>
        </section>
        {/* <!-- /Footer --> */}
      </Container>
    </React.Fragment>
  );
};

export default layout;
