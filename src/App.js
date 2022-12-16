
import {useState} from "react";
import './App.css';
import { Button, Navbar, Container, Nav, Row, Col, NavLink, NavDropdown } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Cards from './Components/Cards.js';
import Detail from './routes/Detail.js';
import Acc from './routes/Acc.js';
import Bag from './routes/Bag.js';
import Shoes from './routes/Shoes.js';
import Clothes from './routes/Clothes.js';
import axios from 'axios'
import ControlledCarousel from './Components/Carousel';
import Cart from './routes/Cart.js';


function App() {

  let [datas, setDatas] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}className="title">Millano Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {/* <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link> */}
            <NavDropdown title="카테고리" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/accessory')}>악세서리</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/bag')}>백</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/shoes')}>신발</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/clothes')}>옷</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>


      <Routes>
              <Route path="/" element={<div>
                      <ControlledCarousel></ControlledCarousel>
                      <Container>
                          <Row>
                              { datas.map((a, i) => {
                                    return <Cards key={i} datas={datas[i]} i={i}></Cards>
                                })
                              }
                          </Row>
                      </Container>
                      
                  </div>
                } />

              <Route path="/detail/:id" element={<Detail datas={datas}/>} />
              <Route path="/accessory" element={<Acc/>}></Route>
              <Route path="/bag" element={<Bag/>}></Route>
              <Route path="/shoes" element={<Shoes/>}></Route>
              <Route path="/clothes" element={<Clothes/>}></Route>
              <Route path="*" element={<div>없는 페이지에요</div>} />

              <Route path="/cart" element={<Cart/>} />
            </Routes>
    </div>
  );
}









export default App;
