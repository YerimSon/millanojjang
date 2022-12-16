import {Container, Row, Col, Nav} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {useEffect, useState} from "react";
import {addItem} from './../store.js';
import {useDispatch} from 'react-redux'
import data from '../data.js';

function Detail(props) {

    let [count, setCount] = useState(0);
    let {id} = useParams();
    let foundItem = props.datas.find( (x)=> x.id==id )
    let [tab, setTab] = useState(0)
    let dispatch = useDispatch();


    return (
    <div>
        <Container>
            <Row>
                  <Col md>
                        <img src={'/assets/product'+(foundItem.id)+'.png'} width="100%" />
                  </Col>
                  <Col md>
                      <h4 className="pt-5">{foundItem.title}</h4>
                      <p>{foundItem.price}</p>
                      {/* <button className="btn btn-danger" onClick={
                          dispatch(addItem({id: 0, name: "에트로 그린 디퓨저", count: 1}))
                      }>주문하기</button> */}
                  </Col>
            </Row>
        </Container>

        <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
                <Nav.Link onClick={() => {setTab(0)}} eventKey="link0">상품상세정보</Nav.Link>
            </Nav.Item>

        </Nav>


    <div>
        <div>
            <img src={'/assets/prodesc'+(foundItem.id)+'.jpeg'}></img>
        </div>
    </div>

        {/* <TabContent tab={tab} /> */}
    
    </div>
    )
}

// function TabContent({tab}) {
//     let [fade, setFade] = useState('')
//      useEffect(() => {
//         setTimeout(() =>{setFade('end')}, 100)
        
//         return () => {
//             setFade('')
//         }

//     }, [tab])

//     return (<div>
//         { [<div>
//             <img src={'/assets/prodesc'+(props.i)+'jpeg'}></img>
//         </div>][tab] }
//     </div>)
// }


export default Detail;