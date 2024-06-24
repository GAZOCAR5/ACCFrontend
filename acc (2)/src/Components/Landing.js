import "./StyleFiles/Landing.css"
import logo from './StyleFiles/logouai.jpg'
import {Navbar,Button,Dropdown,DropdownButton,Row,Col} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Landing(){
  const navigate = useNavigate(); /*Variable utilizada para redirigir al landing page*/
  const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
  const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
  const page = localStorage.getItem("page")

  const handleClickLanding=(e)=>{
    if (page === "0") 
      { localStorage.setItem("page","1")
        navigate("/Step1")}
    else {navigate("/Step"+page)}
  }
  const handleLogout=(e)=>{
    localStorage.clear();
    navigate("/")
  }
  
  return(
    <div /* {t("")}*/> 
    <div className='Top_landing'>
    <Navbar expand="lg" className="Top_Navbar_Landing"  fixed="top">
    <div className= 'logoUAI_Landing'><img src={logo} alt = "logo" width= "100%"/></div>
      <div className='Top_Navbar_div_Landing' >
        <Row>
          <Col>
              <DropdownButton size="lg" variant="Landing_Language_Dropdown" title={t('Language.tittle')} align="end" onSelect={changeLanguage}>
                <Dropdown.Item eventKey={"es"}>{t('Language.l1')}</Dropdown.Item>
                <Dropdown.Item eventKey={"en"}>{t('Language.l2')}</Dropdown.Item>
              </DropdownButton>
          </Col>
          <Col>
              <DropdownButton size="lg" variant="Top_Navbar_item_1L" title={t("Navbar.btn1")}>
                <Dropdown.Item href="/Step1">{t("Navbar.s1")}</Dropdown.Item>
                <Dropdown.Item href="/Step2">{t("Navbar.s2")}</Dropdown.Item>
                <Dropdown.Item href="/Step3">{t("Navbar.s3")}</Dropdown.Item>
                <Dropdown.Item href="/Step4">{t("Navbar.s4")}</Dropdown.Item>
                <Dropdown.Item href="/Step5">{t("Navbar.s5")}</Dropdown.Item>
                <Dropdown.Item href="/Step6">{t("Navbar.s6")}</Dropdown.Item>
                <Dropdown.Item href="/Step7">{t("Navbar.s7")}</Dropdown.Item>
                <Dropdown.Item href="/Step8">{t("Navbar.s8")}</Dropdown.Item>
                <Dropdown.Item href="/Step9">{t("Navbar.s9")}</Dropdown.Item>
                <Dropdown.Item href="/Step10">{t("Navbar.s10")}</Dropdown.Item>
                <Dropdown.Item href="/Step11">{t("Navbar.s11")}</Dropdown.Item>
                <Dropdown.Item href="/Step12">{t("Navbar.s12")}</Dropdown.Item>
              </DropdownButton>
          </Col>
          <Col><Button className='Top_Navbar_item_2L' size="lg" variant="primary">{t("Navbar.btn2")}</Button></Col>
          <Col><Button className='Top_Navbar_item_3L' size="lg" variant="primary">{t("Navbar.btn3")}</Button></Col>
          <Col><Button variant="Top_Navbar_item_4L" size="lg" onClick={handleLogout}>{t("Navbar.btn4")}</Button></Col>
        </Row>
      </div>
    </Navbar>
    </div>
    <div className='Main_Landing'>
      <div className="Main_Landing_Content">
        <h1><strong> {t("Landing.tittle")}</strong></h1>
        <Button variant="Main_Landing_Button" onClick={handleClickLanding}> {t("Landing.btn1")}</Button>
      </div>
      
    </div >
      
    </div>
    )
} 
