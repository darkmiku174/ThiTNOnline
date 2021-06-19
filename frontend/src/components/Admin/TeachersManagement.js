
import React, { Component } from "react";
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from 'axios'

class TeachersManagement extends Component {

	constructor(props) {
		super(props);
		this.state = {
			teachers: []
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/lecturers',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				teachers: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	showTeacherList = (teachers) => {
		var result = null
		if (teachers) {
			result = teachers.map((teacher, index) => {
				return (
					<tr>
						<td>{index + 1}</td>
						<td>{teacher.People.HoTen}</td>
						<td style={{ textAlign: "right" }}>
							<Link to={"/chitietgiangvien/" + teacher._id} >Xem chi tiết</Link>
						</td>
					</tr>
				)
			})
		}
		return result
	}

	render() {
		var { teachers } = this.state
		return (

			<div>
				<h2>Danh sách giảng viên</h2>
				<form className="form-inline" style={{ marginLeft: "65%" }}>
					<div className="form-group mx-sm-3 mb-2">
						<label for="inputPassword2" className="sr-only">Nhập tên giảng viên</label>
						<input type="text" className="form-control" id="inputPassword2" placeholder="Nhập tên giảng viên" />
					</div>
					<button type="submit" className="btn btn-primary mb-2">TÌM KIẾM</button>
				</form>
				<Table striped bordered hover variant="dark" style={{ width: "100%", marginTop: "1rem" }} >
					<thead>
						<tr>
							<th>STT</th>
							<th>Họ và tên</th>
						</tr>
					</thead>
					<tbody>
						{this.showTeacherList(teachers)}
					</tbody>
				</Table>
			</div>

		);
	}
};

export default TeachersManagement;