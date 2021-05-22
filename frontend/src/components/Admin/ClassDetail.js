import React from 'react'
import {Table,Row,Col,Form,Button} from 'react-bootstrap'
const ClassDetail = () => {
	return(
		<>
		<Row style={{borderBottom:'1px solid black'}}>
			<h4>Lớp A</h4>
		</Row>

		<Row style={{marginTop:'2rem', display:'flex',flexDirection:'column'}}>
			<h4>Thông tin chung</h4>
			<Form inline>
				<Form.Group>
					<Form.Label>Giảng viên phụ trách</Form.Label>			  
					<Form.Control style={{marginLeft:'2rem'}} type="text" placeholder="Trần Văn A" readOnly />
				</Form.Group>
			</Form>
			<Form inline>
				<Form.Group>
					<Form.Label>Mã lớp: </Form.Label>			  
					<Form.Control style={{marginLeft:'2rem'}} type="text" placeholder="ABC123" readOnly />
				</Form.Group>
			</Form>

		</Row>

		<Row style={{marginTop:'2rem'}}>
			<h4>Danh sách học sinh</h4>
		</Row>

		<Row style={{marginTop:'1rem'}}>
			<form className="form-inline" style={{marginLeft:"75%"}}>
			  <div className="form-group mx-sm-3 mb-2">
			    <label for="inputPassword2" className="sr-only">Nhập tên học sinh</label>
			    <input type="text" className="form-control" id="inputPassword2" placeholder="Nhập tên học sinh"/>
			  </div>
			  <button type="submit" className="btn btn-primary mb-2">TÌM KIẾM</button>
			</form>
			<Table  bordered >
					  <thead>
					    <tr>
					      <th>STT</th>
					      <th>Họ và tên</th>
					      <th>MSSV</th>
					      <th>Cập nhật</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td>1</td>
					      <td> Nguyễn Thị O </td>
					      <td> 19DH110855</td>
					      <td> <a href="#">Delete</a> <a href="#">Edit</a> </td>
					    </tr>
					     <tr>
					      <td>1</td>
					      <td> Nguyễn Thị C </td>
					      <td> 19DH110856</td>
					      <td> <a href="#">Delete</a> <a href="#">Edit</a> </td>
					    </tr>
					     <tr>
					      <td>1</td>
					      <td> Nguyễn Thị B </td>
					      <td> 19DH110857</td>
					      <td> <a href="#">Delete</a> <a href="#">Edit</a> </td>
					    </tr>
					  </tbody>
			</Table>
		</Row>
		</>
		)
}
export default ClassDetail;