import React, {useEffect} from "react";
import {Container, Form, Table, Button, Alert} from "react-bootstrap";
import {Link, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {subjectDetailListAction} from "../../../actions/SubjectActions"
import {ClipLoader} from "react-spinners";

const SubjectQuestion = () => {
  const dispatch = useDispatch()
  const {loading, error, subjectDetailList} = useSelector(
    (state) => state.subjectDetailList
  );
  useEffect(() => {
    dispatch(subjectDetailListAction())
  }, [dispatch]);

  return (
    <>
      {
            loading == null || loading ?
                <div className={"d-flex justify-content-center"}>
                  <ClipLoader color={"#2196f3"} size={100} />
                </div>
                :
                error ?
                    <Alert variant={"danger"}>Something wrong happen</Alert>
                    :
          <Container>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className="mb-4"
            >
              <Form inline>
                <Form.Control
                  type="text"
                  name="q"
                  placeholder="Search subject..."
                />
                <Button type="submit" variant="outline-success" className="ml-2 p-2">
                  Search
                          </Button>
              </Form>
            </div>
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Môn học</th>
                </tr>
              </thead>
              <tbody>
                {subjectDetailList.map((s) => (
                  <tr>
                    <td>
                      <Link to={"#dscauhoi/" + s.MonHoc._id}>{s.MonHoc._id}</Link>
                    </td>
                    <td>{s.MonHoc.TenMH}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
      }
    </>
  );
};

export default SubjectQuestion;
