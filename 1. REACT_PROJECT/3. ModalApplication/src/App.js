import logo from './logo.svg';
import './App.css';
import Modal from './component/Modal';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-screen gap-6 flex flex-col items-center  bg-[#14161b] text-white">
     <h1 className='text-5xl font-bold mt-4'>Popup Modal</h1>
     <button onClick={()=>setShowModal(true) } className='bg-violet-500 px-4 py-2 rounded-lg text-lg'>Get the eBook</button>
     {
      showModal && <Modal/>
     }
     
    </div>
  );
}

export default App;
