import React from "react";
import {Table} from "react-bootstrap";
const AdminExamTimetable = () => {

	return (
		<Table striped bordered hover>
		  <thead>
		    <tr>
		      <th>#</th>
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
		      {Array.from({ length: 8 }).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr>
		     <tr>
		      {Array.from({ length: 8}).map((_, index) => (
		        <th key={index}> </th>
		      ))}
		    </tr> 
		    
		  </tbody>
		</Table>
		)
}
export default AdminExamTimetable;
// {options === "details" ? (
//               <AdminExamTimetable />
//             )  : (
//               ""
//             )}