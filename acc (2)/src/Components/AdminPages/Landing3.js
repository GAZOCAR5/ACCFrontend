import "../StyleFiles/Landing3.css"
import logo from '../StyleFiles/logouai.jpg'
import {Navbar,Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Landing3(){
  const navigate = useNavigate();
  const [confirmationStatus, setConfirmationStatus] = useState("False")
  const [data, setData] = useState([]);
  const [student,setStudent] = useState([]);
  const [studentEmail, setStudentEmail] = useState([])

  useEffect(()=>{
    const fetchdata = async () =>{
      try{
        const response = await fetch("http://127.0.0.1:5000/AssignedStudentsAdmin",{
          method: "POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({"confirmation": "2"})
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
    console.log(selectedStudent);
    setStudent(selectedStudent.FirstName);
    setStudentEmail(selectedStudent.EmailDB)
  }

  const handleSend=async(e)=>{
    e.preventDefault()
    try{
      const url = "http://127.0.0.1:5000/AdminConfirmation"
      const options2 = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({"confirmation": confirmationStatus, "user": studentEmail })
      }
      const response = await fetch(url,options2)
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

  const handleLogout=(e)=>{
    localStorage.clear();
    navigate("/")
  }

  return(
    <div>
      <div className='Top_landing3'>
        <Navbar expand="lg" className="Top_Navbar_Landing3"  fixed="top">
          <div className= 'logoUAI_Landing3'><img src={logo} alt = "logo" width= "100%"/></div>
          <div className='Top_Navbar_div_Landing3' >
            <h2 className="Landing3_tittle"> Validación de requisitos </h2>
            <Button className="primary" href="/Landing4">Ir a validación pasantía</Button>
            <Button className='Top_Navbar_item_4'  variant="danger" onClick={handleLogout}>Logout</Button>
          </div>
        </Navbar>
      </div>
      <div className='Main_Landing3'>

      <div className='Main_Landing3_Content'>  
        <select title="Elija un estudiante" value={data.user} onChange={handleStudent}>
          <option value={"default"} >Elija un estudiante</option>
            {data.map((user) => (
              <option key={user.FirstName} value={user.FirstName} >{user.FirstName}</option>))}  
        </select>
        <p>Se necesita que el estudiante <strong>{student.nombreUsuario}</strong> cumpla los siguientes requisitos para realizar la pasantía</p>
        <p> - Estar Licenciado en Ciencias de la Ingeniería</p>
        <p> - Estar aceptado en 5to año</p>
        <p> - Tener aprobada la Practica Operaría</p>
        <p><strong> Si no cumple con uno o más de estos requisitos, debe ser rechazada la solicitud</strong></p>
        <Button variant="Button1_Landing3" onClick={()=>setConfirmationStatus("False")}> Rechazar</Button>
        <Button variant="success" onClick={()=>setConfirmationStatus("True")}>Aceptar</Button>
        <Button variant="primary" onClick={handleSend}>Send</Button>
        <p>Estatus de confirmación:{confirmationStatus} </p>
      </div>
      </div >
    </div>
    )
} 
