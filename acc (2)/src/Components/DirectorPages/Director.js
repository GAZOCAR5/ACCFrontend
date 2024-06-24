import "../StyleFiles/DashBoardProf.css"
import logo from '../StyleFiles/logouai.jpg'
import { useNavigate } from "react-router-dom";
import {Navbar,Nav,Button,Dropdown,DropdownButton,Col,Row} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Director(){


   const navigate = useNavigate(); /*Variable utilizada para redirigir al landing2 page*/
   const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
   const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
   const [graphData, setGraphDataData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [companys, setCompanys] = useState([]);
   const [companysCount, setCompanysCount] = useState([]);

   useEffect(()=>{
      const fetchdata  =async () =>{
         try{
            const response = await fetch("http://127.0.0.1:5000/dashboard",{
               method: "POST",
               headers:{"Content-Type": "application/json"},
               body: JSON.stringify({"key": "4","user": localStorage.getItem("user")})
            });
            if(response.status === 200){
               const responseData = await response.json();
               setGraphDataData(responseData);
               const companyNamesArray = responseData.Studentspercompany.map(company => company.CompanyName);
               const companyCountsArray = responseData.Studentspercompany.map(company => company.StudentCount);
               setCompanys(companyNamesArray);
               setCompanysCount(companyCountsArray);
               setLoading(false);
            } else {alert("Error fetching data")}
         }catch(error){console.log(error)}
      }
      fetchdata();
   },[]);



   const handleLogout=(e)=>{
      localStorage.clear();
      navigate("/")
   };
   if (loading) {
      return <div>Loading...</div>; // Show loading indicator
    }else{
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
                  <Button variant='primary' size="lg" href="/SendEmail">Correos</Button>
                  </Nav.Item>
                  <Nav.Item>
                     <Button variant='Top_Navbar_item_4_L2' size="lg" onClick={handleLogout}>Logout</Button>
                  </Nav.Item>
               </Nav>
            </Navbar>
         </div>
         <div className='Main_DashBoardProf'>
            <div className='Main_DashBoardProf_Content'>
               <h1>{"Alumnos en la carrera:"}{graphData.StudentCount}</h1>
               <Row>
                  <Col>
                     <BarChart
                        xAxis={[{
                           id: 'barCategories',
                           data: ['Paso 1', 'Paso 2', 'Paso 3','Paso 4','Paso 5','Paso 6', 'Paso 7', 'Paso 8','Paso 9','Paso 10','Paso 11','Paso 12'],
                           scaleType: 'band',
                        },
                        ]}
                        series={[{
                           data: [
                              graphData.PagePercentages[0].Percentage, 
                              graphData.PagePercentages[1].Percentage, 
                              graphData.PagePercentages[2].Percentage,
                              graphData.PagePercentages[3].Percentage, 
                              graphData.PagePercentages[4].Percentage,
                              graphData.PagePercentages[5].Percentage, 
                              graphData.PagePercentages[6].Percentage,
                              graphData.PagePercentages[7].Percentage,
                              graphData.PagePercentages[8].Percentage, 
                              graphData.PagePercentages[9].Percentage,
                              graphData.PagePercentages[10].Percentage,
                              graphData.PagePercentages[11].Percentage
                        ]},
                        ]}
                        width={1000}
                        height={300}
                     />
                  </Col>
                  <Col>
                     <BarChart
                        xAxis={[{
                           id: 'barCategories',
                           data: companys,
                           scaleType: 'band',
                        },
                        ]}
                        series={[{
                           data: companysCount,
                        },
                        ]}
                        width={130*companys.length}
                        height={300}
                     />
                  </Col>
               </Row>
               
            </div>
         </div >
         
      </div>
      )
}}