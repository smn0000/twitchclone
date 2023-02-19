import './App.css';
import Navbar from './components/Navbar/Navbar';
import Aside from './components/AsideMenu/Aside';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="h-screen max-h-screen w-full font-roobert text-white bg-[#080809]">
      <Navbar/>
      <div className='flex flex-nowrap h-full w-full pt-[3.1rem]'>
        <Aside/>
        <Main/>
      </div>
      
    </div>
  );
}

export default App;
