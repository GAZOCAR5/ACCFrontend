import "../StyleFiles/DashBoardProf.css"
import logo from '../StyleFiles/logouai.jpg'
import { useNavigate } from "react-router-dom";
import {Navbar,Nav,Button,Dropdown,DropdownButton,Col,Row} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { BarChart } from '@mui/x-charts/BarChart';

export default function SendEmail(){


   const navigate = useNavigate(); /*Variable utilizada para redirigir al landing2 page*/
   const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
   const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
   const [graphData, setGraphDataData] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(()=>{
      const fetchdata  =async () =>{
         try{
            const response = await fetch("http://127.0.0.1:5000/dashboard",{
               method: "POST",
               headers:{"Content-Type": "application/json"},
               body: JSON.stringify({"key": "2","user": localStorage.getItem("user")})
            });
            if(response.status === 200){
               const responseData = await response.json();
               setGraphDataData(responseData);
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
               <Nav className="Navbar_elements_Landing2" variant="underline" defaultActiveKey={"2"}>
                  <Nav.Item>
                     <Nav.Link eventKey="1" href="/Landing2">{t("Landing2.t1")}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey="2">{t("Landing2.t2")}</Nav.Link>
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
         <div className='Main_DashBoardProf'>
            <div className='Main_DashBoardProf_Content'>
               <h1>{t("Landing2.tittle")}{":"}{graphData.total}</h1>
               <Row>
                  <Col>
                     <BarChart
                        slots={{
                           
                        }}
                        xAxis={[{
                           id: 'barCategories',
                           data: ['Paso 1', 'Paso 2', 'Paso 3','Paso 4','Paso 5','Paso 6', 'Paso 7', 'Paso 8','Paso 9','Paso 10','Paso 11','Paso 12'],
                           scaleType: 'band',
                        },
                        ]}
                        series={[{
                           data: [
                              graphData.perPage[0], 
                              graphData.perPage[1], 
                              graphData.perPage[2],
                              graphData.perPage[3], 
                              graphData.perPage[4],
                              graphData.perPage[5], 
                              graphData.perPage[6],
                              graphData.perPage[7],
                              graphData.perPage[8], 
                              graphData.perPage[9],
                              graphData.perPage[10],
                              graphData.perPage[11]
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
                           data: ['Evaluación1', 'Evaluación2', 'Evaluación3'],
                           scaleType: 'band',
                        },
                        ]}
                        series={[{
                           data: [graphData.countEvaluation1, graphData.countEvaluation2, graphData.countEvaluation3],
                        },
                        ]}
                        width={500}
                        height={300}
                        
                     />
                  </Col>
               </Row>
               
            </div>
         </div >
         
      </div>
      )
}}