import "../StyleFiles/Modify1.css"
import logo from '../StyleFiles/logouai.jpg'
import { useNavigate } from "react-router-dom";
import {Navbar,Nav,Button,Table,Form,FloatingLabel,Dropdow,Col,Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';


export default function Evaluation3(){
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
   const [grade5,setGrade5] = useState("");
   const [grade6,setGrade6] = useState("");
   const [grade7,setGrade7] = useState("");
   const [grade8,setGrade8] = useState("");
   const [grade9,setGrade9] = useState("");
   const [grade10,setGrade10] = useState("");
   
   const saveHandler= async(e)=>{
      e.preventDefault();
      try{
         const response = await fetch( "http://127.0.0.1:5000/CompanyEvaluation",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
               "user": emailStudent,
               "grade1": grade1,
               "grade2": grade2,
               "grade3": grade3,
               "grade4": grade4,
               "grade5": grade5,
               "grade6": grade6,
               "grade7": grade7,
               "grade8": grade8,
               "grade9": grade9,
               "grade10": grade10,
               "numberEval": "3",
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
               <h1><strong> Evaluación de desempeño 3: Pasantías</strong> </h1>
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
                        <td><h4>Compromiso y planificación</h4></td>
                        <td><p>Cumple con su trabajo, acuerdos y plazos. Organiza tareas simultáneamente, planifica y prioriza actividades.</p></td>
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
                        <td><h4>Adaptabilidad</h4></td>
                        <td><p>Trabaja eficazmente en diferentes situaciones y con personas o grupos distintos. Se adapta a cambios internos y externos.</p></td>
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
                        <td><h4>Comunicación </h4></td>
                        <td><p>Transmite ideas y opiniones de forma clara y oportuna utilizando adecuadamente tanto los recursos verbales como los no verbales.</p></td>
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
                        <td><h4>Trabajo en equipo </h4></td>
                        <td><p>Demuestra interés, predisposición y capacidad de trabajar con otros para conseguir metas comunes. Colabora con su equipo.</p></td>
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
                     <tr>
                        <td><h4>Liderazgo </h4></td>
                        <td><p>Ejerce influencia sobre un grupo de personas guiándolo hacia el trabajo en conjunto y negocia efectivamente con pares y otras áreas para el logro de objetivos comunes.</p></td>
                        <td>
                           <select className="dropdown_custom" onChange={(event)=>setGrade5(event.target.value)}>
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
                        <td><h4>Capacidad de sobreponerse </h4></td>
                        <td><p>Mantiene su capacidad de trabajo y su control emocional en situaciones de desaprobación o crisis. Recibe retroalimentación de forma positiva.</p></td>
                        <td>
                           <select className="dropdown_custom" onChange={(event)=>setGrade6(event.target.value)}>
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
                        <td><h4>Habilidades ingenieriles </h4></td>
                        <td><p>Identifica oportunidades, considera restricciones, diseña soluciones y analiza e interpreta resultados, justificando sus decisiones.</p></td>
                        <td>
                           <select className="dropdown_custom" onChange={(event)=>setGrade7(event.target.value)}>
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
                        <td><h4>Proactividad y compromiso con el aprendizaje permanente </h4></td>
                        <td><p>Utiliza recursos disponibles adecuados para la resolución de problemas ingenieriles y se informa y amplía sus conocimientos en los temas relacionados con su proyecto.</p></td>
                        <td>
                           <select className="dropdown_custom" onChange={(event)=>setGrade8(event.target.value)}>
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
                        <td><h4>Innovación y creatividad </h4></td>
                        <td><p>Propone e implementa nuevas ideas que agregan valor a su trabajo. Busca la mejora continua.</p></td>
                        <td>
                           <select className="dropdown_custom" onChange={(event)=>setGrade9(event.target.value)}>
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
                        <td><h4>Ética y cumplimiento de estándares </h4></td>
                        <td><p>Evalúa dimensiones éticas en la solución de un problema de ingeniería y se adecua a normas y procedimientos definidos por la industria y la organización.</p></td>
                        <td>
                           <select className="dropdown_custom" onChange={(event)=>setGrade10(event.target.value)}>
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
