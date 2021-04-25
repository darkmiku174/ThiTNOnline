import React from "react";
import TimetableHeader from '../components/TimetableHeader';
import {Form,Row,Col,Dropdown,DropdownButton,Button,Table} from "react-bootstrap";
const AdminExamTimetable = () => {

	return (
		<div className="timetable">
		<TimetableHeader/>

		
  				<div style={{display:"flex",float:"right",marginBottom:"1rem"}}>
	  				<Form.Label style={{marginTop:'0.7rem',marginRight:'0.7rem'}}>Tuần:</Form.Label>
	  				<DropdownButton id="namhoc" title="25">
					  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
					  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
					  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
					</DropdownButton>
	  			</div>
		

		<Table striped bordered hover>
		  <thead>
		    <tr>
		      <th>STT</th>
		      <th>Thứ 2</th>
		      <th>Thứ 3</th>
		      <th>Thứ 4</th>
		      <th>Thứ 5</th>
		      <th>Thứ 6</th>
		      <th>Thứ 7</th>
		      <th>Chủ nhật</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>
		     <tr>  
		       	<td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		        <td> </td>
		    </tr>

		    
		  </tbody>
		</Table>
		</div>
		)
}
export default AdminExamTimetable;
// {options === "details" ? (
//               <AdminExamTimetable />
//             )  : (
//               ""
//             )}