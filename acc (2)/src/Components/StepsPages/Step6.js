import logo from '../StyleFiles/logouai.jpg'
import "../StyleFiles/Step6.css"
import {Button,Dropdown,DropdownButton,Form,Navbar,Row,Col} from 'react-bootstrap';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

export default function Step6(){
  const navigate = useNavigate();
  const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
  const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
  const [proyectName, setProyectName] = useState("")
  const [proyectDetails,setpPoyectDetails] = useState("")
  const [proyectRole,setProyectRole] = useState("")
  const [selectedItem, setSelectedItem] = useState(t("Step6.drpde1"));

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };
  const handleLogout=(e)=>{
    localStorage.clear();
    navigate("/")
  };
  const pageHandler=async(e)=>{
    localStorage.setItem("page","7")
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
        navigate("/Step7")
      } 
       else if((response.status === 500)){
          localStorage.setItem("page","6")
          alert("Error 500")}
    } catch (error){
      localStorage.setItem("page","6")
      console.log(error)
      alert("Hubo un error")
    }
  }
  const HandlerStep6=async(e)=>{
    localStorage.setItem("page","4")
    e.preventDefault()
    try{
      const url = "http://127.0.0.1:5000/save_proyect_internship"
      const options = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({ 
          "user": localStorage.getItem("user"),
          "proyect_name": proyectName ,
          "proyect_details": proyectDetails ,
          "proyect_participation": proyectRole ,
          "project_specialty": selectedItem
        })
      }
      const response = await fetch(url,options)
      if (response.status === 200){
        pageHandler(e);
      } 
       else if((response.status === 500)){
          alert("Error 500")}
    } catch (error){
      console.log(error)
      alert("Hubo un error")
    }
  };

  return(
    <div>
      <div className='Top_Step'>
         <Navbar expand="lg" className="Top_Navbar_Step"  fixed="top">
            <div className= 'logoUAI_Step'><img src={logo} alt = "logo" width= "100%"/></div>
            <div className='Top_Navbar_div_Step'>
               <Row>
                  <Col><p className="Current_Step">{t("Landing.crntstep")}6</p></Col>
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

      <div className='Main_Step6'>
        <div className='Main_Step6_Text'>
          <h3 className='Main_Step6_Tittle'><strong>{t("Step6.t1")}<p>{t("Step6.t2")}</p></strong></h3>
          {/*Nombre del proyecto*/}
          <Form.Group className="mb-3"  >
            <Form.Label>{t("Step6.t3")}</Form.Label>
            <Form.Control size="lg" type="text" placeholder={t("Step6.ph")} onChange={(e)=>{setProyectName(e.target.value)}}/>
          </Form.Group>
          {/*Detalles del proyecto*/}
          <Form.Group className="mb-3" >
            <Form.Label>{t("Step6.t4")}</Form.Label>
            <Form.Control size="lg" type="text" placeholder={t("Step6.ph")} onChange={(e)=>{setpPoyectDetails(e.target.value)}}/>
          </Form.Group>
          {/*Roles y participacion*/}
          <Form.Group className="mb-3" >
            <Form.Label>{t("Step6.t5")}</Form.Label>
            <Form.Control size="lg" type="text" placeholder={t("Step6.ph")} onChange={(e)=>{setProyectRole(e.target.value)}}/>
          </Form.Group>
          {/*Especialidad */}
          <div className='Main_Step6_Dropdown'>
            <Row>
              <Col>
                <Form.Group variant="Main_Step6_Button1" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{t("Step6.drpdt")} </Form.Label>
                <DropdownButton size="lg" variant="Main_Step6_Button1" title={selectedItem} onSelect={handleSelect}>
                    <Dropdown.Item eventKey={t("Step6.drpde1")}> {t("Step6.drpde1")}</Dropdown.Item>
                    <Dropdown.Item eventKey={t("Step6.drpde2")}>{t("Step6.drpde2")} </Dropdown.Item>
                    <Dropdown.Item eventKey={t("Step6.drpde3")}> {t("Step6.drpde3")}</Dropdown.Item>
                    <Dropdown.Item eventKey={t("Step6.drpde4")}>{t("Step6.drpde4")} </Dropdown.Item>
                    <Dropdown.Item eventKey={t("Step6.drpde5")}> {t("Step6.drpde5")}</Dropdown.Item>
                    <Dropdown.Item eventKey={t("Step6.drpde6")}>{t("Step6.drpde6")} </Dropdown.Item>
                    <Dropdown.Item eventKey={t("Step6.drpde7")}> {t("Step6.drpde7")}</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
              </Col>
              <Col>
                <Button variant='Main_Step6_Button2' size='lg' onClick={HandlerStep6} >{t("Step6.btn")} </Button>
              </Col>
            </Row>
            
          </div>
        </div>
      </div>
      
    </div>
    )
} 