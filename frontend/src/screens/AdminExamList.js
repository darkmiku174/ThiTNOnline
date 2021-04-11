import React from "react";
import {Container} from "react-bootstrap";
import SideNav from "../components/SideNav";
import AdminExamTable from "../components/AdminExamTable";
const AdminExamList = () =>{
	return (
			<div className="table-wrapper">

				<SideNav/>
				<AdminExamTable/>
			</div>
		)
}
export default AdminExamList;