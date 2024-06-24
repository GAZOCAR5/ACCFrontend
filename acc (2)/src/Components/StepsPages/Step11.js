import logo from '../StyleFiles/logouai.jpg'
import {Navbar,Button,Dropdown,DropdownButton,Table,Col,Row} from 'react-bootstrap';
import "../StyleFiles/Step11.css"
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Step11(){
   const assignedProffesor = "";
   const navigate = useNavigate();
   const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
   const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
   const [data, setData] = useState("");
   const [approval,setApproval] = useState();

   useEffect(()=>{
      const options1 = {
         method: "POST",
         headers:{"Content-Type": "application/json"},
         body: JSON.stringify({"user":localStorage.getItem('user')})
      }
      fetch("http://127.0.0.1:5000/studentData",options1)
         .then(response => response.json(data))
         .then(data => {setData(data);console.log(data);setApproval(data.FinalPresentation)})
         .catch(error => console.error('Error fetching data:', error));
      },[]);

   const handleLogout=(e)=>{
      localStorage.clear();
      navigate("/")
   }
   
   let Response_TEXT = ""
   if (approval === "NA"){
      Response_TEXT = "Step4.status1"
   }else{
      Response_TEXT = "Step4.status2"
   };
   
   const HandlerStep11=async(e)=>{
      localStorage.setItem("page","12")
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
            navigate("/Step12")
         } 
         else if((response.status === 500)){
            localStorage.setItem("page","12")
            alert("Error 500")}
      } catch (error){
      console.log(error)
      localStorage.setItem("page","4")
      alert("Hubo un error")
      }
      }; 
   const renderContent = () => {
      if (approval === "NA") {
         return <Button className='Main_Step4_Button2' variant="success" size="lg" disabled>{t("Step4.btn")}</Button>;
      }else{
         return <Button className='Main_Step4_Button2' variant="success" size="lg" onClick={HandlerStep11}>{t("Step4.btn")}</Button>;}
   }
  return(
    <div>
    <div className='Top_Step'>
         <Navbar expand="lg" className="Top_Navbar_Step"  fixed="top">
            <div className= 'logoUAI_Step'><img src={logo} alt = "logo" width= "100%"/></div>
            <div className='Top_Navbar_div_Step'>
               <Row>
                  <Col><p className="Current_Step">{t("Landing.crntstep")}11</p></Col>
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

    <div className='Main_Step11'>
      <div className='Main_Step11_Text'>
      <p><strong>{t("Step11.t1")} </strong></p>
      <p><strong>{t("Step11.t2")}</strong></p>
      <p>{t("Step11.t3")}</p>
      <Dropdown>
          <Dropdown.Toggle  className='Main_Step12_Button1' variant= "primary" size="lg">{t("Step12.t9")}</Dropdown.Toggle >
          <Dropdown.Menu>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th><h3><strong>{t("Step11.tableh1")}</strong> </h3></th>
                <th><h3><strong>{t("Step11.tableh2")}</strong></h3></th>
                <th><h3><strong>{t("Step11.tableh3")}</strong></h3></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><h4>{t("Step11.tablet1")}</h4></td>
                <td><p>{t("Step11.tablet2")}</p></td>
                <td><p>25%</p></td>
              </tr>
              <tr>
                <td><h4>{t("Step11.tablet3")}</h4></td>
                <td><p>{t("Step11.tablet4")}</p></td>
                <td><p>20%</p></td>
              </tr>
              <tr>
                <td><h4>{t("Step11.tablet5")}</h4></td>
                <td><p>{t("Step11.tablet6")}</p></td>
                <td><p>30%</p></td>
              </tr>
              <tr>
                <td><h4>{t("Step11.tablet7")}</h4></td>
                <td><p>{t("Step11.tablet8")}</p></td>
                <td><p>25%</p></td>
              </tr>
            </tbody>
            </Table>
          </Dropdown.Menu>
      </Dropdown>
      <br/>
        <p>{t("Step11.t4")}<strong>{t(Response_TEXT)} </strong></p>
        <div className='Main_Step5_Buttons'>
          {renderContent()}
        </div>
      </div>
    </div >
      
    </div>
    )
} 