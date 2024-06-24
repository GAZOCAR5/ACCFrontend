import "../StyleFiles/Landing2.css"
import logo from '../StyleFiles/logouai.jpg'
import { useNavigate } from "react-router-dom";
import {Navbar,Nav,Button,Table,Dropdown,DropdownButton} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

export default function Landing2(){
   const navigate = useNavigate(); /*Variable utilizada para redirigir al landing2 page*/
   const [rows, setRows] = useState([]);
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
               setRows(responseData);
            } else {alert("Error fetching data")}
         }catch(error){console.log(error)}
      }
      fetchdata();
      
   },[]);

   const renderEvaluation = (evaluation) => {
      if (typeof evaluation === 'object') {
        return (
          <div>
            <p>Final Grade: {evaluation.FinalGrade ?? 'N/A'}</p>
            <p>Correction 1: {evaluation.correction1?.feedback ?? 'N/A'}</p>
            <p>Correction 2: {evaluation.correction2?.feedback ?? 'N/A'}</p>
            <p>Correction 3: {evaluation.correction3?.feedback ?? 'N/A'}</p>
            <p>Correction 4: {evaluation.correction4?.feedback ?? 'N/A'}</p>
            <p>Correction 5: {evaluation.correction5?.feedback ?? 'N/A'}</p>
          </div>
        );
      }
      return <p>{evaluation}</p>;
    };
    
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
            <Nav className="Navbar_elements_Landing2" variant="underline" defaultActiveKey={"1"}>
               <Nav.Item>
                  <Nav.Link eventKey="1">{t("Landing2.t1")}</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="2" href="/DashBoardProf">{t("Landing2.t2")}</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="3" href="/Grades">{t("Landing2.t3")}</Nav.Link>
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
      <div className='Main_Landing2'>
         <div className='Main_Landing2_Content'>
            <h1>{t("Landing2.tittle")}</h1>
            <table className="table_landing2">
               <thead>
               <tr>
                  <th>{t("Landing2.table1")}</th>
                  <th>{t("Landing2.table2")}</th>
                  <th>{t("Landing2.table3")}</th>
                  <th>{t("Landing2.table4")}</th>
                  <th>{t("Landing2.table5")}</th>
                  <th>{t("Landing2.table6")}</th>
               </tr>
               </thead>
               <tbody>
               {rows.map((row, index) => (
                  <tr key={index}>
                     <td>{row.StudentName ?? 'N/A'}</td>
                     <td>{row.StudentMail ?? 'N/A'}</td>
                     <td>{row.Pages ?? 'N/A'}</td>
                     <td>{renderEvaluation(row.Evaluation1)}</td>
                     <td>{renderEvaluation(row.Evaluation2)}</td>
                     <td>{renderEvaluation(row.Evaluation3)}</td>
                  </tr>
               ))}
               </tbody>
            </table>
         </div>
      </div >
      
    </div>
    )
} 
