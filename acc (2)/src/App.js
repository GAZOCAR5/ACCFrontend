import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Landing from "./Components/Landing";
import Landing2 from "./Components/ProffessorPages/Landing2";
import Grades from "./Components/ProffessorPages/Grades";
import Modify1 from './Components/ProffessorPages/Modify1';
import Modify2 from './Components/ProffessorPages/Modify2';
import Modify3 from './Components/ProffessorPages/Modify3';
import Meetings from './Components/ProffessorPages/Meetings';
import DashBoardProf from './Components/ProffessorPages/DashBoardProf.js';
import Landing3 from "./Components/AdminPages/Landing3";
import Landing4 from './Components/AdminPages/Landing4.js';
import Step1 from './Components/StepsPages/Step1';
import Step2 from './Components/StepsPages/Step2';
import Step3 from './Components/StepsPages/Step3';
import Step4 from './Components/StepsPages/Step4';
import Step5 from './Components/StepsPages/Step5';
import Step6 from './Components/StepsPages/Step6';
import Step7 from './Components/StepsPages/Step7';
import Step8 from './Components/StepsPages/Step8';
import Step9 from './Components/StepsPages/Step9';
import Step10 from './Components/StepsPages/Step10';
import Step11 from './Components/StepsPages/Step11';
import Step12 from './Components/StepsPages/Step12.js';
import Evaluation1 from "./Components/GradesSupervisor/Evaluation1"
import Evaluation2 from './Components/GradesSupervisor/Evaluation2.js';
import Evaluation3 from './Components/GradesSupervisor/Evaluation3.js';
import FinalEvaluation from './Components/GradesSupervisor/FinalPresentation.js';
import Director from './Components/DirectorPages/Director.js';
import SendEmail from './Components/DirectorPages/SendEmail.js';
import "./i18n.js"


export default function App() {
  const cors = require('cors')
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Login/>}></Route>
      <Route path = "/Signup" element={<Signup/>}></Route>
      <Route path = "/Landing" element={<Landing/>}></Route>
      <Route path = "/Landing2" element={<Landing2/>}></Route>
      <Route path = "/Grades" element={<Grades/>}></Route>
      <Route path = "/Modify1" element={<Modify1/>}></Route>
      <Route path = "/Modify2" element={<Modify2/>}></Route>
      <Route path = "/Modify3" element={<Modify3/>}></Route>
      <Route path = "/Meetings" element={<Meetings/>}></Route>
      <Route path = "/DashBoardProf" element={<DashBoardProf/>}></Route>
      <Route path = "/Landing3" element={<Landing3/>}></Route>
      <Route path = "/Landing4" element={<Landing4/>}></Route>
      <Route path = "/Step1" element={<Step1/>}></Route>
      <Route path = "/Step2" element={<Step2/>}></Route>
      <Route path = "/Step3" element={<Step3/>}></Route>
      <Route path = "/Step4" element={<Step4/>}></Route>
      <Route path = "/Step5" element={<Step5/>}></Route>
      <Route path = "/Step6" element={<Step6/>}></Route>
      <Route path = "/Step7" element={<Step7/>}></Route>
      <Route path = "/Step8" element={<Step8/>}></Route>
      <Route path = "/Step9" element={<Step9/>}></Route>
      <Route path = "/Step10" element={<Step10/>}></Route>
      <Route path = "/Step11" element={<Step11/>}></Route>
      <Route path = "/Step12" element={<Step12/>}></Route>
      <Route path = "/Evaluation1" element={<Evaluation1/>}></Route>
      <Route path = "/Evaluation2" element={<Evaluation2/>}></Route>
      <Route path = "/Evaluation3" element={<Evaluation3/>}></Route>
      <Route path = "/FinalEvaluation" element={<FinalEvaluation/>}></Route>
      <Route path = "/Director" element={<Director/>}></Route>
      <Route path = "/SendEmail" element={<SendEmail/>}></Route>
    </Routes>
    
    </BrowserRouter>
    {/*<Login/>*/}
    
    </>
    
  );
}