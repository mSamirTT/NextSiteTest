import React from "react";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";

const Aside = (props) => {
  return (
    <ListGroup>
      {props.links.map((link, index) => {
        return <Link key={index} href={link.ref}>
          <a>
            <ListGroup.Item action variant={link.variant || "light"}>
              {link.text}
            </ListGroup.Item>
          </a>
        </Link>;
      })}
    </ListGroup>
  );
};

export default Aside;
