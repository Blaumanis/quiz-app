import Question from "./pages/Question";
import Intro from "./pages/Intro";

import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'

function App() {
  const {showScore} = useContext(GlobalContext)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />}/>
      <Route path="/questions" element={!showScore[0] ? <Question/> : <Navigate to="/"/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;


