import React from 'react'
import Container from 'react-bootstrap/Container';
const Map = () => {
    return (
        <>
            <section className='w-full h-[100vh] pt-[55px] bg-[#fff] relative'>
                <div className="search  w-full absolute top-[55px] transform left-[50%] z-[30] ">
                    <Container className='bg-[#fff] pt-[20px] pb-[20px] box-shadow-g rounded-md'>
                        <div className="pl-[100px] pr-[10px]">
                            <input type="search" placeholder='Məkan seçin' className='w-full pt-[10px] rounded-md pb-[10px] pl-[15px] pr-[15px] border-[0] outline-[0] border-1 border-[#B6B6B6]' />
                        </div>
                    </Container>
                </div>
                <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3085403542586!2d49.843703289638476!3d40.37985388426795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0a3ea7028d%3A0xac9d73dbd66392c8!2s28%20May!5e0!3m2!1str!2saz!4v1690016220621!5m2!1str!2saz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </section>
        </>
    )
}

export default Map
