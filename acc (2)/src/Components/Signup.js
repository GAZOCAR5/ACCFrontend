import React, { useState } from 'react';
import logo from './StyleFiles/logouai.jpg'
import "./StyleFiles/Signup.css";
import { useNavigate,Link } from "react-router-dom";
import {Button,Col,Row,Form,Tab,Tabs, Container,DropdownButton,Dropdown} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Signup(){
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("1"); /*Con esta Variable sabremos si el usuario se trata de un estudiante, un profesor o un supervisor */
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate(); /*Variable utilizada para redirigir al landing page*/
  const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
  const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
  const [selectedItem, setSelectedItem] = useState(t("Step6.drpde1"));
  const [selectedItem2, setSelectedItem2] = useState(2018);

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };
  const handleSelect2 = (eventKey) => {
    setSelectedItem2(eventKey);
  };

  const HandlerSignup=async(e)=>{ /*Esa es la función que se encargará de entregar la información de ingreso al back end */
    e.preventDefault()
    try{
    const url = "http://127.0.0.1:5000/Signup"
    const options = {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "user":username, "name":fullname, "password":password, "key":key, "specialty": selectedItem, "generation": selectedItem2 })
    }
    const response = await fetch(url,options)
    if (response.ok){
      alert("Registro exitoso")
      navigate("/");  
    }else if((response.status === 500)){
      alert("Error 500, intentelo más tarde")
    }
    else{
      alert("Algo salió mal")
    }
    }catch (error){
      alert("Hubo un error")
    }
    
  }
  return(
    </*{t("")} formato para texto traducido */>
    <body>
    <div className= 'logoUAI'><img src={logo} alt="logo" width="100%"/></div>
    <div className='Tabs'>
    <Tabs id="fill-tab-example" className="mb-3" activeKey={key} onSelect={(k) => setKey(k)} fill justify> 
      <Tab eventKey="1" title={t("Roles.r1")}></Tab>
      <Tab eventKey="2" title={t("Roles.r2")}></Tab>
      <Tab eventKey="3" title={t("Roles.r3")}></Tab>
      <Tab eventKey="4" title={t("Roles.r4")}></Tab>
    </Tabs>
    </div>
    <div className="wa">
    <Form>
      <Row>
        <Col><h3 className='Portal'>{t("Portal.tittle")}</h3></Col>
        <Col>
          <DropdownButton variant="Signup_Language_Dropdown" title={t('Language.tittle')} align="end" onSelect={changeLanguage}>
            <Dropdown.Item eventKey={"es"}>{t('Language.l1')}</Dropdown.Item>
            <Dropdown.Item eventKey={"en"}>{t('Language.l2')}</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Form.Group className="fname_text">
        <Form.Label>{t("Portal.fname")} </Form.Label>
        <Form.Control className="textInput1" type="text" placeholder={t("Portal.fnameText")} onChange={(e)=>{setFullname(e.target.value)}}/> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{t("Portal.mail")} </Form.Label>
        <Form.Control className='textInput3' type="email" placeholder="Escriba aquí su correo"  onChange={(e)=>{setUsername(e.target.value)}}/> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{t("Portal.password")}</Form.Label>
        <Form.Control className='textInput4' type="password" placeholder={t("Portal.passwordText")} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      <Row>
        <Col><p> Indique su especialidad: </p></Col>
        <Col>
          <DropdownButton size="lg" variant="Signup_dropdown" title={selectedItem} onSelect={handleSelect}>
              <Dropdown.Item eventKey={t("Step6.drpde1")}> {t("Step6.drpde1")}</Dropdown.Item>
              <Dropdown.Item eventKey={t("Step6.drpde2")}>{t("Step6.drpde2")} </Dropdown.Item>
              <Dropdown.Item eventKey={t("Step6.drpde3")}> {t("Step6.drpde3")}</Dropdown.Item>
              <Dropdown.Item eventKey={t("Step6.drpde4")}>{t("Step6.drpde4")} </Dropdown.Item>
              <Dropdown.Item eventKey={t("Step6.drpde5")}> {t("Step6.drpde5")}</Dropdown.Item>
              <Dropdown.Item eventKey={t("Step6.drpde6")}>{t("Step6.drpde6")} </Dropdown.Item>
              <Dropdown.Item eventKey={t("Step6.drpde7")}> {t("Step6.drpde7")}</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <Col><p> Indique su generación: </p></Col>
        <Col>
          <DropdownButton size="lg" variant="Signup_dropdown" title={selectedItem2} onSelect={handleSelect2}>
              <Dropdown.Item eventKey={2018}> {2018}</Dropdown.Item>
              <Dropdown.Item eventKey={2019}>{2019} </Dropdown.Item>
              <Dropdown.Item eventKey={2020}> {2020}</Dropdown.Item>
              <Dropdown.Item eventKey={2021}>{2021} </Dropdown.Item>
              <Dropdown.Item eventKey={2022}> {2022}</Dropdown.Item>
              <Dropdown.Item eventKey={2023}>{2023} </Dropdown.Item>
              <Dropdown.Item eventKey={2024}> {2024}</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <br/>
      <Button variant="primary" type="submit" onClick={HandlerSignup}>Signup</Button>
      <Link to="/">
        <Button variant="buttonsignup" type="submit">{t("Goto.signup")}</Button>
      </Link>
    </Form>
    </div>
    </body>
    </>
  );
};