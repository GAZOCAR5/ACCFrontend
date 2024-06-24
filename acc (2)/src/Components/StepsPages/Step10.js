import logo from '../StyleFiles/logouai.jpg'
import {Navbar,Button,Dropdown,DropdownButton,Table,Col,Row} from 'react-bootstrap';
import "../StyleFiles/Step10.css"
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Step10(){
  const navigate = useNavigate();
  const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
  const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
  const assignedProffesor = "";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchdata = async ()=>{
      try{
        const response = await fetch("http://127.0.0.1:5000/studentData",{
          method: "POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({"user":localStorage.getItem('user')})
        });
        if (response.status === 200){
          const responseData = await response.json();
          console.log(responseData.Evaluation3)
          setData(responseData.Evaluation3);
          console.log(data);
          setLoading(false)
         
        }else {alert("Error fetching data")}
      }catch(error){console.log(error)}
    }
    fetchdata();
  },[]);

  const HandlerStep10=async(e)=>{
    localStorage.setItem("page","11")
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
       navigate("/Step11")
    } 
    else if((response.status === 500)){
       localStorage.setItem("page","10")
       alert("Error 500")}
    } catch (error){
       localStorage.setItem("page","10")
       console.log(error)
       alert("Hubo un error")
    }
  };
  const handleLogout=(e)=>{
      localStorage.clear();
      navigate("/");
  };
  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }else{
  return(
    <div>
    <div className='Top_Step'>
         <Navbar expand="lg" className="Top_Navbar_Step"  fixed="top">
            <div className= 'logoUAI_Step'><img src={logo} alt = "logo" width= "100%"/></div>
            <div className='Top_Navbar_div_Step'>
               <Row>
                  <Col><p className="Current_Step">{t("Landing.crntstep")}10</p></Col>
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

    <div className='Main_Step10'>
      <div className='Main_Step10_Text'>
      <h2><strong> {t("Step10.tittle")}</strong></h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{t("Step10.t1")}</th>
              <th>{t("Step10.t2")}</th>
              <th>{t("Step10.t3")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t("Step10.t4")}</td>
              <td>{data.correction1.grade}</td>
              <td>{data.correction1.feedback}</td>
            </tr>
            <tr>
              <td>{t("Step10.t5")}</td>
              <td>{data.correction2.grade}</td>
              <td>{data.correction2.feedback}</td>
            </tr>
            <tr>
              <td>{t("Step10.t6")}</td>
              <td>{data.correction3.grade}</td>
              <td>{data.correction3.feedback}</td>
            </tr>
            <tr>
              <td>{t("Step10.t7")}</td>
              <td>{data.correction4.grade}</td>
              <td>{data.correction4.feedback}</td>
            </tr>
            <tr>
              <td>{t("Step10.t8")}</td>
              <td>{data.correction5.grade}</td>
              <td>{data.correction5.feedback}</td>
            </tr>
            <tr>
              <td>{t("Step10.t9")}</td>
              <td>{data.correction6.grade}</td>
              <td>{data.correction6.feedback}</td>
            </tr>
            <tr>
              <td>{t("Step10.t10")}</td>
              <td>{data.correction7.grade}</td>
              <td>{data.correction7.feedback}</td>
            </tr>
          </tbody>
        </Table>
        <h3 classname="Step10_text"><strong>{t("Step10.t11")} {data.FinalGrade}</strong></h3>
        <div className='Main_Step10_Buttons'>
        <Row>
            <Col>
              <Dropdown>
                <Dropdown.Toggle  className='Main_Step10_Button1' variant= "primary" size="lg">{t("Step12.t9")}</Dropdown.Toggle >
                <Dropdown.Menu>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>{t("Step10.t1")}</th>
                        <th>Ponderación</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{t("Step10.t4")}</td>
                        <td>20%</td>
                      </tr>
                      <tr>
                        <td>{t("Step10.t5")}</td>
                        <td>10%</td>
                      </tr>
                      <tr>
                        <td>{t("Step10.t6")}</td>
                        <td>20%</td>
                      </tr>
                      <tr>
                        <td>{t("Step10.t7")}</td>
                        <td>15%</td>
                      </tr>
                      <tr>
                        <td>{t("Step10.t8")}</td>
                        <td>10%</td>
                      </tr>
                      <tr>
                        <td>{t("Step10.t9")}</td>
                        <td>15%</td>
                      </tr>
                      <tr>
                        <td>{t("Step10.t10")}</td>
                        <td>10%</td>
                      </tr>
                    </tbody>
                  </Table>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Button className='Main_Step8_Button2' variant="success" size="lg" onClick={HandlerStep10}>{t("Step10.btn")}</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div >
      
    </div>
    )
} }