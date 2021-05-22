import React from 'react'
import {Table} from 'react-bootstrap'
const ClassManagement = () => {
	return(
	<div>
		<h2>Danh sách lớp học</h2>
			<form className="form-inline" style={{marginLeft:"65%"}}>
			  <div className="form-group mx-sm-3 mb-2">
			    <label for="inputPassword2" className="sr-only">Nhập tên lớp</label>
			    <input type="text" className="form-control" id="inputPassword2" placeholder="Nhập tên lớp"/>
			  </div>
			  <button type="submit" className="btn btn-primary mb-2">TÌM KIẾM</button>
			</form>
		  <Table striped bordered hover variant="dark" style={{width:"100%",marginTop:"1rem"}} >
		    <thead>
		      <tr>
		        <th>STT</th>     
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td>1</td>
		        <td>Lớp A</td>
		        <td  style={{textAlign:"right"}}>
		      		<a href="/chitietgiangvien">Xem chi tiết</a>
		        </td>
		      </tr>
		      <tr>
		        <td>2</td>
		        <td>Lớp B</td>
		        <td  style={{textAlign:"right"}}>
		        	<a href="/chitietgiangvien" >Xem chi tiết</a>
		        </td>
		      </tr>
		      <tr>
		        <td>3</td>
		        <td>Lớp C</td>
		        <td  style={{textAlign:"right"}}>
		        	<a href="/chitietgiangvien" >Xem chi tiết</a>
		        </td>
		      </tr>
		    </tbody>
		  </Table>
  </div>
		)
}
export default ClassManagement;