import React from "react";
import { Breadcrumb as Crumb } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Breadscrumbs = (props) => {
  const {
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Crumb style={{ width: "90%", margin: "0 auto" }}>
        {pathnames.length > 0 ? (
          <Crumb.Item href="/">Home</Crumb.Item>
        ) : (
          <div>Home</div>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Crumb.Item key={index} href={name} active>
              {name}
            </Crumb.Item>
          ) : (
            <Crumb.Item href={routeTo}>{name}</Crumb.Item>
          );
        })}
      </Crumb>
    </div>
  );
};

export default withRouter(Breadscrumbs);
