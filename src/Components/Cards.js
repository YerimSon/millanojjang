import { Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function Cards(props) {

  let navigate = useNavigate();

    return (
      <Col md>
      <Card style={{ width: '20rem', height: '30rem', marginTop: '10px'}}>
        <Card.Img variant="top" src={'/assets/product'+(props.i)+'.png'} width="50%"/>
        <Card.Body>
          <Card.Title>{props.datas.title}</Card.Title>
          <Card.Text>
              {props.datas.price}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate('/detail/'+(props.i))}>상품 구경하기</Button>
        </Card.Body>
        
      </Card>
      </Col>
    );
}

export default Cards;