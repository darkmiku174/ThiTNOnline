import React from 'react';
import {Container,Card,ListGroup,Row,ProgressBar,Text,Button} from "react-bootstrap"

const ExamResultScreen = () => {
	return(
			<Container className="card-container">
				<Row>
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">					
							<Card>
							<Card.Title className="text-center">ĐẠI CƯƠNG PHÁP LUẬT VIỆT NAM</Card.Title>	
							<Card.Body className="card-group">									  
								<Card className="card-item">
							    	<Card.Title className="text-center">Số câu đúng</Card.Title>
							    	<Card.Text className="card-text1">
								      40/40
								    </Card.Text>
							    </Card>
							    <Card className="card-item">
							    	<Card.Title className="text-center">Điểm số</Card.Title>
							    	<Card.Text className="card-text1">
								      10.00
								    </Card.Text>
							    </Card>
							    <Card className="card-item">
							    	<Card.Title className="text-center">Thời gian làm bài</Card.Title>
							    	<Card.Text className="card-text1">
								      90:00
								    </Card.Text>
							    </Card>
							</Card.Body>
							</Card>
					</div>
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">				
							<Card>
							<Card.Title className="text-center">Card Title</Card.Title>	
							<Card.Body className="card-group">									  
								<Button>asda</Button>
							</Card.Body>
							</Card>
					</div>
				</Row>
				<Row>
					 <Card className="card-column">
				      <Card.Body>
				          <Card.Title>Công nghệ phần mềm nâng cao</Card.Title>
				        <div className="infor">
				          <Card.Text>Thời gian bắt đầu: 15h30</Card.Text>
				          <Card.Text>Ngày: 14/4/2021</Card.Text>
				          <Card.Text>Thời lượng: 90'</Card.Text>
				        </div>
				        <div className="break"></div>
				        <ProgressBar now={60} />
				      </Card.Body>
				    </Card>
				</Row>
			</Container>
		)
}
export default ExamResultScreen;