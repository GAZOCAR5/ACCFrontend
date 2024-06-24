import "../StyleFiles/Modify1.css"
import logo from '../StyleFiles/logouai.jpg'
import { useNavigate } from "react-router-dom";
import {Navbar,Nav,Button,Table,Form,FloatingLabel,Dropdow,Col,Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';


export default function FinalEvaluation(){
   const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
   const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
   const navigate = useNavigate(); /*Variable utilizada para redirigir al Modify1 page*/
   const [emailStudent, setEmailStudent] = useState("");
   const [fullNameSupervisor, setFullNameSupervisor] = useState("");
   const [companyName, setCompanyName] = useState("");
   const [emailSupervisor, setEmailSupervisor] = useState("");
   const [grade1,setGrade1] = useState("");
   const [grade2,setGrade2] = useState("");
   const [grade3,setGrade3] = useState("");
   const [grade4,setGrade4] = useState("");
   
   const saveHandler= async(e)=>{
      e.preventDefault();
      try{
         const response = await fetch( "http://127.0.0.1:5000/FinalPresentation",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
               "user": emailStudent,
               "grade1": grade1,
               "grade2": grade2,
               "grade3": grade3,
               "grade4": grade4,
               "correctormail": emailSupervisor,
            })
         })
         if (response.status === 200){
            alert("Enviado correctamente!")
        }
        else if((response.status === 500)){
          alert("Algo salió mál, intentelo de nuevo")}
      } catch (error){
         console.log(error);
         alert("Hubo un error");
      }
   } 
  return(
    <div>
      <div className='NavBar_Modify1'>
         <Navbar expand="lg" className="Top_Navbar_Modify1"  fixed="top">
            <div className= 'logoUAI_Landing'><img src={logo} alt = "logo" width= "100%"/></div>
               <h1><strong> Evaluación de presentación final: Pasantías</strong> </h1>
         </Navbar>
      </div>
      <div className='Main_Modify1'>
         <div className='Main_Modify1_Content'>
            <ul> 
               <br/>
               <Form>
                  <Row>
                     <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Correo Estudiante </Form.Label>
                           <Form.Control className='textInput3' type="email" placeholder="Escriba aquí su correo"  onChange={(e)=>{setEmailStudent(e.target.value)}}/> 
                        </Form.Group>                       
                     </Col>
                     <Col>
                        <Form.Group className="fname_text">
                           <Form.Label>Nombre completo Supervisor</Form.Label>
                           <Form.Control className="textInput1" type="text" placeholder={t("Portal.fnameText")} onChange={(e)=>{setFullNameSupervisor(e.target.value)}}/> 
                        </Form.Group>
                     </Col>
                     <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Correo supervisor </Form.Label>
                           <Form.Control className='textInput3' type="email" placeholder="Escriba aquí su correo"  onChange={(e)=>{setEmailSupervisor(e.target.value)}}/> 
                        </Form.Group>
                     </Col>
                     <Col>
                        <Form.Group className="fname_text">
                           <Form.Label>Nombre de la empresa </Form.Label>
                           <Form.Control className="textInput1" type="text" placeholder="Escriba aquí el nombre de la empresa" onChange={(e)=>{setCompanyName(e.target.value)}}/> 
                        </Form.Group>
                     </Col>
                  </Row>
               </Form>
               <br/>
               <Table variant="Modify1_table" classname="Modify1_table">
                  <thead>
                     <tr>
                        <th><h3><strong>Item a evaluar</strong> </h3></th>
                        <th><h3><strong>Detalle</strong></h3></th>
                        <th><h3><strong>Calificación</strong></h3></th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td><h4>Expresión oral</h4></td>
                        <td><p>Se expresa con un lenguaje adecuado y claro.</p></td>
                        <td>
                           <select className="dropdown_custom" onChange={(event)=>setGrade1(event.target.value)}>
                              <option value={"default"} >Elija una calificación</option>
                              <option value={"1"}>1</option>
                              <option value={"2"}>2</option>
                              <option value={"3"}>3</option>
                              <option value={"4"}>4</option>
                              <option value={"5"}>5</option>
                              <option value={"6"}>6</option>
                              <option value={"7"}>7</option>
                           </select>
                        </td>
                     </tr>
                     <tr>
                        <td><h4>Material de apoyo</h4></td>
                        <td><p>Estudiante cuenta con material de apoyo que evidencia el trabajo realizado. Se deben presentar los resultados y análisis.</p></td>
                        <td>
                           <select className="dropdown_custom" onChange={(event)=>setGrade2(event.target.value)}>
                              <option value={"default"} >Elija una calificación</option>
                              <option value={"1"}>1</option>
                              <option value={"2"}>2</option>
                              <option value={"3"}>3</option>
                              <option value={"4"}>4</option>
                              <option value={"5"}>5</option>
                              <option value={"6"}>6</option>
                              <option value={"7"}>7</option>
                           </select>
                        </td>
                     </tr>
                     <tr>
                        <td><h4>Contenido</h4></td>
                        <td><p>El estudiante comprende a cabalidad el contenido presentado, expone los puntos más importantes y críticos de forma clara y ordenada.</p></td>
                        <td>
                           <select className="dropdown_custom" onChange={(event)=>setGrade3(event.target.value)}>
                              <option value={"default"} >Elija una calificación</option>
                              <option value={"1"}>1</option>
                              <option value={"2"}>2</option>
                              <option value={"3"}>3</option>
                              <option value={"4"}>4</option>
                              <option value={"5"}>5</option>
                              <option value={"6"}>6</option>
                              <option value={"7"}>7</option>
                           </select>
                        </td>
                     </tr>
                     <tr>
                        <td><h4>Preguntas</h4></td>
                        <td><p>Responde de forma adecuada todas las preguntas que se le realicen</p></td>
                        <td>
                           <select className="dropdown_custom" onChange={(event)=>setGrade4(event.target.value)}>
                              <option value={"default"} >Elija una calificación</option>
                              <option value={"1"}>1</option>
                              <option value={"2"}>2</option>
                              <option value={"3"}>3</option>
                              <option value={"4"}>4</option>
                              <option value={"5"}>5</option>
                              <option value={"6"}>6</option>
                              <option value={"7"}>7</option>
                           </select>
                        </td>
                     </tr>
                  </tbody>
               </Table>
            </ul>
            <Button variant="danger" href="/Grades">Cancelar</Button>
            <Button variant="success" onClick={saveHandler}>Guardar</Button>
         </div>
      </div>   
    </div>
    )
} 
