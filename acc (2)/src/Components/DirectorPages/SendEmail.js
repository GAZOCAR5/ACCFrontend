import "../StyleFiles/Modify1.css"
import logo from '../StyleFiles/logouai.jpg'
import { useNavigate } from "react-router-dom";
import {Navbar,Nav,Button,Table,Form,DropdownButton,Dropdown,Col,Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';


export default function SendEmail(){
   const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
   const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
   const navigate = useNavigate(); /*Variable utilizada para redirigir al Modify1 page*/
   const [emailStudent, setEmailStudent] = useState("");
   const [fullNameSupervisor, setFullNameSupervisor] = useState("");
   const [companyName, setCompanyName] = useState("");
   const [emailSupervisor, setEmailSupervisor] = useState("");
   const [grade1,setGrade1] = useState("");
   const [grade2,setGrade2] = useState("");
   const [grade3,setGrade3] = useState("");
   const [grade4,setGrade4] = useState("");
   const [selectedItem1, setSelectedItem1] = useState("Carrera");
   const [selectedItem2, setSelectedItem2] = useState("Generación");
   const [selectedItem3, setSelectedItem3] = useState("Paso");
   const handleSelect1 = (eventKey) => {
      setSelectedItem1(eventKey);
   };
   const handleSelect2 = (eventKey) => {
      setSelectedItem2(eventKey);
   };
   const handleSelect3 = (eventKey) => {
      setSelectedItem3(eventKey);
   };
   const saveHandler=(e)=> {alert("Enviado con exito!")}
   const handleLogout=(e)=>{
      localStorage.clear();
      navigate("/")
   };
  return(
    <div>
      <div className='NavBar_Landing2'>
         <Navbar expand="lg" className="Top_Navbar_Landing2"  fixed="top">
            <div className= 'logoUAI_Landing2'><img src={logo} alt = "logo" width= "100%"/></div>
            <div>
               <DropdownButton variant="Landing2_Language_Dropdown" title={t('Language.tittle')} align="end" onSelect={changeLanguage}>
                  <Dropdown.Item eventKey={"es"}>{t('Language.l1')}</Dropdown.Item>
                  <Dropdown.Item eventKey={"en"}>{t('Language.l2')}</Dropdown.Item>
               </DropdownButton>
            </div>
            <Nav className="Navbar_elements_Landing2" variant="underline" defaultActiveKey={"1"}>
               <Nav.Item>
                  <Button variant='primary' size="lg" href="/Director">Dash Board</Button>
               </Nav.Item>
               <Nav.Item>
                  <Button variant='Top_Navbar_item_4_L2' size="lg" onClick={handleLogout}>Logout</Button>
               </Nav.Item>
            </Nav>
         </Navbar>
      </div>
      <div className='Main_Modify1'>
         <div className='Main_Modify1_Content'>
            <ul> 
               <br/>
               <Form>
                  <Row>
                     <Col>
                        <DropdownButton size="lg" variant="primary" title={selectedItem1} onSelect={handleSelect1}>
                           <Dropdown.Item eventKey={t("Step6.drpde1")}> {t("Step6.drpde1")}</Dropdown.Item>
                           <Dropdown.Item eventKey={t("Step6.drpde2")}>{t("Step6.drpde2")} </Dropdown.Item>
                           <Dropdown.Item eventKey={t("Step6.drpde3")}> {t("Step6.drpde3")}</Dropdown.Item>
                           <Dropdown.Item eventKey={t("Step6.drpde4")}>{t("Step6.drpde4")} </Dropdown.Item>
                           <Dropdown.Item eventKey={t("Step6.drpde5")}> {t("Step6.drpde5")}</Dropdown.Item>
                           <Dropdown.Item eventKey={t("Step6.drpde6")}>{t("Step6.drpde6")} </Dropdown.Item>
                           <Dropdown.Item eventKey={t("Step6.drpde7")}> {t("Step6.drpde7")}</Dropdown.Item>
                        </DropdownButton>
                     </Col>
                     
                     <Col>
                        <DropdownButton size="lg" variant="primary" title={selectedItem2} onSelect={handleSelect2}>
                           <Dropdown.Item eventKey={2018}> {2018}</Dropdown.Item>
                           <Dropdown.Item eventKey={2019}> {2019} </Dropdown.Item>
                           <Dropdown.Item eventKey={2020}> {2020}</Dropdown.Item>
                           <Dropdown.Item eventKey={2021}> {2021} </Dropdown.Item>
                           <Dropdown.Item eventKey={2022}> {2022}</Dropdown.Item>
                           <Dropdown.Item eventKey={2023}> {2023} </Dropdown.Item>
                           <Dropdown.Item eventKey={2024}> {2024}</Dropdown.Item>
                        </DropdownButton>
                     </Col>

                     <Col>
                        <DropdownButton size="lg" variant="primary" title={selectedItem3} onSelect={handleSelect3}>
                              <Dropdown.Item eventKey={1}>  {1}</Dropdown.Item>
                              <Dropdown.Item eventKey={2}>  {2} </Dropdown.Item>
                              <Dropdown.Item eventKey={3}>  {3}</Dropdown.Item>
                              <Dropdown.Item eventKey={4}>  {4} </Dropdown.Item>
                              <Dropdown.Item eventKey={5}>  {5}</Dropdown.Item>
                              <Dropdown.Item eventKey={6}>  {6} </Dropdown.Item>
                              <Dropdown.Item eventKey={7}>  {7}</Dropdown.Item>
                              <Dropdown.Item eventKey={8}>  {8}</Dropdown.Item>
                              <Dropdown.Item eventKey={9}>  {9}</Dropdown.Item>
                              <Dropdown.Item eventKey={10}> {10}</Dropdown.Item>
                              <Dropdown.Item eventKey={11}> {11}</Dropdown.Item>
                              <Dropdown.Item eventKey={12}> {12}</Dropdown.Item>
                        </DropdownButton>
                     </Col>
                  </Row>
                  <Row>
                     <Form.Group className="fname_text">
                        <Form.Label>Nombre completo Supervisor</Form.Label>
                        <Form.Control className="textInput1" type="text" placeholder={"Escriba aquí el correo a enviar"} /> 
                     </Form.Group>
                  </Row>
               </Form>
               <br/>
               
            </ul>
            <Button variant="danger" href="/Director">Cancelar</Button>
            <Button variant="success" onClick={saveHandler}>Enviar</Button>
         </div>
      </div>   
    </div>
    )
} 
