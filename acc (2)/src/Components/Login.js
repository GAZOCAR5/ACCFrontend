import React, {useState} from 'react';
import logo from './StyleFiles/logouai.jpg'
import "./StyleFiles/Login.css";
import {Button,Form,Tab,Tabs,Dropdown,DropdownButton,Col,Row} from 'react-bootstrap';
import { Link,useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [key, setKey] = useState("1"); /*Con esta Variable sabremos si el usuario se trata de un estudiante, un profesor o un supervisor */
    const navigate = useNavigate();
    const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
    const changeLanguage = (lng) => {i18n.changeLanguage(lng);};

    const HandlerLogin=async(e)=>{
      e.preventDefault()
      try{
        const url = "http://127.0.0.1:5000/Login"
        const options = {
          method: "POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({ "user":username, "password":password, "key":key})
        }
        const response = await fetch(url,options)
        if (response.status === 200){
          const copy = await response.json()
          if(key === "1"){
            localStorage.clear()
            localStorage.setItem("user", username)
            localStorage.setItem("page", copy.PageDB)
            localStorage.setItem("name", copy.FirstName)
            navigate("/Landing");}
          else if(key === "2"){
            localStorage.clear()
            localStorage.setItem("user",username)
            localStorage.setItem("name", copy.FirstName)
            navigate("/Landing2")}
          else if(key === "3"){
            localStorage.setItem("user",username)
            localStorage.setItem("name", copy.FirstName)
            navigate("/Landing3")}
          else if (key === "4"){
            localStorage.setItem("user",username)
            localStorage.setItem("name", copy.FirstName)
            navigate("/Director")
          }
          else{alert("error con el key")}
        } 
        else if((response.status === 401)){
          alert("Login Falló (error 401)")}
      else if((response.status === 500)){
        alert("Error 500")}
      } catch (error){
        console.log(error)
        alert("Hubo un error")
      }
    };
    
    return(
    </*{t("")} formato para texto traducido */> 
    <div className= 'logoUAI'><img src={logo} alt = "logo" width= "100%"/></div>
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
            <DropdownButton variant="Login_Language_Dropdown" title={t('Language.tittle')} align="end" onSelect={changeLanguage}>
              <Dropdown.Item eventKey={"es"}>{t('Language.l1')}</Dropdown.Item>
              <Dropdown.Item eventKey={"en"}>{t('Language.l2')}</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{t("Portal.mail")}</Form.Label>
          <Form.Control type="email" placeholder={t("Portal.mailText")}  onChange={(e)=>{setUsername(e.target.value)}}/> 
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>{t("Portal.password")}</Form.Label>
          <Form.Control type="password" placeholder={t("Portal.passwordText")} onChange={(e)=>{setPassword(e.target.value)}}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={HandlerLogin}>Login</Button>
        <Link to="/Signup">
          <Button variant="buttonsignup" type="submit">{t("Goto.login")}</Button>
        </Link>
      </Form>
    </div>
    </>
  );
};