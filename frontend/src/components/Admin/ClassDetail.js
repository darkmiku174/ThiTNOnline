import React, { Component } from 'react'
import { Table, Row, Form, Button, Col, Modal } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom'
class ClassDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: false,
			subjectdetail: {},
			students: []
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/subjects/detail-list/' + this.props.match.params.id,
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				subjectdetail: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	showStudents = (students) => {
		var result = null;
		if (students) {
			result = students.map((student, index) => {
				return (
					<tr>
						<td>{index + 1}</td>
						<td> {student._id}</td>
						<td> {student.People.HoTen} </td>
						<td> <Button key={index} onClick={() => this.onDelete(students, index)} >Xoá</Button> </td>
					</tr>
				)
			});
		}
		return result;
	}

	handleShow = (show) => {
		this.setState({
			show: !show
		})
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/students',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				students: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	onDelete = (students, index) => {
		students.splice(index, 1)
		axios({
			method: 'PUT',
			url: 'http://localhost:5000/api/subjects/detail-list/update/' + this.props.match.params.id,
			data: {
				"DSSV": students
			}
		}).then(res => {
			console.log(res);
			window.location.reload();
		}).catch(err => {
			console.log(err);
		})
	}

	showStudentsAdd = (list) => {
		var result = null
		result = list.map((obj, index) => {
			return (
				<option key={index} value={obj._id} >{obj._id}</option>
			)
		})
		return result
	}

	render() {
		var { subjectdetail, show, students } = this.state
		return (
			<>
				<Row style={{ borderBottom: '1px solid black' }}>
					<h4>Lớp A</h4>
				</Row>

				<Row style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column' }}>
					<h4>Thông tin chung</h4>
					<Form inline>
						<Form.Group>
							<Form.Label>Giảng viên phụ trách</Form.Label>
							<Form.Control style={{ marginLeft: '2rem' }} type="text" placeholder="Trần Văn A" value={subjectdetail?.GiangVien?.People?.HoTen} readOnly />
						</Form.Group>
					</Form>
					<Form inline>
						<Form.Group>
							<Form.Label>Mã lớp: </Form.Label>
							<Form.Control style={{ marginLeft: '2rem' }} type="text" placeholder="ABC123" value={subjectdetail._id} readOnly />
						</Form.Group>
					</Form>

				</Row>

				<Row style={{ marginTop: '2rem' }}>
					<h4>Danh sách học sinh</h4>
					<Button variant="primary" onClick={() => this.handleShow(show)} style={{ fontWeight: 'bold' }}>
						Thêm học sinh
					</Button>

					<Modal show={show} onHide={() => this.handleShow(show)}>
						<Modal.Header closeButton>
							<Modal.Title>Thêm học sinh</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							{/* Row 1*/}
							<Row style={{ display: 'flex' }}>
								<Col md={4}>
									<Form style={{ display: 'flex', justifyContent: 'space-around' }}>
										<Form.Label style={{ padding: '0.5rem' }}>Mã lớp</Form.Label>
									</Form>
								</Col>
								<Col md={8}>
									<Form.Control as="select" custom >
										{this.showStudentsAdd(students)}
									</Form.Control>
								</Col>
							</Row>

							{/* Row 2*/}
							<Row style={{ display: 'flex', marginTop: '0.5rem' }}>
								<Col md={4}>
									<Form style={{ display: 'flex', justifyContent: 'space-around' }}>
										<Form.Label style={{ padding: '0.5rem' }}>Mã đề</Form.Label>
									</Form>
								</Col>
								<Col md={8}>
									<Form style={{ display: 'flex', justifyContent: 'space-around' }}>
										<Form.Control type="text" placeholder="Mã đề" value={1} disabled={true} />
									</Form>
								</Col>
							</Row>

						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={() => this.handleShow(show)}>
								Đóng
							</Button>
							<Button variant="primary" onClick={() => this.handleShow(show)}>
								Xác nhận
							</Button>
						</Modal.Footer>
					</Modal>
				</Row>

				<Row style={{ marginTop: '1rem' }}>
					<form className="form-inline" style={{ marginLeft: "75%" }}>
						<div className="form-group mx-sm-3 mb-2">
							<label for="inputPassword2" className="sr-only">Nhập tên học sinh</label>
							<input type="text" className="form-control" id="inputPassword2" placeholder="Nhập tên học sinh" />
						</div>
						<button type="submit" className="btn btn-primary mb-2">TÌM KIẾM</button>
					</form>
					<Table bordered >
						<thead>
							<tr>
								<th>STT</th>
								<th>MSSV</th>
								<th>Họ và tên</th>
								<th>Cập nhật</th>
							</tr>
						</thead>
						<tbody>
							{this.showStudents(subjectdetail.DSSV)}
						</tbody>
					</Table>
				</Row>
			</>
		)
	}
}
export default ClassDetail;