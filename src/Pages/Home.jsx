import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { beans2, coffe_w, coffee2, hand, map } from '../assets';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='bg-[#331C00]'>
        <section className="section-1 h-[850px] lg:h-[400px] md:h-full md:pt-[40px]  flex items-center overflow-hidden">
          <Container fluid>
            <Row className='items-center'>
              <Col lg={6} md={6} className='pl-[150px] xl:pl-[40px]'>
                <div className="flex items-start md:items-center md:justify-center justify-start h-full  flex-col">
                  <h1 className='text-[#fff] text-[72px] font-[600] xl:text-[42px] md:text-center'>Make your day <br />with coffee
                  </h1>
                  <p className='text-[32px] xl:text-[25px] text-[#fff] mt-[20px]'>Don’t wait in the shop!</p>
                  <div className="search mt-[50px]">
                    <Link to='/menu' className='bg-[#936532]  text-[#fff] pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[20px] rounded-[10px] capitalize'>
                      Cofeshoplar
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} className='bg-[--bg] bg-right md:bg-transparent'>
                <div className="flex items-center justify-start md:justify-center relative bg-right-alt">
                  <div className="relative flex items-center justify-center">
                    <img className='image' src={coffee2} alt="" />
                    <img className='beans' src={beans2} alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="2" className='mt-[100px] pb-[170px]'>
          <Container className='bg-[#936532] rounded-[48px] pt-[30px] pb-[30px]'>
            <div className="text flex flex-col items-center justify-center mb-[50px]">
              <h1 className='text-[42px] font-[600] text-[#fff] xl:text-[30px]'>How Taky works?</h1>
              <h1 className='text-[42px] font-[600] text-[#fff] xl:text-[30px]'>So simple!</h1>
            </div>
            <Row className='mt-[30px]'>
              <Col lg={4} md={12} className='lg:mb-[30px]'>
                <div className="flex items-center justify-center h-full flex-col pl-[50px] pr-[50px]">
                  <div className="top pb-[20px]">
                    <img src={map} alt="" />
                  </div>
                  <div className="center pb-[20px]">
                    <h3 className='text-[#fff] text-[24px] font-[500]'>Enter your location</h3>

                  </div>
                  <div className="bottom pl-[50px] pr-[50px]">
                    <p className='text-center text-[#fff] text-[15px]'>Enter you address or where you are going</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} className='lg:mb-[30px]'>
                <div className="flex items-center justify-center h-full flex-col pl-[50px] pr-[50px]">
                  <div className="top pb-[20px]">
                    <img src={coffe_w} alt="" />
                  </div>
                  <div className="center pb-[20px]">
                    <h3 className='text-[#fff] text-[24px] font-[500]'>Choose your takeaway shop</h3>

                  </div>
                  <div className="bottom ">
                    <p className='text-center text-[#fff]  text-[15px]'>Find not only shops nearby but also shops on your way to go!Browse the list of many shops, menus</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} className='lg:mb-[30px]'>
                <div className="flex items-center justify-center h-full flex-col pl-[50px] pr-[50px]">
                  <div className="top pb-[20px]">
                    <img src={hand} alt="" />
                  </div>
                  <div className="center pb-[20px]">
                    <h3 className='text-[#fff] text-[24px] font-[500]'>Pay and get your drink</h3>

                  </div>
                  <div className="bottom">
                    <p className='text-center text-[#fff] text-[15px]'>Choose from different payment methods. That's it, enjoy your coffee!</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default Home
