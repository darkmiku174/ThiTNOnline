import React, { Component } from "react";
import SearchBar from "../../components/SearchBar"
import { Table } from "react-bootstrap"
import axios from 'axios'
import {Link} from 'react-router-dom'
class SubjectManagement extends Component {

	constructor(props) {
		super(props);
		this.state = {
			subjects: []
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/subjects',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				subjects: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	showSubjects = (subjects) => {
		var result = null;
		if (subjects.length > 0) {
			result = subjects.map((subject, index) => {
				return (
					<tr>
						<td>{index + 1}</td>
						<td>{subject.TenMH}</td>
						<td style={{ textAlign: "right" }}><Link to={"/lichthi/"+subject._id}>Xem chi tiết</Link></td>
					</tr>
				)
			});
		}
		return result;
	}

	render() {
		var { subjects } = this.state
		return (
			<div>
				<h2>Danh sách môn học</h2>
				<SearchBar />
				<Table striped bordered hover variant="dark" style={{ width: "100%", marginTop: "1rem" }} >
					<thead>
						<tr>
							<th>STT</th>
							<th>Tên môn học</th>
						</tr>
					</thead>
					<tbody>
						{this.showSubjects(subjects)}
					</tbody>
				</Table>
			</div>
		)
	}

}
export default SubjectManagement;