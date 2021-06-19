import React, { Component, useState } from "react";
import { Form, Row, Dropdown, DropdownButton, Button, Container, Table, Col, Modal } from "react-bootstrap"
import DateTimePicker from '../GlobalComponents/DateTimePicker.js'
import axios from 'axios'
class SubjectTimetable extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: false,
			subjectDetails: [],
			exam:{}
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/subjects/detail-list/subject/' + this.props.match.params.id,
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				subjectDetails: res.data
			});
			
		}).catch(err => {
			console.log(err);
		})

	}



	showTimeTable = (arr) => {
		var result = null
		result = arr.map((obj, index) => {
			return (
				<tr>
					<td>{index + 1}</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			)
		})
		return result
	}

	handleShow = (show) => {
		this.setState({
			show: !show
		})
	}

	showSubjectDetails = (list) => {
		var result = null
		result = list.map((obj, index) => {
			return (
				<option key={index} value={obj._id} onClick={() => this.onChange()}>{obj._id}</option>
			)
		})
		return result
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/subjects/subject-detail/' + value,
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				exam: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	render() {
		var { show, subjectDetails, exam } = this.state

		return (
			<Container style={{ display: 'flex', flexDirection: 'column' }}>
				<Row style={{ display: 'flex', justifyContent: 'space-around', padding: '2rem' }}>
					<Form inline>
						<Form.Label>Năm học: </Form.Label>
						<DropdownButton style={{ marginLeft: '1rem' }} id="dropdown-button" title="Năm học">
							<Dropdown.Item > 2011-2012 </Dropdown.Item>
							<Dropdown.Item >2011-2012</Dropdown.Item>
							<Dropdown.Item >2011-2012</Dropdown.Item>
						</DropdownButton>
					</Form>
					<Form inline>
						<Form.Label>Học kỳ: </Form.Label>
						<DropdownButton style={{ marginLeft: '1rem' }} id="dropdown-button" title="Năm học">
							<Dropdown.Item > Học kỳ 1 </Dropdown.Item>
							<Dropdown.Item > Học kỳ 2</Dropdown.Item>
							<Dropdown.Item > Học kỳ 3</Dropdown.Item>
						</DropdownButton>
					</Form>
					<Button variant="primary" onClick={() => this.handleShow(show)} style={{ fontWeight: 'bold' }}>
						Thêm lịch thi
					</Button>

					<Modal show={show} onHide={() => this.handleShow(show)}>
						<Modal.Header closeButton>
							<Modal.Title>Thêm lịch thi</Modal.Title>
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
									<Form.Control as="select" custom onChange={this.onChange}>
										{this.showSubjectDetails(subjectDetails)}
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

							{/* Row 3*/}
							<Row style={{ display: 'flex', marginTop: '0.5rem' }}>
								<Col md={4}>
									<Form style={{ display: 'flex', justifyContent: 'space-around' }}>
										<Form.Label style={{ padding: '0.5rem' }}>Thời gian làm bài</Form.Label>
									</Form>
								</Col>
								<Col md={8}>
									<Form style={{ display: 'flex', justifyContent: 'space-around' }}>
										<Form.Control as="select" custom>
											<option>45 phút</option>
											<option>90 phút</option>
											<option>180 phút</option>
										</Form.Control>
									</Form>
								</Col>
							</Row>
							{/* Row 4*/}
							<Row style={{ display: 'flex', marginTop: '0.5rem' }}>
								<Col md={4}>
									<Form style={{ display: 'flex', justifyContent: 'space-around' }}>
										<Form.Label style={{ padding: '0.5rem' }}>Giờ bắt đầu</Form.Label>
									</Form>
								</Col>
								<Col md={8}>
									<Form style={{ display: 'flex', justifyContent: 'space-around' }}>
										<Form.Control type="text" placeholder="Giờ bắt đầu" />
									</Form>
								</Col>
							</Row>
							{/* Row 5*/}
							<Row style={{ display: 'flex', marginTop: '0.5rem' }}>
								<Col md={4}>
									<Form style={{ display: 'flex', justifyContent: 'space-around' }}>
										<Form.Label style={{ padding: '0.5rem' }}>Giờ kết thúc</Form.Label>
									</Form>
								</Col>
								<Col md={8}>
									<Form style={{ display: 'flex', justifyContent: 'space-around' }}>
										<Form.Control type="text" placeholder="Giờ kết thúc" />
									</Form>
								</Col>
							</Row>
							{/* Row 6*/}
							<Row style={{ display: 'flex', marginTop: '0.5rem' }}>
								<Col md={4}>
									<Form style={{ display: 'flex', justifyContent: 'space-around' }}>
										<Form.Label style={{ padding: '0.5rem' }}>Ngày thi</Form.Label>
									</Form>
								</Col>
								<Col md={8}>
									<DateTimePicker />
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
				<Row>
					<Table bordered >
						<thead>
							<tr>
								<th></th>
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
							{/* <tr>
								<td>1</td>
								<td rowspan="3">
									<div style={{ border: "1px solid red", padding: '1rem' }}>
										<p style={{ textAlign: 'center' }}>DL001</p>
										<p>Mã đề thi: DLCM001</p>
										<p>Số câu hỏi: 45 </p>
										<a href="#">Danh sách thí sinh</a>
									</div>
								</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr> */}
							{this.showTimeTable([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])}

						</tbody>
					</Table>
				</Row>
			</Container>
		)
	}
}
export default SubjectTimetable;