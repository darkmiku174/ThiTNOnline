
import React, { useEffect, useState } from "react";
import {Col,Row,Button,Form,Container,Table} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TeachersDetail from "../../components/Admin/TeachersDetail"


const TeachersManagement = () => {
	return(

   <div>
		<h2>Danh sách giảng viên</h2>
		<form className="form-inline" style={{marginLeft:"65%"}}>
		  <div className="form-group mx-sm-3 mb-2">
		    <label for="inputPassword2" className="sr-only">Nhập tên giảng viên</label>
		    <input type="text" className="form-control" id="inputPassword2" placeholder="Nhập tên giảng viên"/>
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
		        <td>Nguyễn Văn A</td>
		        <td  style={{textAlign:"right"}}>
		      		<a href="/chitietgiangvien">Xem chi tiết</a>
		        </td>
		      </tr>
		      <tr>
		        <td>2</td>
		        <td>Nguyễn Văn B</td>
		        <td  style={{textAlign:"right"}}>
		        	<a href="/chitietgiangvien" >Xem chi tiết</a>
		        </td>
		      </tr>
		      <tr>
		        <td>3</td>
		        <td>Nguyễn Văn C</td>
		        <td  style={{textAlign:"right"}}>
		        	<a href="/chitietgiangvien" >Xem chi tiết</a>
		        </td>
		      </tr>
		    </tbody>
		  </Table>
  </div>

  );
};

export default TeachersManagement;