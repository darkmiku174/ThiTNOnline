import React,{useEffect} from "react";
import { Container, Form, Table, Button } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {subjectListAction} from "../../../actions/SubjectActions"

const SubjectQuestion = () => {
    const dispatch = useDispatch()
    const subjectList = useSelector(state => state.subjectList)
    const {loading,error,subjects} = subjectList;
    console.log(subjects)
    useEffect(() => (
        dispatch(subjectListAction())
    ), [dispatch]);

  return (
      <>
          {
              error == null && subjects != null ?
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
                          <th style={{ width: "20%" }}>Number of question</th>
                      </tr>
                      </thead>
                      <tbody>
                      {subjects.map((s) => (
                          <tr>
                              <td>
                                  <Link to={"#dscauhoi/" + s.MaMH}>{s.MaMH}</Link>
                              </td>
                              <td>{s.TenMH}</td>
                              <td>{s.length}</td>
                          </tr>
                      ))}
                      </tbody>
                  </Table>
              </Container>:""
          }
      </>
  );
};

export default SubjectQuestion;
