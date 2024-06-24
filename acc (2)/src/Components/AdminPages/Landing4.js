import "../StyleFiles/Landing4.css"
import logo from '../StyleFiles/logouai.jpg'
import {Navbar,Button,Table} from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

export default function Landing4(){
  const navigate = useNavigate();
  const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
  const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
  const [confirmationStatus, setConfirmationStatus] = useState("False")
  const [data, setData] = useState([]);
  const [studentName,setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("") ;
  const [companyName,setCompanyName] = useState("");
  const [companyIndustry,setCompanyIndustry] = useState("");
  const [country,setCountry] = useState("");
  const [city,setCity] = useState("");
  const [supName,setSupName] = useState("");
  const [supTitle,setSupTitle] = useState("");
  const [supEmail,setSupEmail] = useState("");
  const [supPN,setSupPN] = useState("");
  const [type,setType] = useState("");
  const [hours,setHours] = useState("");
  const [startDate,setStartDate] = useState("");
  const [endDate,setEndDate] = useState("");

  useEffect(()=>{
    const fetchdata = async () =>{
      try{
        const response = await fetch("http://127.0.0.1:5000/AssignedStudentsAdmin",{
          method: "POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({"confirmation": "5"})
        });
        if(response.status === 200){
          const responseData = await response.json();
          setData(responseData);
      } else {alert("Error fetching data")}
      }catch(error){console.log(error)}
      }
    fetchdata();
  },[]);

  const handleStudent = (event)=>{
    let selectedName = event.target.value;
    const selectedStudent = data.find(user => user.FirstName === selectedName);
    console.log(selectedStudent.Internship);
    setStudentName(selectedStudent.FirstName);
    setStudentEmail(selectedStudent.EmailDB);
    setCompanyName(selectedStudent.Internship.CompanyName);
    setCountry(selectedStudent.Internship.CompanyCountry);
    setCompanyIndustry(selectedStudent.Internship.CompanyIndustry);
    setCity(selectedStudent.Internship.CompanyCity);
    setSupName(selectedStudent.Internship.SupervisorInformation.SupervisorName);
    setSupTitle(selectedStudent.Internship.SupervisorInformation.SupervisorTitle);
    setSupEmail(selectedStudent.Internship.SupervisorInformation.SupervisorEmail);
    setSupPN(selectedStudent.Internship.SupervisorInformation.SupervisorPhone);
    setType(selectedStudent.Internship.InternshipType);
    setHours(selectedStudent.Internship.InternshipHours);
    setStartDate(selectedStudent.Internship.StartDate);
    setEndDate(selectedStudent.Internship.EndDate);
  }

  const handleSend=async(e)=>{
    e.preventDefault()
    try{
      const url = "http://127.0.0.1:5000/InternshipConfirmation"
      const options = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({ "user": studentEmail,"confirmation": confirmationStatus })
      }
      const response = await fetch(url,options)
      if (response.status === 200){
        alert("Enviado correctamente!")
      } 
        else if((response.status === 500)){
          alert("Error 500")}
    } catch (error){
      console.log(error)
      alert("Hubo un error")
    }
  };
  return(
    <div>
      <div className='Top_landing4'>
        <Navbar expand="lg" className="Top_Navbar_Landing4"  fixed="top">
          <div className= 'logoUAI_Landing4'><img src={logo} alt = "logo" width= "100%"/></div>
          <div className='Top_Navbar_div_Landing4' >
          <h2 className="Landing3_tittle"> Validación de pasantía </h2>
          <Button className="primary" href="/Landing4">Ir a validación de requisitos</Button>
            <Button className='Top_Navbar_item_4'  variant="danger" size="lg" href="/">Logout</Button>
          </div>
        </Navbar>
      </div>

      <div className='Main_Landing4'>
        <div className='Main_Landing4_Content'>  
          <select title="Elija un estudiante" value={data.users} onChange={handleStudent}>
            <option value={"default"} >Elija un estudiante</option>
              {data.map((user) => (<option key={user.FirstName} value={user.FirstName} >{user.FirstName}</option>))}  
          </select>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Información</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nombre completo estudiante</td>
              <td>{studentName}</td> 
            </tr>
            <tr>
              <td>Nombre legal de empresa</td>
              <td>{companyName}</td>
            </tr>
            <tr>
              <td>Industria donde opera la empresa</td>
              <td>{companyIndustry}</td>
            </tr>
            <tr>
              <td>País donde se realiza pasantía</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>Ciudad donde se realiza pasantía</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>Nombre completo del supervisor</td>
              <td>{supName}</td>
            </tr>
            <tr>
              <td>Cargo del supervisor</td>
              <td>{supTitle}</td>
            </tr>
            <tr>
              <td>Correo del supervisor</td>
              <td>{supEmail}</td>
            </tr>
            <tr>
              <td>Celular del supervisor</td>
              <td>{supPN}</td>
            </tr>
            <tr>
              <td>Modalidad de la pasantía:</td>
              <td>{type}</td>
            </tr>
            <tr>
              <td>Cantidad de horas</td>
              <td>{hours}</td>
            </tr>
            <tr>
              <td>Fecha inicio y termino</td>
              <td>{startDate} {"=>"} {endDate}</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="Button1_Landing3" onClick={()=>setConfirmationStatus("False")}> Rechazar</Button>
        <Button variant="success" onClick={()=>setConfirmationStatus("True")}>Aceptar</Button>
        <Button variant="primary"onClick={handleSend}>Send</Button>
        <p>{"Status: "}{confirmationStatus}</p>
        </div>
      </div >
    </div>
  )
} 
