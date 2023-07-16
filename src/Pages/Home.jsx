import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { beans2, coffe_w, coffee2, hand, map } from '../assets';

const Home = () => {
  return (
    <>
      <section className="section-1 h-[850px]  flex items-center overflow-hidden">
        <Container fluid>
          <Row className='items-center'>
            <Col lg={6} className='pl-[150px]'>
              <div className="flex items-start justify-start h-full  flex-col">
                <h1 className='text-[#fff] text-[72px] font-[600]'>Make your day <br />with coffee
                </h1>
                <p className='text-[32px] text-[#fff] mt-[20px]'>Don’t wait in the shop!</p>
                <div className="search mt-[50px] w-[500px] ">
                  <input type="text" className='bg-[#BBA68F] w-full m-0 rounded-[12px] pt-[15px] pb-[15px] pl-[20px] pr-[20px] bottom-0 outline-0 placeholder:text-[#fff] placeholder:opacity-[.75]' placeholder='Find takeaway shops on your way' />
                </div>
              </div>
            </Col>
            <Col lg={6} className='bg-[--bg] bg-right'>
              <div className="  flex items-center justify-start relative bg-right-alt">
                <div className="relative flex items-center justify-center">
                  <img className='image' src={coffee2} alt="" />
                  <img className='beans' src={beans2} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="2" className='mt-[70px] '>
        <Container className='bg-[#936532] rounded-[48px] pt-[30px] pb-[30px]'>
          <div className="text flex flex-col items-center justify-center mb-[50px]">
            <h1 className='text-[42px] font-[600] text-[#fff]'>How Taky works?</h1>
            <h1 className='text-[42px] font-[600] text-[#fff]'>So simple!</h1>
          </div>
          <Row className='mt-[30px]'>
            <Col lg={4}>
              <div className="flex items-center justify-center h-full flex-col pl-[50px] pr-[50px]">
                <div className="top pb-[20px]">
                  <img src={map} alt="" />
                </div>
                <div className="center pb-[20px]">
                  <h3 className='text-[#fff] text-[24px]'>Enter your location</h3>
                  
                </div>
                <div className="bottom pl-[50px] pr-[50px]">
                <p className='text-center text-[#fff] text-[15px]'>Enter you address or where you are going</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
            <div className="flex items-center justify-center h-full flex-col pl-[50px] pr-[50px]">
                <div className="top pb-[20px]">
                  <img src={coffe_w} alt="" />
                </div>
                <div className="center pb-[20px]">
                  <h3 className='text-[#fff] text-[24px]'>Choose your takeaway shop</h3>
                  
                </div>
                <div className="bottom ">
                <p className='text-center text-[#fff]  text-[15px]'>Find not only shops nearby but also shops on your way to go!Browse the list of many shops, menus</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
            <div className="flex items-center justify-center h-full flex-col pl-[50px] pr-[50px]">
                <div className="top pb-[20px]">
                  <img src={hand} alt="" />
                </div>
                <div className="center pb-[20px]">
                  <h3 className='text-[#fff] text-[24px]'>Pay and get your drink</h3>
                  
                </div>
                <div className="bottom">
                <p className='text-center text-[#fff] text-[15px]'>Choose from different payment methods. That's it, enjoy your coffee!</p>
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
