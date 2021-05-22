import React from 'react'
import {Col,Row,Button,Form,Container} from 'react-bootstrap'

const TeachersDetail = () => {
  return(
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
          <img src="/images/user.png" style={{width: "90%"}} />
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
          <Form.Control placeholder="GV0001" disabled />
         </Form>
          <Form inline>
          <Form.Label>Họ và tên: </Form.Label>
          <Form.Control placeholder="Trần Văn A" disabled />
         </Form>
          <Form inline>
          <Form.Label>Giới tính: </Form.Label>
          <Form.Control placeholder="Nam" disabled />
         </Form>
        </Col>

         <Col
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
         <Form inline>
          <Form.Label>Email trường: </Form.Label>
          <Form.Control placeholder="avc@huflit.edu.vn " disabled />
         </Form>
        </Col>

      </Row>

      <Row style={{marginTop:'1rem'}}>
        <Col md={6}  
          style={{
            display: "flex",
            flexDirection: "column",

          }}>
          <h4 style={{borderBottom: "2px solid black"}}>Thông tin giảng dạy</h4>
          <Form inline>
            <Form.Label>Chức vụ: </Form.Label>
            <Form.Label style={{marginLeft:'1rem'}}>Giảng viên </Form.Label>
           </Form>
           <Form inline>
            <Form.Label>Lớp phụ trách: </Form.Label>
            <a href="#" style={{marginLeft:'1rem'}}>Chi tiết</a>
           </Form>
           <Form inline>
            <Form.Label>Môn giảng dạy: </Form.Label>
            <a href="#" style={{marginLeft:'1rem'}}>Chi tiết</a>
           </Form>
          <Form inline>
            <Form.Label>Ngày vào đảng: </Form.Label>
            <Form.Label style={{marginLeft:'1rem'}}>23/4/2018</Form.Label>
           </Form>
           <Form inline>
            <Form.Label>Thời gian công tác: </Form.Label>
            <Form.Label style={{marginLeft:'1rem'}}>3 năm </Form.Label>
           </Form>
          
        </Col>

        <Col md={6}  
          style={{
            display: "flex",
            flexDirection: "column",
          }}>
          <h4 style={{borderBottom: "2px solid black"}}>Thông tin Liên lạc</h4>
          <Form inline>
            <Form.Label>Tôn giáo: </Form.Label>
            <Form.Label style={{marginLeft:'1rem'}}>Trúa </Form.Label>
           </Form>
           <Form inline>
            <Form.Label>Dân tộc: </Form.Label>
            <Form.Label style={{marginLeft:'1rem'}}>Kinh </Form.Label>
           </Form>
           <Form inline>
            <Form.Label>Địa chỉ: </Form.Label>
            <Form.Label style={{marginLeft:'1rem'}}>214/5,Q10,TP.HCM </Form.Label>
           </Form>
           <Form inline>
            <Form.Label>SĐT: </Form.Label>
            <Form.Label style={{marginLeft:'1rem'}}>1900068696 </Form.Label>
           </Form>

        </Col>
      </Row>
      <Row style={{marginTop:'2rem'}}>
        <Button style={{marginLeft:'40%'}}>Thay đổi</Button>
      </Row>

    </div>
  );
};

export default TeachersDetail;