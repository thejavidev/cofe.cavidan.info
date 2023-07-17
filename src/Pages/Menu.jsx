import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { mapsmall } from '../assets';

const Menu = () => {

  const fakedata = [
    {
      id: 1,
      name: "Fuzzy Coffee Wine",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 2,
      name: "Starbucks",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 3,
      name: "SecondCup",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 4,
      name: "Gloria Jeans",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 5,
      name: "Baku Bay Cafe",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 5,
      name: "Gazelli Cafe",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 6,
      name: "Book and Coffee",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 7,
      name: "Coffee Moffie",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 8,
      name: "Coffee Land",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 9,
      name: "Coffee Go",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 10,
      name: "Coffee Baku",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 11,
      name: "Coffee Space Baku",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 12,
      name: "Coffeebar Torgovaya",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 13,
      name: "SocialBee Coffee Company",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 14,
      name: "Coffeelea Baku",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 15,
      name: "Cafe de Baku",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    },
    {
      id: 16,
      name: "Baku Bay Cafe",
      adress: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor",
      src: mapsmall
    }
  ]

  return (
    <>
      <div>
        <section>
          <Container fluid className='pl-[50px] pr-[50px]'>
            <Row>
              <Col lg={2} className=' mt-[30px] h-[800px] overflow-y-scroll webkit' >
                <input type="search" placeholder='Cofeshop axtar...' className='w-full pt-[10px] pb-[0px] pl-[20px] pr-[20px] bg-transparent placeholder:text-[#936532] placeholder:italic placeholder:opacity-50  border-b-[1px] border-[#000] outline-0' />
                <div className="flex flex-col mt-[30px]">
                  {
                    fakedata && fakedata?.map((cur, i) => (
                      <div key={i} className="w-full flex flex-col border-2 border-[#B6B6B6]  p-[10px] mb-[20px]">
                        <div className="flex">
                          <span className='block bg-[#331C00] w-[16px] h-[16px] rounded-[16px]'></span>
                          <h3 className='capitalize text-[14px] text-[#331C00] font-[600] pl-[15px]'>{cur?.name}</h3>
                        </div>
                        <div className="flex items-start pt-[10px]">
                          <img src={cur?.src} className='w-[20px] h-[20px] mt-[5px]' alt="" />
                          <p className='pl-[10px] text-[#B6B6B6]'>{cur?.adress}</p>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </Col>
              <Col lg={10} className='border-2 border-[#961e1e]'>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default Menu
