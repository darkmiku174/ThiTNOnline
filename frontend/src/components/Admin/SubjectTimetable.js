import React from "react";
import {Form,Col,Row,Dropdown,DropdownButton,FormControl,Button,Container,Table} from "react-bootstrap"
const SubjectTimetable = () =>{
	return (
		<Container style={{display:'flex',flexDirection:'column'}}>
			<Row style={{display:'flex',justifyContent:'space-around',padding:'2rem'}}>
				<Form inline>
					<Form.Label>Năm học: </Form.Label>
					<DropdownButton style={{marginLeft:'1rem'}} id="dropdown-button" title="Năm học">
					  <Dropdown.Item > 2011-2012 </Dropdown.Item>
					  <Dropdown.Item >2011-2012</Dropdown.Item>
					  <Dropdown.Item >2011-2012</Dropdown.Item>
					</DropdownButton>
				</Form>
				<Form inline>
					<Form.Label>Học kỳ: </Form.Label>
					<DropdownButton style={{marginLeft:'1rem'}} id="dropdown-button" title="Năm học">
					  <Dropdown.Item > Học kỳ 1 </Dropdown.Item>
					  <Dropdown.Item > Học kỳ 2</Dropdown.Item>
					  <Dropdown.Item > Học kỳ 3</Dropdown.Item>
					</DropdownButton>
				</Form>
				<Button> Thêm lịch </Button>
			</Row>
			<Row>
				<Table  bordered >
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
				    <tr>
				      <td>1</td>
				      <td rowspan="3">
				      		<div style={{border:"1px solid red",padding:'1rem'}}>
				      			<p style={{textAlign:'center'}}>DL001</p>
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
				    </tr>
				    <tr>
				      <td>2</td>
				      {/*<td></td>*/}
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <td>3</td>
				      {/*<td></td>*/}
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>4</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>5</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>6</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>7</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>8</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>9</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>10</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>11</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>12</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>13</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>14</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				     <tr>
				      <td>15</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				  </tbody>
				</Table>
			</Row>
		</Container>
	)
}
export default SubjectTimetable;