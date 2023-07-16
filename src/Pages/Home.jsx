import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { beans2, coffee2 } from '../assets';

const Home = () => {
  return (
    <>
      <section className="section-1 h-[900px]  flex items-center overflow-hidden">
        <Container fluid>
          <Row className='items-center'>
            <Col lg={6} className='pl-[150px]'>
              <div className="flex items-start justify-start h-full  flex-col">
                <h1 className='text-[#fff] text-[72px] font-[600]'>Make your day <br />with coffee
                  </h1>
                  <p className='text-[32px] text-[#fff] mt-[20px]'>Don’t wait in the shop!</p>
              </div>
            </Col>
            <Col lg={6} className=''>
              <div className="  w-full right relative">
                  <div className="relative flex items-center justify-center">
                    <img className='image' src={coffee2} alt="" />
                    <img className='beans' src={beans2} alt="" />
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
