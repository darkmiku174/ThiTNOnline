import React from "react";
import SearchBar from "../../components/SearchBar"

import {Table,Card} from "react-bootstrap"
const SubjectManagement = () =>{
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
        <td>DLCMDCSVN</td>
        <td  style={{textAlign:"right"}}><a href="/thoikhoabieu">Xem chi tiết</a></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Toán cao cấp</td>
        <td  style={{textAlign:"right"}}><a href="/thoikhoabieu">Xem chi tiết</a></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Giải phẫu</td>
        <td  style={{textAlign:"right"}}><a href="/thoikhoabieu">Xem chi tiết</a></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Đại số tuyến tính</td>
        <td  style={{textAlign:"right"}}><a href="/thoikhoabieu">Xem chi tiết</a></td>
      </tr>
      <tr>
        <td>5</td>
        <td>Giải tích</td>
        <td  style={{textAlign:"right"}}><a href="/thoikhoabieu">Xem chi tiết</a></td>
      </tr>
    </tbody>
  </Table>
  </div>
)

}
export default SubjectManagement;