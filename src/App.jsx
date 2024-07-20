import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import Home from "./Components/Home";
<<<<<<< HEAD
import DetailForm from "./Components/DetailForm";
=======
import ResultPage from "./Components/Result";
>>>>>>> ee25fc58e94422493e1e85a7cd7b1ac53aa212b5

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
<<<<<<< HEAD
      <Route path="/details" element ={<DetailForm />} />
=======
      <Route path="/result" element={<ResultPage />} />
>>>>>>> ee25fc58e94422493e1e85a7cd7b1ac53aa212b5
    </Routes>
  );
};

export default App;
