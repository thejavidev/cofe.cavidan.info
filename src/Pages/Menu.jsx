import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup  from 'react-bootstrap/InputGroup';
import {
  hot1, mapsmall, menu_cover, cafemocha,
  very_vanilla_latte,
  white_Chocolate_Mocha,
  classic_hot_chocolate,
  Mocha_Caramelatte,
  white_Hot_Chocolate,
  creme_brulee_latte,
  french_vanilla_spice,
  oregon_chai_tea_latte,
  caramelatte,
  Creamy_Hot_Cocoa,
  chocoberry,
  prd_tea_cup,
  irish_nut_creme,
  ChocolateMacadamiaLatte,
  cappucino,
  cafelatte,
  americano,
  demlenmis_taze_kahve,
  strawberry_white_hot_chocolate,
  flat_white,
  macchiato,
  Toffee_Nut_Latte,
  ristretto,
  piccolo_latte,
  espresso,
  prd_turkish_coffee,
  very_Vanilla_Chiller,
  creme_brulee_chiller,
  gjs_Original_Iced_Chocolate,
  iced_Coffee,
  iced_Mocha,
  iced_Latte,
  oregon_chai_latte,
  coconut_White_Chocolate,
  strawberriesn_Cream,
  choco_Caramel,
  cocoa_Loco,
  macchiatoint_Chocolate_Bomb,
  macchiatoango_Crash_su,
  prd_stravberry,
  macchiatoixed_Berry_Bash_su,
  macchiatoixed_Berry_Bash_yagsiz_sut,
  macchiatoango_Crash_yagsiz,
  white_Chocolate_Mocha_Chiller,
  cookiesn_Cream,
  ev_Tipi_Limonata,
  mocha_java_voltage,
  caramel_voltage,
  iced_Americano,
  toffee_Nut_Chiller,
  chocolate_Macademia_Chiller,
  ayvalik_tostu,
  cikolatali_kek,
  cikolatali_muffin,
  cikolatali_cookie,
  dag_meyveli_pasta,
  dana_jambon,
  dort_peynirli_sandvic,
  fistikli_pasta,
  kavurmali_tost ,
  limonlu_cheesecake,
  limonlu_kek,
  macaron ,mermer_kek,
  mozaik_pasta,
  peynirli_pogaca,
  safinaz_pogaca,
  zeytinli_acma,
} from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel,Navigation } from "swiper";
import { BsArrowLeft,BsArrowRight } from 'react-icons/Bs';
const Menu = () => {
  const [search, setSearch] = useState('')
  const fakedata = [
    {
      id: 1,
      name: "fuzzy Coffee Wine",
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
  const hotdrinks = [
    {
      id: 1,
      src: cafemocha,
      price: 4.99,
      name: "Caffé Mocha",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 2,
      src: caramelatte,
      price: 4.99,
      name: "Caramelatte",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 3,
      src: very_vanilla_latte,
      price: 4.99,
      name: "Very Vanilla Latte",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 4,
      src: white_Chocolate_Mocha,
      price: 4.99,
      name: "White Chocolate Mocha",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 5,
      src: classic_hot_chocolate,
      price: 4.47,
      name: "Classic Hot Chocolate",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 6,
      src: white_Hot_Chocolate,
      price: 4.47,
      name: "White Hot Chocolate",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 7,
      src: Mocha_Caramelatte,
      price: 4.47,
      name: "Mocha Caramelatte",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 8,
      src: creme_brulee_latte,
      price: 4.47,
      name: "Créme Brulée Latte",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 9,
      src: french_vanilla_spice,
      price: 4.47,
      name: "French Vanilla Spice",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 10,
      src: oregon_chai_tea_latte,
      price: 4.47,
      name: "Oregon Chai Tea Latte",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 11,
      src: Creamy_Hot_Cocoa,
      price: 4.47,
      name: "GJ`s Creamy Hot Cocoa",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 12,
      src: chocoberry,
      price: 4.47,
      name: "Chocoberry",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 13,
      src: prd_tea_cup,
      price: 4.47,
      name: "Dəmlənmiş Təzə Çay (Fincan)",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 14,
      src: irish_nut_creme,
      price: 4.47,
      name: "Irish Nut Créme",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 15,
      src: ChocolateMacadamiaLatte,
      price: 4.47,
      name: "Chocolate Macadamia Latte",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 16,
      src: cappucino,
      price: 4.47,
      name: "Cappuccino",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 17,
      src: prd_tea_cup,
      price: 4.47,
      name: "Çay",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 18,
      src: cafelatte,
      price: 4.47,
      name: "Caffé Latte",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 19,
      src: americano,
      price: 4.47,
      name: "Caffé Americano",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 20,
      src: demlenmis_taze_kahve,
      price: 4.47,
      name: "Filtre Kahve",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 21,
      src: flat_white,
      price: 4.47,
      name: "Flat White",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 22,
      src: macchiato,
      price: 4.47,
      name: "Macchiato",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 23,
      src: strawberry_white_hot_chocolate,
      price: 4.47,
      name: "Strawberry White Hot Chocolate",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 24,
      src: Toffee_Nut_Latte,
      price: 4.47,
      name: "Toffee Nut Latte",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 25,
      src: ristretto,
      price: 4.47,
      name: "Ristretto",
      altname: "Lorem ipsum dolor sit amet."
    },

    {
      id: 26,
      src: piccolo_latte,
      price: 4.47,
      name: "Piccolo Latte",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 27,
      src: espresso,
      price: 4.47,
      name: "Espresso",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 28,
      src: prd_turkish_coffee,
      price: 4.47,
      name: "Türk Qəhvəsi",
      altname: "Lorem ipsum dolor sit amet."
    },
  ]
  const colddrinks = [
    {
      id: 1,
      src: very_Vanilla_Chiller,
      price: 4.99,
      name: "Very Vanilla Chiller",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 2,
      src: creme_brulee_chiller,
      price: 4.99,
      name: "Créme Brulée Chiller",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 3,
      src: gjs_Original_Iced_Chocolate,
      price: 4.99,
      name: "GJ`s Original Iced Chocolate",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 4,
      src: iced_Coffee,
      price: 4.99,
      name: "GJ`s Iced Coffee",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 5,
      src: iced_Mocha,
      price: 4.47,
      name: "Iced Mocha",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 6,
      src: iced_Latte,
      price: 4.47,
      name: "Iced Latte",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 7,
      src: oregon_chai_latte,
      price: 4.47,
      name: "Oregon Chai Tea",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 8,
      src: coconut_White_Chocolate,
      price: 4.47,
      name: "Coconut White Chocolate",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 9,
      src: strawberriesn_Cream,
      price: 4.47,
      name: "Strawberries`n Cream",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 10,
      src: choco_Caramel,
      price: 4.47,
      name: "Choco Caramel",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 11,
      src: cocoa_Loco,
      price: 4.47,
      name: "Cocoa Loco",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 12,
      src: macchiatoint_Chocolate_Bomb,
      price: 4.47,
      name: "Mint Chocolate Bomb",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 13,
      src: french_vanilla_spice,
      price: 4.47,
      name: "French Vanilla Spice Chiller",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 14,
      src: macchiatoango_Crash_su,
      price: 4.47,
      name: "Mango",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 15,
      src: prd_stravberry,
      price: 4.47,
      name: "Çiyələk",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 16,
      src: macchiatoixed_Berry_Bash_su,
      price: 4.47,
      name: "Qarışıq Meyvəli",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 17,
      src: macchiatoixed_Berry_Bash_yagsiz_sut,
      price: 4.47,
      name: "Qarışıq Meyvəli",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 18,
      src: prd_stravberry,
      price: 4.47,
      name: "Çiyələk",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 19,
      src: macchiatoango_Crash_yagsiz,
      price: 4.47,
      name: "Mango",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 20,
      src: white_Chocolate_Mocha_Chiller,
      price: 4.47,
      name: "White Chocolate Mocha Chiller",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 21,
      src: cookiesn_Cream,
      price: 4.47,
      name: "Cookies`n Cream",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 22,
      src: ev_Tipi_Limonata,
      price: 4.47,
      name: "Ev Tipi Limonata",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 23,
      src: mocha_java_voltage,
      price: 4.47,
      name: "Mocha Java Voltage",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 24,
      src: caramel_voltage,
      price: 4.47,
      name: "Caramel Voltage",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 25,
      src: iced_Americano,
      price: 4.47,
      name: "Gj`s Iced Americano",
      altname: "Lorem ipsum dolor sit amet."
    },

    {
      id: 26,
      src: toffee_Nut_Chiller,
      price: 4.47,
      name: "Toffee Nut Chiller",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 27,
      src: chocolate_Macademia_Chiller,
      price: 4.47,
      name: "Chocolate Macadamia Chiller",
      altname: "Lorem ipsum dolor sit amet."
    },
    
  ]
  const dissertation = [
    {
      id: 1,
      src: ayvalik_tostu,
      price: 4.99,
      name: "Ayvalık Tost",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 2,
      src: cikolatali_kek,
      price: 4.99,
      name: "Kavurmalı Sandviç",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 3,
      src: cikolatali_muffin,
      price: 4.99,
      name: "Çikolatalı Cookie",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 4,
      src: cikolatali_cookie,
      price: 4.99,
      name: "Mermer Kek",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 5,
      src: dag_meyveli_pasta,
      price: 4.47,
      name: "Limonlu Cheesecake",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 6,
      src: dana_jambon,
      price: 4.47,
      name: "Mozaik pasta",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 7,
      src: dort_peynirli_sandvic,
      price: 4.47,
      name: "Fıstıklı Pasta",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 8,
      src: fistikli_pasta,
      price: 4.47,
      name: "Dört Peynirli",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 9,
      src: kavurmali_tost,
      price: 4.47,
      name: "Dana Jambonlu & Cheddar",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 10,
      src: limonlu_cheesecake,
      price: 4.47,
      name: "Zeytinli Açma",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 11,
      src: limonlu_kek,
      price: 4.47,
      name: "Macaron Antep Fıstık",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 12,
      src: macaron,
      price: 4.47,
      name: "Macaron Çikolata",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 13,
      src: mermer_kek,
      price: 4.47,
      name: "Macaron Karamel",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 14,
      src: mozaik_pasta,
      price: 4.47,
      name: "Macaron Frambuazlı",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 15,
      src: peynirli_pogaca,
      price: 4.47,
      name: "Macaron Vanilya",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 16,
      src: safinaz_pogaca,
      price: 4.47,
      name: "Safinaz",
      altname: "Lorem ipsum dolor sit amet."
    },
    {
      id: 17,
      src: zeytinli_acma,
      price: 4.47,
      name: "Macaron Hindistan Cevizli",
      altname: "Lorem ipsum dolor sit amet."
    },
   
  ]

  return (
    <>
      <div>
        <section>
          <Container fluid className='pl-[50px] pr-[50px]'>
            <Row>
              <Col lg={2} className=' mt-[30px] ' >
                <Form className=''>
                  <InputGroup className=''>
                    <Form.Control className='input-control ' onChange={(e)=>setSearch(e.target.value)} placeholder='axtar...' />
                  </InputGroup>
                </Form>
                <div className="flex flex-col mt-[30px] h-[1000px] overflow-y-scroll webkit">
                  {
                    fakedata && fakedata?.filter((item)=>{
                      return search?.toLowerCase()=== ''
                      ? item
                      :item?.name?.toLowerCase()?.includes(search)
                    })?.map((cur, i) => (
                      <div key={i} className="w-full flex flex-col bg-[#fffaf5] border-2 border-[#B6B6B6] tr hover:bg-[#936532] rounded-md  p-[10px] mb-[20px]">
                        <div className="flex">
                          <span className='block bg-[#331C00] w-[16px] h-[16px] rounded-[16px]'></span>
                          <h3 className='capitalize text-[14px] text-[#331C00] font-[600] pl-[15px] '>{cur?.name}</h3>
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
              <Col lg={10} className=''>
                <div className="relative">
                  <img src={menu_cover} className='w-full h-[200px]' alt="" />
                </div>
                <div className="hot mt-[30px] bg-[#fff] p-[20px] rounded-md">
                  <h2 className='capitalize mb-[20px] font-[500] text-[20px]'>İsti İçkilər</h2>
                  <div className=''>
                    <Swiper
                      slidesPerView={5}
                      spaceBetween={10}
                      mousewheel={true}
                      modules={[Mousewheel,Navigation]}
                      navigation={{
                          nextEl: ".prev",
                          prevEl: ".next"
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 2,

                        },
                        768: {
                          slidesPerView: 4,

                        },
                        1024: {
                          slidesPerView: 5,

                        },
                      }}

                      className="mySwiper "
                    >
                      {
                        hotdrinks && hotdrinks?.map((cur, i) => (
                          <SwiperSlide key={i}>
                            <div className='flex flex-col w-full cursor-pointer hot_coffee border-2 p-[10px] rounded-md bg-[#fffaf5]' >
                              <div className='bg-[#ccc]  rounded-md hot_img'>
                                <img src={cur?.src} alt="" className='w-full h-[130px] object-contain ' />
                              </div>
                              <h2 className='text-[#1D1D1D] text-[16px] font-[500] pt-[10px]'>{cur?.name}</h2>
                              <p className='text-[#888888] text-[14px] pt-[6px]'>{cur?.altname}</p>
                              <p className='text-[#1D1D1D] text-[16px] pt-[6px]'>{cur?.price} &#8380;</p>
                            </div>
                          </SwiperSlide>
                        ))
                      }

                    </Swiper>
                  </div>
                </div>
                <div className="hot mt-[20px] bg-[#fff] p-[20px] rounded-md">
                  <h2 className='capitalize mb-[20px] font-[500] text-[20px]'>Soyuq İçkilər</h2>
                  <div className=''>
                    <Swiper
                      slidesPerView={5}
                      spaceBetween={10}

                      breakpoints={{
                        640: {
                          slidesPerView: 2,

                        },
                        768: {
                          slidesPerView: 4,

                        },
                        1024: {
                          slidesPerView: 5,

                        },
                      }}

                      className="mySwiper "
                    >
                      {
                        colddrinks && colddrinks?.map((cur, i) => (
                          <SwiperSlide key={i}>
                            <div className='flex flex-col w-full cursor-pointer hot_coffee border-2 p-[10px] rounded-md bg-[#fffaf5]'>
                              <div className='bg-[#ccc]  rounded-md hot_img'>
                                <img src={cur?.src} alt="" className='w-full h-[130px] object-contain ' />
                              </div>
                              <h2 className='text-[#1D1D1D] text-[16px] font-[500] pt-[10px]'>{cur?.name}</h2>
                              <p className='text-[#888888] text-[14px] pt-[6px]'>{cur?.altname}</p>
                              <p className='text-[#1D1D1D] text-[16px] pt-[6px]'>{cur?.price} &#8380;</p>
                            </div>
                          </SwiperSlide>
                        ))
                      }

                    </Swiper>
                  </div>
                </div>
                <div className="hot mt-[20px] bg-[#fff] p-[20px] rounded-md">
                  <h2 className='capitalize mb-[20px] font-[500] text-[20px]'>Disertlər</h2>
                  <div className=''>
                    <Swiper
                      slidesPerView={5}
                      spaceBetween={10}

                      breakpoints={{
                        640: {
                          slidesPerView: 2,

                        },
                        768: {
                          slidesPerView: 4,

                        },
                        1024: {
                          slidesPerView: 5,

                        },
                      }}

                      className="mySwiper "
                    >
                      {
                        dissertation && dissertation?.map((cur, i) => (
                          <SwiperSlide key={i}>
                            <div className='flex flex-col w-full cursor-pointer hot_coffee border-2  p-[10px] rounded-md bg-[#fffaf5]'>
                              <div className='bg-[#ccc]  rounded-md hot_img overflow-hidden'>
                                <img src={cur?.src} alt="" className='w-full h-[130px] object-contain ' />
                              </div>
                              <h2 className='text-[#1D1D1D] text-[16px] font-[500] pt-[10px]'>{cur?.name}</h2>
                              <p className='text-[#888888] text-[14px] pt-[6px]'>{cur?.altname}</p>
                              <p className='text-[#1D1D1D] text-[16px] pt-[6px]'>{cur?.price} &#8380;</p>
                            </div>
                          </SwiperSlide>
                        ))
                      }

                    </Swiper>
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

export default Menu
