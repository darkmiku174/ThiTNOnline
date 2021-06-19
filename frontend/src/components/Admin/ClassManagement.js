import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom'
class ClassManagement extends Component {

	constructor(props) {
		super(props);
		this.state = {
			subjectdetails: []
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/subjects/detail-list',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				subjectdetails: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	showSubjects = (subjectdetails) => {
		var result = null;
		if (subjectdetails.length > 0) {
			result = subjectdetails.map((subject, index) => {
				return (
					<tr>
						<td>{index + 1}</td>
						<td>{subject._id}</td>
						<td>{subject.MonHoc.TenMH}</td>
						<td>{subject.KhoaHoc}</td>
						<td>{subject.GiangVien.People.HoTen}</td>
						<td style={{ textAlign: "right" }}>
							<Link to={"/chitietlophoc/" + subject._id} >Xem chi tiết</Link>
						</td>
					</tr>
				)
			});
		}
		return result;
	}


	render() {
		var { subjectdetails } = this.state
		return (
			<div>
				<h2>Danh sách lớp học</h2>
				<form className="form-inline" style={{ marginLeft: "65%" }}>
					<div className="form-group mx-sm-3 mb-2">
						<label for="inputPassword2" className="sr-only">Nhập tên lớp</label>
						<input type="text" className="form-control" id="inputPassword2" placeholder="Nhập tên lớp" />
					</div>
					<button type="submit" className="btn btn-primary mb-2">TÌM KIẾM</button>
				</form>
				<Table striped bordered hover variant="dark" style={{ width: "100%", marginTop: "1rem" }} >
					<thead>
						<tr>
							<th>STT</th>
							<th>Mã lớp</th>
							<th>Môn học</th>
							<th>Khoá học</th>
							<th>Giảng viên</th>
						</tr>
					</thead>
					<tbody>
						{this.showSubjects(subjectdetails)}

					</tbody>
				</Table>
			</div>
		)
	}
}
export default ClassManagement;