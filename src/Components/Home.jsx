import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" navbar flex justify-between items-center py-2 px-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        <div className="logo  flex justify-center items-center">
          <img className="w-14" src="https://pngimg.com/uploads/lung/lung_PNG9.png" alt="" />
          <p className="font-bold text-white " >Lung Cancer Analyzer</p>
        </div>
        <ul className="menulist flex gap-4 text-white font-bold">
          <li>home</li>
          <li>Analyze</li>
          <li>Health Tips</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="  body h-[90vh]  bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Lung Cancer Analysis: Early Detection, Better Outcomes</h1>
        <p className="text-lg text-gray-600 px-20 mb-8">
          Our platform utilizes advanced machine learning algorithms to analyze your health data and provide personalized insights into your lung cancer risk. Early detection is crucial for successful treatment, and our tool empowers you to take proactive steps towards your health.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={(e)=>{navigate('/details')}}>
          Analyze Yourself
        </button>
      </div>
      <div className="healthTips"></div>
    </div>
  )
}

export default Home;
