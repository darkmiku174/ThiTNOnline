import React from 'react';
import {Form,Row,Col,Dropdown,DropdownButton,Button } from 'react-bootstrap';

const TimetableHeader = () => {
  return(
  		<Form>
  			<Form.Group controlId="namhoc" style={{display:'flex',justifyContent:'space-between'}}>
  				<div style={{display:"flex"}}>
	  				<Form.Label style={{marginTop:'0.7rem',marginRight:'0.7rem'}}>Năm học:</Form.Label>
	  				<DropdownButton id="namhoc" title="2011-2012">
					  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
					  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
					  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
					</DropdownButton>
	  			</div>
	  			<div style={{display:"flex"}}>
	  				<Form.Label style={{marginTop:'0.7rem',marginRight:'0.7rem'}}>Học kỳ:</Form.Label>
	  				<DropdownButton id="hocky" title="Học kỳ 1">
					  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
					  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
					  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
					</DropdownButton>
	  			</div>
	  			<div style={{display:"flex"}}>
	  				<Button>Thêm lịch</Button>
	  			</div>
			</Form.Group>
  		</Form>
	)
  }
export default TimetableHeader;

