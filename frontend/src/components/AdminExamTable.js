import React from "react";
import SearchBar from "../components/SearchBar"
import {Table,Card} from "react-bootstrap"
const AdminExamTable = () =>{
  return (
<Card style={{display:"flex",marginTop:"1rem",width:"100%",height:"100%",marginLeft:"1rem"}}>
<Card.Header style={{background:"white"}}><h2>Danh sách môn thi</h2></Card.Header>
<Card.Body>
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
  </Card.Body>
</Card>
)

}
export default AdminExamTable;