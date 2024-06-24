import "../StyleFiles/Grades.css"
import logo from '../StyleFiles/logouai.jpg'
import {Navbar,Nav,Button, Table, Dropdown,DropdownButton} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

export default function Grades(){
   const [data, setData] = useState([]);
   const [student,setStudent] = useState([]);
   const navigate = useNavigate();
   const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
   const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
   
   useEffect(()=>{
      const fetchdata  =async () =>{
         try{
            const response = await fetch("http://127.0.0.1:5000/AssignedStudentsProf",{
               method: "POST",
               headers:{"Content-Type": "application/json"},
               body: JSON.stringify({"confirmation": "NaN","user": localStorage.getItem("user")})
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
  return(
    <div /* {t("")}*/>
      <div className='NavBar_Landing2'>
         <Navbar expand="lg" className="Top_Navbar_Landing2"  fixed="top">
            <div className= 'logoUAI_Landing2'><img src={logo} alt = "logo" width= "100%"/></div>
            <div>
               <DropdownButton variant="Landing2_Language_Dropdown" title={t('Language.tittle')} align="end" onSelect={changeLanguage}>
                  <Dropdown.Item eventKey={"es"}>{t('Language.l1')}</Dropdown.Item>
                  <Dropdown.Item eventKey={"en"}>{t('Language.l2')}</Dropdown.Item>
               </DropdownButton>
            </div>
            <Nav className="Navbar_elements_Landing2" variant="underline" defaultActiveKey={"3"}>
               <Nav.Item>
                  <Nav.Link eventKey="1" href="Landing2">{t("Landing2.t1")}</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="2" href="/DashBoardProf">{t("Landing2.t2")}</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="3" >{t("Landing2.t3")}</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="4" href="/Meetings">{t("Landing2.t4")}</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Button variant='Top_Navbar_item_4_L2' size="lg" onClick={handleLogout}>Logout</Button>
               </Nav.Item>
            </Nav>
         </Navbar>
      </div>
      
      <div className='Main_Grades'>
         <div className='Main_Grades_Content'>
            <select className="StudentSelect_Grades" title="Elija un estudiante" value={data.users} onChange={handleStudent}>
            <option value={"default"} >{t("Grades.dropdown")}</option>
            {data.map((usuario) => (
               <option key={usuario.StudentName} value={usuario.StudentName}>{usuario.StudentName}</option>))}  
            </select>
            <ul>
               <Table className="table_Grades" striped>
                  <thead>
                     <tr>
                        <th><strong>{t("Grades.t1")}</strong> {student.StudentName} </th>
                        <th><strong>{t("Grades.t2")}</strong> {student.Evaluation1}</th>
                        <th><strong>{t("Grades.t3")}</strong> {student.Evaluation2}</th>
                        <th><strong>{t("Grades.t4")}</strong> {student.Evaluation3}</th>
                     </tr>
                  </thead>
               </Table>
            </ul>
            <div className="Grades_Buttons">
               <Button variant="primary" href="Modify1"> {t("Grades.btn1")}</Button>
               <Button variant="primary" href="Modify2"> {t("Grades.btn2")}</Button>
               <Button variant="primary" href="Modify3"> {t("Grades.btn3")}</Button>
            </div>
         </div>
      </div>   
    </div>
    )
} 
