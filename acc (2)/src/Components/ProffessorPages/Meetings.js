import "../StyleFiles/Meetings.css"
import logo from '../StyleFiles/logouai.jpg'
import { useNavigate } from "react-router-dom";
import {Navbar,Nav,Button,Form,Row,Col,Dropdown,DropdownButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

export default function Meetings(){
   const navigate = useNavigate(); /*Variable utilizada para redirigir al Meetings page*/
   const [data, setData] = useState([]);
   const [student,setStudent] = useState([]);
   const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
   const changeLanguage = (lng) => {i18n.changeLanguage(lng);};

   useEffect(()=>{
      const fetchdata  =async () =>{
         try{
            const response = await fetch("http://127.0.0.1:5000/AssignedStudentsProf",{
               method: "POST",
               headers:{"Content-Type": "application/json"},
               body: JSON.stringify({"confirmation": "True","user": localStorage.getItem("user")})
            });
            if(response.status === 200){
               const responseData = await response.json();
               const responseDataArray = responseData.map(data=>data,);
               setData(responseDataArray);
            } else {alert("Error fetching data")}
         }catch(error){console.log(error)}
      }
      fetchdata();
      
   },[]);

   const handleStudent = (event)=>{
      let selectedName = event.target.value;
      const selectedStudent = data.find(user => user.StudentName === selectedName);
      setStudent(selectedStudent);
   }
   const handleLogout=(e)=>{
      localStorage.clear();
      navigate("/")
   };
   const HandlerMeeting=async(e)=>{
      e.preventDefault()
      try{
        const url = "http://127.0.0.1:5000/meeting"
        const options = {
          method: "POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({ "user":student.StudentMail, "Meeting": "True"})
        }
        const response = await fetch(url,options)
        if (response.status === 200){
            alert("Enviado correctamente!")
        }
        else if((response.status === 500)){
          alert("Algo salió mál, intentelo de nuevo")}
      } catch (error){
          console.log(error)
          alert("Hubo un error")
      }
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
            <Nav className="Navbar_elements_Landing2" variant="underline" defaultActiveKey={"4"}>
               <Nav.Item>
                  <Nav.Link eventKey="1" href="/Landing2">{t("Landing2.t1")}</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="2" href="/DashBoardProf">{t("Landing2.t2")}</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="3" href="/Grades">{t("Landing2.t3")}</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="4" >{t("Landing2.t4")}</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Button variant='Top_Navbar_item_4_L2' size="lg" onClick={handleLogout}>Logout</Button>
               </Nav.Item>
            </Nav>
         </Navbar>
      </div>
      <div className='Main_Meetings'>
         <div className='Main_Meetings_Content'> 
               <h3><strong>{t("Meetings.t1")}{student.StudentName}</strong></h3>
               <select title={t("Meetings.t2")} value={data.usuario} onChange={handleStudent}>
                  <option value={"default"}>{t("Meetings.t2")}</option>
                  {data.map((usuario) => (<option key={usuario.StudentName} value={usuario.StudentName} >{usuario.StudentName}</option>))}  
               </select>
               <br/>
               <Row>
                  <Col>
                     <h3>{t("Meetings.t3")} {student.StudentName}</h3>
                  </Col>
                  <Col>
                     <Button variant="success" onClick={HandlerMeeting}>Confirmar reunión realizada</Button>
                  </Col>
               </Row>
         </div>
      </div>   
    </div>
    )
} 
