import logo from '../StyleFiles/logouai.jpg'
import "../StyleFiles/Step3.css"
import {Button,Container,Dropdown,DropdownButton,Form, Row, Col,Navbar} from 'react-bootstrap';
import {useState} from 'react';
import DatePicker from "react-multi-date-picker";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

export default function Step3(){
  const navigate = useNavigate();
  const [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
  const changeLanguage = (lng) => {i18n.changeLanguage(lng);};

  const [fullname,setFullname] = useState("");
  const [company,setCompany] = useState("");
  const [industry,setIndustry] = useState("");
  const [country,setCountry] = useState("");
  const [city,setCity] = useState("");
  const [supervisorName,setSupervisorName] = useState("");
  const [supervisorPosition,setSupervisorPosition] = useState("");
  const [supervisorEmail,setSupervisorEmail] = useState("");
  const [supervisorPhone,setSupervisorPhone] = useState("");
  const [time,setTime] = useState("");
  const [hours, setHours] = useState("");
  const [startDate,setStartDate] = useState("");
  const [endDate,setEndDate] = useState("");
  
  
  const handleLogout=(e)=>{
    localStorage.clear();
    navigate("/")
  }
  const pageHandler=async(e)=>{
    localStorage.setItem("page","4")
    e.preventDefault()
    try{
      const url = "http://127.0.0.1:5000/pages"
      const options = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({ 
          "user":localStorage.getItem('user'),
          "page": localStorage.getItem('page')})
      }
      const response = await fetch(url,options)
      if (response.status === 200){
        navigate("/Step4")
      } 
       else if((response.status === 500)){
          alert("Error 500")}
    } catch (error){
      console.log(error)
      alert("Hubo un error")
    }
  }
  const HandlerStep3=async(e)=>{
    localStorage.setItem("page","4")
    e.preventDefault()
    try{
      const url = "http://127.0.0.1:5000/save_internship"
      const options = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({ 
          "user":localStorage.getItem('user'),
          "company": company, 
          "industry": industry, 
          "country": country, 
          "city": city, 
          "name_sup": supervisorName,
          "email_sup": supervisorEmail,
          "title_sup": supervisorPosition,
          "phone_sup": supervisorPhone,
          "name_alum": fullname,
          "hours": hours,
          "type": time,
          "start": startDate,
          "end": endDate

        })
      }
      const response = await fetch(url,options)
      if (response.status === 200){
        pageHandler(e);
      } 
       else if((response.status === 500)){
          alert("Error 500")}
    } catch (error){
      console.log(error)
      alert("Hubo un error")
    }
  };
  console.log(startDate,endDate);
  return(
    <div /* {t("")}*/>
      <div className='Top_Step'>
         <Navbar expand="lg" className="Top_Navbar_Step"  fixed="top">
            <div className= 'logoUAI_Step'><img src={logo} alt = "logo" width= "100%"/></div>
            <div className='Top_Navbar_div_Step'>
               <Row>
                  <Col><p className="Current_Step">{t("Landing.crntstep")}3</p></Col>
                  <Col>
                     <DropdownButton variant="Step_Language_Dropdown" title={t('Language.tittle')} align="end" onSelect={changeLanguage}>
                        <Dropdown.Item eventKey={"es"}>{t('Language.l1')}</Dropdown.Item>
                        <Dropdown.Item eventKey={"en"}>{t('Language.l2')}</Dropdown.Item>
                     </DropdownButton>
                  </Col>
                  <Col>
                     <DropdownButton  className="Top_Navbar_item_1" id="Top_Navbar_item_1" title={t("Navbar.btn1")}>
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
                  <Col><Button className='Top_Navbar_item_2'  variant="primary">{t("Navbar.btn2")}</Button></Col>
                  <Col><Button className='Top_Navbar_item_3'  variant="primary">{t("Navbar.btn3")}</Button></Col>
                  <Col><Button variant="Top_Navbar_item_4"  onClick={handleLogout}>{t("Navbar.btn4")}</Button></Col>
               </Row>
            </div>
         </Navbar>
      </div>
      <div className='Main_Step3'>
        <div className='Main_Step3_Text'>
          <Container>
            <Row>
              <Col>{/*Nombre estudiante*/}
                <Form.Label>{t("Step3.t1")}</Form.Label>
                <Form.Control type="text" placeholder={t("Step3.ph1")} onChange={(e)=>{setFullname(e.target.value)}}/>
              </Col>
              <Col>{/*Nombre empresa*/}
                <Form.Label>{t("Step3.t2")}</Form.Label>
                <Form.Control type="text"  placeholder={t("Step3.ph1")} onChange={(e)=>{setCompany(e.target.value)}}/>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>{/*Industria empresa*/}
                <Form.Label>{t("Step3.t3")}</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder={t("Step3.ph2")} onChange={(e)=>{setIndustry(e.target.value)}} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>{/*Pais*/}
                <Form.Label>{t("Step3.t4")}</Form.Label>
                <Form.Control type="text" placeholder={t("Step3.ph1")}  onChange={(e)=>{setCountry(e.target.value)}}/>
              </Col>
              <Col>{/*Ciudad*/}
                <Form.Label>{t("Step3.t5")}</Form.Label>
                <Form.Control type="text" placeholder={t("Step3.ph1")}  onChange={(e)=>{setCity(e.target.value)}}/>
              </Col>
            </Row>
            <br />
            <Row>
              <Col> {/*Nombre Supervisor*/}       
                <Form.Label>{t("Step3.t6")}</Form.Label>
                <Form.Control type="text" placeholder={t("Step3.ph1")} onChange={(e)=>{setSupervisorName(e.target.value)}} />
              </Col>
              <Col>{/*Cargo supervisor*/}
                <Form.Label>{t("Step3.t7")}</Form.Label>
                <Form.Control type="text" placeholder={t("Step3.ph1")} onChange={(e)=>{setSupervisorPosition(e.target.value)}} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>{/*Correo supervisor*/}
                <Form.Label>{t("Step3.t8")}</Form.Label>
                <Form.Control type="text" placeholder={t("Step3.ph1")} onChange={(e)=>{setSupervisorEmail(e.target.value)}} />
              </Col>
              <Col>{/*Celular supervisor*/}
                <Form.Label>{t("Step3.t9")}</Form.Label>
                <Form.Control type="text" placeholder={t("Step3.ph1")} onChange={(e)=>{setSupervisorPhone(e.target.value)}} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form>{/*Part time/fulltime*/}
                  <p>{t("Step3.t10")}</p>
                  <div key= "inline-radio" className='Step3_ratios'>
                    <Form.Check inline label="Full time" name="group1" type="radio" id={`inline-${"radio"}-1`} onChange={()=>setTime("Full time")}/>
                    <Form.Check inline label="Part time" name="group2" type="radio" id={`inline-${"radio"}-2`} onChange={()=>setTime("Part time")}/>
                  </div>
                </Form>
              </Col>
              <Col>{/*Cantidad de horas*/}
                <Form.Label>{t("Step3.t11")}</Form.Label>
                <Form.Control type="text" placeholder={t("Step3.ph1")} onChange={(e)=>{setHours(e.target.value)}} />
              </Col>
              <Col>{/*Fecha inicio y termino*/}
                <Form.Label>{t("Step3.t12")}</Form.Label>
                <div>
                  <Form.Control placeholder={t("Step3.ph1")} onChange={(e)=>{setStartDate(e.target.value)}}/>
                  <Form.Control placeholder={t("Step3.ph1")} onChange={(e)=>{setEndDate(e.target.value)}}/>
                </div>
              </Col>
            </Row>
            <div className='Main_Step3_Buttons'>
              <Button variant="Main_Step3_Button1" href='/Landing'size='lg'>{t("Step2.btn1")}</Button>{' '}
              <Button variant='Main_Step3_Button2' onClick={HandlerStep3} size='lg'>{t("Step2.btn2")}</Button>{' '}
            </div>
          </Container>
        </div>
      
      </div>
      
    </div>
    )
} 