import "../StyleFiles/Modify3.css"
import logo from '../StyleFiles/logouai.jpg'
import { useNavigate } from "react-router-dom";
import {Navbar,Nav,Button, Table,Form,FloatingLabel,Dropdown,DropdownButton} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';


export default function Modify3(){
   const navigate = useNavigate(); /*Variable utilizada para redirigir al Modify3 page*/
   const [data, setData] = useState([]);
   const [student,setStudent] = useState([]);
   const  [t, i18n]  = useTranslation(); /*Variable utilizada para traducir texto*/
   const changeLanguage = (lng) => {i18n.changeLanguage(lng);};
   const [grade1, setGrade1] = useState("");
   const [grade2, setGrade2] = useState("");
   const [grade3, setGrade3] = useState("");
   const [grade4, setGrade4] = useState("");
   const [grade5, setGrade5] = useState("");
   const [grade6, setGrade6] = useState("");
   const [grade7, setGrade7] = useState("");
   const [comment1,setComment1] = useState("");
   const [comment2,setComment2] = useState("");
   const [comment3,setComment3] = useState("");
   const [comment4,setComment4] = useState("");
   const [comment5,setComment5] = useState("");
   const [comment6,setComment6] = useState("");
   const [comment7,setComment7] = useState("");
   

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

   const Modify3=async(e)=>{
      e.preventDefault()
      try{
        const url = "http://127.0.0.1:5000/Progress3"
        const options = {
          method: "POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({ 
            "user":student.StudentMail,
            "grade1":grade1,
            "grade2":grade2,
            "grade3":grade3,
            "grade4":grade4,
            "grade5":grade5,
            "grade6":grade6,
            "grade7":grade7,
            "feedback1":comment1,
            "feedback2":comment2,
            "feedback3":comment3,
            "feedback4":comment4,
            "feedback5":comment5,
            "feedback6":comment6,
            "feedback7":comment7,
         })
        }
        const response = await fetch(url,options)
        if (response.status === 200){
            alert("Enviado correctamente!")
        }
        else if((response.status === 500)){
          alert("Algo salió mál, intentelo de nuevo")}
      } catch (error){
          console.log(error)
          alert("Hubo un error")
      }
   };

   const handleStudent = (event)=>{
      let selectedName = event.target.value;
      const selectedStudent = data.find(user => user.StudentName === selectedName);
      setStudent(selectedStudent);
      console.log(selectedStudent);
   };
   const handleLogout=(e)=>{
      localStorage.clear();
      navigate("/")
   };
  return(
   <div>
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
   <div className='Main_Modify3'>
      <div className='Main_Modify3_Content'>
         <ul> 
            <br/>
            <h3><strong>Informe final: {student.StudentName}</strong></h3>
            <select title="Elija un estudiante" value={data.usuario} onChange={handleStudent}>
               <option value={"default"}>Elija un estudiante</option>
               {data.map((usuario) => (
                  <option key={usuario.StudentName} value={usuario.StudentName} >{usuario.StudentName}</option>))}  
            </select>
            <br/>
            <Table variant="Modify3_table" classname="Modify3_table">
               <thead>
                  <tr>
                     <th><h3><strong>Item a evaluar</strong> </h3></th>
                     <th><h3><strong>Calificación</strong></h3></th>
                     <th><h3><strong>Comentarios</strong></h3></th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td><h4>Contexto/Problema</h4></td>
                     <td>
                        <select className="dropdown_custom" onChange={(event)=>setGrade1(event.target.value)}>
                           <option value={"default"} >Elija una calificación</option>
                           <option value={"1"}>1</option>
                           <option value={"3"}>3</option>
                           <option value={"5"}>5</option>
                           <option value={"7"}>7</option>
                        </select>
                     </td>
                     <td>
                        <FloatingLabel controlId="floatingTextarea" label="Deje un comentario" size="sm">
                           <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>{setComment1(e.target.value)}}/>
                        </FloatingLabel>  
                     </td>
                  </tr>
                  <tr>
                     <td><h4>Objetivos SMART</h4></td>
                     <td>
                        <select className="dropdown_custom" onChange={(event)=>setGrade2(event.target.value)}>
                           <option value={"default"} >Elija una calificación</option>
                           <option value={"1"}>1</option>
                           <option value={"3"}>3</option>
                           <option value={"5"}>5</option>
                           <option value={"7"}>7</option>
                        </select>
                     </td>
                     <td>
                        <FloatingLabel controlId="floatingTextarea" label="Deje un comentario" size="sm">
                           <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>{setComment2(e.target.value)}}/>
                        </FloatingLabel>
                     </td>
                  </tr>
                  <tr>
                     <td><h4>Estado del arte/Solución/Metodología</h4></td>
                     <td>
                        <select className="dropdown_custom" onChange={(event)=>setGrade3(event.target.value)}>
                           <option value={"default"} >Elija una calificación</option>
                           <option value={"1"}>1</option>
                           <option value={"3"}>3</option>
                           <option value={"5"}>5</option>
                           <option value={"7"}>7</option>
                        </select>
                     </td>
                     <td>
                        <FloatingLabel controlId="floatingTextarea" label="Deje un comentario" size="sm">
                           <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>{setComment3(e.target.value)}}/>
                        </FloatingLabel>
                     </td>
                  </tr>
                  <tr>
                     <td><h4>Métricas, desarrollo y plan de implementación</h4></td>
                     <td>
                        <select className="dropdown_custom" onChange={(event)=>setGrade4(event.target.value)}>
                           <option value={"default"} >Elija una calificación</option>
                           <option value={"1"}>1</option>
                           <option value={"3"}>3</option>
                           <option value={"5"}>5</option>
                           <option value={"7"}>7</option>
                        </select>
                     </td>
                     <td>
                        <FloatingLabel controlId="floatingTextarea" label="Deje un comentario" size="sm">
                           <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>{setComment4(e.target.value)}}/>
                        </FloatingLabel>
                     </td>
                  </tr>
                  <tr>
                     <td><h4>Evaluación económica</h4></td>
                     <td>
                        <select className="dropdown_custom" onChange={(event)=>setGrade5(event.target.value)}>
                           <option value={"default"} >Elija una calificación</option>
                           <option value={"1"}>1</option>
                           <option value={"3"}>3</option>
                           <option value={"5"}>5</option>
                           <option value={"7"}>7</option>
                        </select>
                     </td>
                     <td>
                        <FloatingLabel controlId="floatingTextarea" label="Deje un comentario" size="sm">
                           <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>{setComment5(e.target.value)}}/>
                        </FloatingLabel>
                     </td>
                  </tr>
                  <tr>
                     <td><h4>Resultados/Conclusiones</h4></td>
                     <td>
                        <select className="dropdown_custom" onChange={(event)=>setGrade6(event.target.value)}>
                           <option value={"default"} >Elija una calificación</option>
                           <option value={"1"}>1</option>
                           <option value={"3"}>3</option>
                           <option value={"5"}>5</option>
                           <option value={"7"}>7</option>
                        </select>
                     </td>
                     <td>
                        <FloatingLabel controlId="floatingTextarea" label="Deje un comentario" size="sm">
                           <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>{setComment6(e.target.value)}}/>
                        </FloatingLabel>
                     </td>
                  </tr>
                  <tr>
                     <td><h4>Formato, ortografía y redacción</h4></td>
                     <td>
                        <select className="dropdown_custom" onChange={(event)=>setGrade7(event.target.value)}>
                           <option value={"default"} >Elija una calificación</option>
                           <option value={"1"}>1</option>
                           <option value={"3"}>3</option>
                           <option value={"5"}>5</option>
                           <option value={"7"}>7</option>
                        </select>
                     </td>
                     <td>
                        <FloatingLabel controlId="floatingTextarea" label="Deje un comentario" size="sm">
                           <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>{setComment7(e.target.value)}}/>
                        </FloatingLabel>
                     </td>
                  </tr>
               </tbody>
            </Table>
         </ul>
         <Button variant="danger" href="/Grades">Cancelar</Button>
         <Button variant="success" onClick={Modify3}>Guardar</Button>
      </div>
   </div>   
 </div>
    )
} 
