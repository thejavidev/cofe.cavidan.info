import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { beans2, coffe_w, coffee2, hand, map } from '../assets';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t] = useTranslation("translation");
  return (
    <>
      <div className=''>
        <section className="  md:h-full md:pt-[40px]  flex items-center overflow-hidden ">
          <Container fluid>
            <Row className='items-center'>
              <Col xl={6} lg={6} md={12} className='pl-[150px] xl:pl-[40px] lg:pl-[0]'>
                <div className="flex items-start lg:items-center lg:justify-center justify-start h-full  flex-col">
                  <h1 className='text-[#fff] text-[72px] font-[600] xl:text-[62px] lg:text-center text-13'>{t("text1")}<br />{t("text2")}
                  </h1>
                  <p className='text-[32px] xl:text-[25px] text-[#fff] mt-[20px]'>{t("text3")}</p>
                  <div className="search pt-[50px]">
                    <Link to='/menu' className='bg-[#936532]  text-[#fff] pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[20px] rounded-[10px] capitalize'>
                      {t("map")}
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={12} className=' bg-right'>
                <div className="flex items-center justify-start lg:justify-center relative bg-right-alt">
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
              <h1 className='text-[42px] font-[600] text-[#fff] xl:text-[30px]'>{t("text4")}</h1>
              <h1 className='text-[42px] font-[600] text-[#fff] xl:text-[30px]'>{t("text5")}</h1>
            </div>
            <Row className='mt-[30px]'>
              <Col lg={4} md={12} className='lg:mb-[30px]'>
                <div className="hover-item flex items-center justify-center h-full flex-col pl-[50px] pr-[50px]">
                  <div className="top pb-[20px]">
                    <img src={map} alt="" />
                  </div>
                  <div className="center pb-[20px]">
                    <h3 className='text-[#fff] text-[24px] font-[500]'>{t("text6")}</h3>

                  </div>
                  <div className="bottom pl-[50px] pr-[50px]">
                    <p className='text-center text-[#fff] text-[15px]'>{t("text7")}</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} className='lg:mb-[30px]'>
                <div className="hover-item flex items-center justify-center h-full flex-col pl-[50px] pr-[50px]">
                  <div className="top pb-[20px]">
                    <img src={coffe_w} alt="" />
                  </div>
                  <div className="center pb-[20px]">
                    <h3 className='text-[#fff] text-[24px] font-[500]'>{t("text8")}</h3>

                  </div>
                  <div className="bottom ">
                    <p className='text-center text-[#fff]  text-[15px]'>{t("text9")}</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} className='lg:mb-[30px]'>
                <div className="hover-item flex items-center justify-center h-full flex-col pl-[50px] pr-[50px]">
                  <div className="top pb-[20px]">
                    <img src={hand} alt="" className='' />
                  </div>
                  <div className="center pb-[20px]">
                    <h3 className='text-[#fff] text-[24px] font-[500]'>{t("text10")}</h3>

                  </div>
                  <div className="bottom">
                    <p className='text-center text-[#fff] text-[15px]'>{t("text11")}</p>
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
