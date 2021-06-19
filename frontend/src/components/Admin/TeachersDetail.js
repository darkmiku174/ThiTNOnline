import React, { Component } from 'react'
import { Col, Row, Button, Form } from 'react-bootstrap'
import axios from 'axios'

class TeachersDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			teacher: {}
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/lecturers/detail/' + this.props.match.params.id,
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				teacher: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	render() {
		var { teacher } = this.state
		return (
			<div>
				<Row>

					<Col
						md={4}
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<img src={teacher.People?.AnhDaiDien} style={{ width: "90%" }} />
					</Col>

					<Col
						md={4}
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Form inline>
							<Form.Label>Mã GV: </Form.Label>
							<Form.Control placeholder="GV0001" value={teacher._id} disabled />
						</Form>
						<Form inline>
							<Form.Label>Họ và tên: </Form.Label>
							<Form.Control placeholder="Trần Văn A" value={teacher.People?.HoTen} disabled />
						</Form>
						<Form inline>
							<Form.Label>Giới tính: </Form.Label>
							<Form.Control placeholder="Nam" value={teacher.People?.GioiTinh == 1 ? "Nam" : "Nữ"} disabled />
						</Form>
						<Form inline>
							<Form.Label>Ngày sinh: </Form.Label>
							<Form.Control placeholder="01/01/2000" value={teacher.People?.NgaySinh} disabled />
						</Form>
					</Col>

				</Row>

			</div>
		);
	}
};

export default TeachersDetail;