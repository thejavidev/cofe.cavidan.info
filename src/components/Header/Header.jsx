import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { header_logo } from '../../assets';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t, i18n] = useTranslation("translation");
  const [open, setOpen] = useState(false);

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  }
  const langChecker = useCallback((lang = "az") => {
    return lang !== localStorage.getItem("i18nextLng")
  },[])
  const langs = ["az", "ru", "en"];
  const myLang = langs?.filter(langChecker);


  return (
    <>
      <header className='fixed top-[0px] left-[0] right-[0] z-[999] bg-[#936532] p-[10px]'>
        <Container fluid className='pl-[150px] pr-[150px]'>
          <nav className='flex justify-between items-center w-full'>
            <div className="left">
              <Link to={'/'}>
              <img src={header_logo} alt="" />
              </Link>
            </div>
            <div className="center">
                <ul className='flex w-full gap-4'>
                  <li>
                    <NavLink to={'/menu'} className='capitalize text-[#fff] text-[17px]'>Cofeshop</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/map'} className='capitalize text-[#fff] text-[17px]'>map</NavLink>
                  </li>
                </ul>
            </div>
            <div className="right">

            </div>
          </nav>
        </Container>
      </header>
    </>
  )
}

export default Header
