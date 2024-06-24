import logo from '../StyleFiles/logouai.jpg'
import {Navbar,Button,Dropdown,DropdownButton,Row,Col} from 'react-bootstrap';
import "../StyleFiles/Step5.css"
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Step5(){
  const navigate = useNavigate();
  const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
  const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
  const [data, setData] = useState("");
  const [approval,setApproval] = useState()
  
  useEffect(()=>{
   const options1 = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({"user":localStorage.getItem('user')})
   }
   fetch("http://127.0.0.1:5000/studentData",options1)
      .then(response => response.json(data))
      .then(data => {setData(data);console.log(data);setApproval(data.InternshipApproval)})
      .catch(error => console.error('Error fetching data:', error));
   },[]);
  
   let response_TEXT = ""
   if (approval === "True"){
      response_TEXT = "Step5.status2"
   } else if (approval === "False"){
      response_TEXT = "Step5.status1"
   };
  const HandlerStep5=async(e)=>{
    localStorage.setItem("page","6")
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
            navigate("/Step6")
         } 
         else if((response.status === 500)){
            localStorage.setItem("page","5")
            alert("Error 500")}
    }catch (error){
    console.log(error)
    localStorage.setItem("page","5")
    alert("Hubo un error")
    }
 }; 
  const renderContent = () => {
    if (approval === "False") {
      return <Button variant='Main_Step5_Button2' size="lg" disabled>{t("Step5.btn")}</Button>;
    }else if (approval === "True"){
      return <Button variant='Main_Step5_Button2' size="lg" onClick={HandlerStep5}>{t("Step5.btn")}</Button>;
    }else{console.log(approval)}
  }
  const handleLogout=(e)=>{
    localStorage.clear();
    navigate("/")
 }

  return(
    <div>
    <div className='Top_Step'>
         <Navbar expand="lg" className="Top_Navbar_Step"  fixed="top">
            <div className= 'logoUAI_Step'><img src={logo} alt = "logo" width= "100%"/></div>
            <div className='Top_Navbar_div_Step'>
               <Row>
                  <Col><p className="Current_Step">{t("Landing.crntstep")}5</p></Col>
                  <Col>
                     <DropdownButton variant="Step_Language_Dropdown" title={t('Language.tittle')} align="end" onSelect={changeLanguage}>
                        <Dropdown.Item eventKey={"es"}>{t('Language.l1')}</Dropdown.Item>
                        <Dropdown.Item eventKey={"en"}>{t('Language.l2')}</Dropdown.Item>
                     </DropdownButton>
                  </Col>
                  <Col>
                     <DropdownButton className="Top_Navbar_item_1" id="Top_Navbar_item_1" title={t("Navbar.btn1")}>
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
                  <Col><Button className='Top_Navbar_item_2' variant="primary">{t("Navbar.btn2")}</Button></Col>
                  <Col><Button className='Top_Navbar_item_3' variant="primary">{t("Navbar.btn3")}</Button></Col>
                  <Col><Button variant="Top_Navbar_item_4" onClick={handleLogout}>{t("Navbar.btn4")}</Button></Col>
               </Row>
            </div>
         </Navbar>
      </div>

    <div className='Main_Step5'>
      <div className='Main_Step5_Text'>
         <p><strong>{t("Step5.t1")} </strong></p>
         <p> {t("Step5.t2")} <strong>{t(response_TEXT)} </strong></p>
         <div className='Main_Step5_Buttons'>
            <Button variant="Main_Step2_Button1"  size="lg" href='/Landing'>{t("Step2.btn1")}</Button>{' '}
            {renderContent()}
        </div>
      </div>
    </div >
      
    </div>
    )
} 