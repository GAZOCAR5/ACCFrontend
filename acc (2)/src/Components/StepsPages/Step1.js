import "../StyleFiles/Step1.css"
import logo from '../StyleFiles/logouai.jpg'
import {Navbar,Button,Dropdown,DropdownButton,Row,Col} from 'react-bootstrap';
import pdfURL from '../StyleFiles/Syllabus y Rubricas Pasantias.pdf';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Step1(){
   const navigate = useNavigate(); /*Variable utilizada para redirigir al landing page*/
   const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
   const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
   const username = localStorage.getItem('username');
   const HandlerStep1=async(e)=>{
      localStorage.setItem("page","10")
      e.preventDefault()
      try{
        const url = "http://127.0.0.1:5000/pages"
        const options = {
          method: "POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({ "user":localStorage.getItem('user'), "page": localStorage.getItem('page')})
        }
        const response = await fetch(url,options)
        if (response.status === 200){
          navigate("/Step2")
        } 
         else if((response.status === 500)){
            localStorage.setItem("page","1")
            alert("Error 500")}
      } catch (error){
            localStorage.setItem("page","1")
            console.log(error)
            alert("Hubo un error")
      }
   };
   const handleLogout=(e)=>{
   localStorage.clear();
   navigate("/")
   };
   return(
      <div /* {t("")}*/>
         <div className='Top_Step'>
         <Navbar expand="lg" className="Top_Navbar_Step"  fixed="top">
            <div className= 'logoUAI_Step'><img src={logo} alt = "logo" width= "100%"/></div>
            <div className='Top_Navbar_div_Step'>
               <Row>
                  <Col><p className="Current_Step">{t("Landing.crntstep")}1</p></Col>
                  <Col>
                     <DropdownButton variant="Step_Language_Dropdown" title={t('Language.tittle')} align="end" onSelect={changeLanguage}>
                        <Dropdown.Item eventKey={"es"}>{t('Language.l1')}</Dropdown.Item>
                        <Dropdown.Item eventKey={"en"}>{t('Language.l2')}</Dropdown.Item>
                     </DropdownButton>
                  </Col>
                  <Col>
                     <DropdownButton  className="Top_Navbar_item_1" id="Top_Navbar_item_1" title={t("Navbar.btn1")}>
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
                        <Dropdown.Item href="/Step12">{t("Navbar.s12")}</Dropdown.Item>
                     </DropdownButton>
                  </Col>
                  <Col><Button className='Top_Navbar_item_2'  variant="primary">{t("Navbar.btn2")}</Button></Col>
                  <Col><Button className='Top_Navbar_item_3'  variant="primary">{t("Navbar.btn3")}</Button></Col>
                  <Col><Button variant="Top_Navbar_item_4"  onClick={handleLogout}>{t("Navbar.btn4")}</Button></Col>
               </Row>
            </div>
         </Navbar>
         </div>

         <div className='Main_Step1' >
            <div className="Main_Step1_Content">
               <iframe className = "rules_pdf"src={pdfURL} width="100%" height="80%" title="PDF Document"></iframe>
               <div className="ConfirmationButton_Step1">
                  <Button variant="success" size="lg" onClick={HandlerStep1}>{t("Landing.btn2")}</Button>
               </div>
            </div>
         </div >
      </div>
    )
} 