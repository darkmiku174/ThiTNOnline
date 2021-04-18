import React from "react";
import SearchBar from "../components/SearchBar"
import {Table,Card} from "react-bootstrap"
const AdminSubjectTable = () =>{
  return (
<div>
<h2>Danh sách môn học</h2>
<SearchBar/>
  <Table striped bordered hover variant="dark" style={{width:"100%",marginTop:"1rem"}} >
    <thead>
      <tr>
        <th>STT</th>     
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td  style={{textAlign:"right"}}><a href="#">Xem chi tiết</a></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td  style={{textAlign:"right"}}><a href="#">Xem chi tiết</a></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td  style={{textAlign:"right"}}><a href="#">Xem chi tiết</a></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Larry the Bird</td>
        <td  style={{textAlign:"right"}}><a href="#">Xem chi tiết</a></td>
      </tr>
      <tr>
        <td>5</td>
        <td>Larry the Bird</td>
        <td  style={{textAlign:"right"}}><a href="#">Xem chi tiết</a></td>
      </tr>
    </tbody>
  </Table>
  </div>
)

}
export default AdminSubjectTable;