import React from "react";
import { Breadcrumb as Crumb } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Breadscrumbs = (props) => {
  // console.log(props);
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  // console.log(pathnames);
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
