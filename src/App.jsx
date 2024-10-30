import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
import imgHero from './assets/imgHero.png'
import fullCar from './assets/full.png'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
function App() {
  const idClickoneRef = useRef()
  const idClicktwoRef = useRef()
  const navmenuRef = useRef();
  const ulRef = useRef();
  const [truefalse, setTrueFalse] = useState(false);
  const navigate = useNavigate();

  
  function handleClickIdone(){
    idClickoneRef.current.style.backgroundColor = '#192732';
    idClicktwoRef.current.style.backgroundColor = '#121C24'
  }

  
  function handleClickIdtwo(){
    idClicktwoRef.current.style.backgroundColor = '#192732'
    idClickoneRef.current.style.backgroundColor = '#121c24';
  }

  useEffect(() => {
    const listItems = ulRef.current.querySelectorAll('li');
    listItems.forEach(li => {
      li.addEventListener('click', () => {
        setTrueFalse(false);
        navmenuRef.current.style.left = "-100%";
      });
    });

    return () => {
      listItems.forEach(li => {
        li.removeEventListener('click', () => {
          setTrueFalse(false);
          navmenuRef.current.style.left = "-100%";
        });
      });
    };
  }, []);
  function menunn() {
    if (!truefalse) {
      navmenuRef.current.style.left = "0";
      setTrueFalse(true);
    } else {
      navmenuRef.current.style.left = "-100%";
      setTrueFalse(false);
    }
  }
  
  
  return (
    <div className='container font-ConcertOne'>
      
      {/* header */}
      
      <header className='w-full  py-5 flex justify-between items-center'>
         <h1 className='text-[#FDEB14] font-semibold flex items-center lg:text-2xl lg:gap-3 md:text-xl gap-2 text-base'><span className='lg:text-4xl md:text-2xl text-xl'>X</span> LOGISTIX</h1>
         
        <div className='flex items-center'>
          
          
        <div onClick={menunn} className='text-xl sm:text-3xl cursor-pointer z-50 text-white lg:hidden'>
            {!truefalse ? (
              <i className="fa-solid fa-bars" id='menu-nn'></i>
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </div>
          
          <div
            id='nav-menu'
            ref={navmenuRef}
            className='absolute top-0 left-[-100%]  w-full 
            bg-black/80 backdrop-blur-sm flex  items-center justify-center 
            duration-300 '
          >
            <ul ref={ulRef} className='flex flex-col items-center gap-8 py-20 text-white font-semibold text-base'>
              <li><Link to={'/'} className='px-4'>Our Services</Link></li>
              <li><Link to={'/'} className='px-4'>Solution</Link></li>
              <li><Link to={'/'} className='px-4'>About Us</Link></li>
              <li><Link to={'/'} className='px-4'>Contact Us</Link></li>
            </ul>
          </div>
  
          <div className='text-white hidden lg:flex gap-2 font-semibold text-base items-center'>
            <Link className='hover:text-[#fdeb14] px-4 duration-300'>Our Services</Link>
            <Link className='hover:text-[#fdeb14] px-4 duration-300'>Solution</Link>
            <Link className='hover:text-[#fdeb14] px-4 duration-300'>About Us</Link>
            <Link className='text-[#000] py-2 border border-transparent hover:bg-[#fdea14a6] bg-[#fdeb14] rounded-xl  px-4 duration-300'>Contact Us</Link>
          </div>

        </div>
      </header>

      {/* section  */}

      <section className='w-full h-[100vh]' >
        <div className='font-ConcertOne lg:py-10 py-5 w-full text-4xl mg:text-6xl lg:text-6xl xl:text-7xl text-white '>
          <h1 className='font-semibold '>
            <span className='text-[#FDEB14]'>DISCOVER</span> WITH OUR ITEGRATED LOGISTICS
          </h1>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div className='relative h-[200px] lg:h-auto'>
              <img src={imgHero} className='absolute -top-20 -z-1 md:-top-40 lg:-top-72 xl:-top-80 xl:-left-40 -left-5 w-64 md:w-96 lg:w-[500px] ' alt="" />
            </div>
            <div className='flex flex-col gap-3 md:mt-20'>
              <p className='text-[14px] md:text-base lg:text-xl xl:text-2xl text-white/40'>We Deliver, Track and shipping</p>
              <div className=' flex flex-col'>
                <div className='flex'>
                  <div ref={idClickoneRef} onClick={handleClickIdone} className='cursor-pointer px-4 py-2 md:px-6 md:py-4 bg-[#192732] rounded-tl-xl text-white text-[8px] mg:text-base  lg:text-xl'>TRACKING</div>
                  <div ref={idClicktwoRef} onClick={handleClickIdtwo} className='cursor-pointer px-4 py-2 md:px-6 md:py-4 bg-[#121C24] rounded-tr-xl text-white text-[8px] mg:text-base  lg:text-xl'>RATE && SHIP</div>
                </div>
                <div className='p-3 lg:p-6 bg-[#192732] rounded-b-xl font-semibold rounded-tr-xl text-white'>
                  <div className='text-[8px] mg:text-base lg:text-xl lg:font-medium'>
                    <input className='px-3 py-2 text-black rounded-xl outline-none' type="text" placeholder='TRACKING ID' />
                    <button className='px-4 py-2 rounded-lg text-black ml-3 bg-[#fdeb14] '>TRACK</button>
                  </div>
                  <p className='text-[8px] mt-2 md:text-sm lg:text-base'>See the tracking ID on shipping document. <span className='text-[#fdeb14]'>Help</span></p>
                </div>
              </div>

            </div>
        </div>


      </section>

      {/* reklama */}
      
      <div className='font-bold text-white text-[8px] mg:text-2xl lg:text-3xl  border-t-4 border-b-4 border-white/20 py-5 flex justify-around'>
         
         <span className='duration-300 '>SHIPPING</span>
         <span className='text-[#fdeb14]'>X</span>
         <span>TRACKING</span>
         <span className='text-[#fdeb14]'>X</span>
         <span>DELIVER</span>
         <span className='text-[#fdeb14]'>X</span>
         <span>SHIPPING</span>


      </div>

      {/* by air by ocean */}
      
      <div className='flex flex-col text-white'>

        <div className='grid grid-cols-1 md:grid-cols-2 py-20 px-20'>
          <h1 className='text-2xl mg:text-3xl lg:text-5xl lg:w-[430px] font-bold'>
            WI PROWIDE FULL ASISTANCE IN SHIPPING
          </h1>
          <p className='text-[8px] md:text-sm lg:text-base lg:w-[500px] text-justify'>
            weprowide shipping servicec Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat nam iste doloremque sed nisi quaerat maxime quis atque. Incidunt ducimus eum voluptates similique animi minus maxime autem voluptas porro?
          </p>

        </div>

        <div className='grid grid-cols-1 py-10 border-t-2 border-x-white/30 border-b-2'>
          <h1 className='text-xl mg:text-2xl lg:text-5xl lg:w-[430px] font-bold'>
            BUY AIR
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-5 py-10 lg:py-20  border-b-[#fdeb14] border-b-2'>

          <div className=' flex flex-col gap-4 lg:gap-7'>
             <h1 className='text-xl mg:text-2xl lg:text-5xl lg:w-[430px] font-bold text-[#fdeb14]'>
               BY OCEAN
             </h1>
             <p className='text-[8px] text-white/50 md:text-sm lg:text-base'>Lorem Vel pariatur alias voluptatem corrupti modi eaque possimus at unde voluptatum doloremque! Porro saepe consequuntur eius quidem iure repellendus nostrum ex rerum.</p>
          </div>

          <div className='shipp rounded-xl text-[#fdeb14] font-bold flex gap-2 justify-end items-end h-[100px] lg:h-[200px] duration-300 '>
            <div className='flex items-center gap-3 pb-3 pr-3 hover:text-[#fdea14a6] cursor-pointer'>
              <p>LEARN MORE</p> <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>

        
        <div className='grid grid-cols-1 py-10  border-x-white/30 border-b-2'>
          <h1 className='text-xl mg:text-2xl lg:text-5xl lg:w-[430px] font-bold'>
            BY LAND
          </h1>
        </div>



      </div>

      {/* lET1S SEE OUR PROCESS */}

      <div className='border-t-2 mt-10 lg:mt-20 border-[#fdeb14] w-full'>   
        {/* video joylansa kere */}
        <div className='w-full grid grid-cols-1 py-10 lg:py-0 lg:grid-cols-2 items-center'>
          <h1 className='text-white text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold' >LET`S SEE OUR PROCESS</h1>
          <img src={fullCar} className='w-full' alt="" />
        </div>
      </div>


{/* Lastest news */}

      <div className='py-5 md:py-10 lg:py-20 flex flex-col gap-5 md:gap-10 lg:gap-16'>
        <div className='flex justify-between items-center text-white'>
          <h1 className='text-base md:text-xl lg:text-3xl xl:text-4xl font-bold'>LASTEST NEWS</h1>
          <select className='px-2 lg:px-4 py-1 lg:py-2 w-[30%] border border-white rounded-xl bg-transparent'>
            <option value="ALL REGION"> ALL REGION</option>
          </select>
        </div>
           
        <div className='flex justify-between gap-4'>
           {/* API DAN KELADI MALUMOT */}
           <div className='flex flex-col gap-3 hover:opacity-30 duration-300 lg:gap-5 w-[30%]'>
            <img src={img1} className='lg:w-[350px] rounded-md rounded-2xl  lg:h-[350px] md:w-[150px] md:h-[150px] w-[100px] h-[100px]' alt="" />
            <p className='text-[8px] lg:text-base text-white'> EASING CROSS-BORDER TRADE AND CURTOMS IN A FREE</p>
           </div>           
           <div className='flex flex-col gap-3 hover:opacity-30 duration-300 lg:gap-5 w-[30%]'>
            <img src={img2} className='lg:w-[350px] rounded-md rounded-2xl  lg:h-[350px] md:w-[150px] md:h-[150px] w-[100px] h-[100px]' alt="" />
            <p className='text-[8px] lg:text-base text-white'> EASING CROSS-BORDER TRADE AND CURTOMS IN A FREE</p>
           </div>
           <div className='flex flex-col gap-3 hover:opacity-30 duration-300 lg:gap-5 w-[30%]'>
            <img src={img3} className='lg:w-[350px] rounded-md rounded-2xl  lg:h-[350px] md:w-[150px] md:h-[150px] w-[100px] h-[100px]' alt="" />
            <p className='text-[8px] lg:text-base text-white'> EASING CROSS-BORDER TRADE AND CURTOMS IN A FREE</p>
           </div>


        </div>

      </div>



{/* Question  */}

      <div className='w-full  bg-[#1723]  rounded-xl lg:rounded-3xl font-semibold grid grid-cols-2'>
        <div className='flex  lg:px-10 px-5 items-center text-xl md:text-3xl lg:text-5xl xl:text-6xl text-white'>HAVE A SOME QUESTION?</div>
        <div className='hover:bg-[#fdea14a6] duration-300 cursor-pointer py-10 lg:px-10 px-5 lg:py-32 rounded-xl lg:rounded-3xl bg-[#fdeb14] text-black flex items-center text-xl md:text-3xl lg:text-5xl xl:text-6xl'>CONTACT US</div>

      </div>


      {/* footer */}
      <div className='py-10 lg:py-20 gird flex flex-col lg:flex-row mx-auto grid-cols-1 lg:grid-cols-2   text-white gap-5  lg:gap-0 lg:justify-between'>
        <div className='flex gap-4 items-center justify-center text-base lg:text-xl'>
          <Link className='hover:text-[#fdeb14] duration-300' >OUR SERVICES</Link>
          <Link className='hover:text-[#fdeb14] duration-300'>SOLUTION</Link>
          <Link className='hover:text-[#fdeb14] duration-300'>NEWS</Link>
          <Link className='hover:text-[#fdeb14] duration-300'>ABOUT US</Link>
        </div>
        <div className='flex gap-4 items-center justify-center text-sm lg:text-base'>
          <Link className='hover:text-[#fdeb14] duration-300'>TERMS OF SERVICES  </Link>
          <Link className='hover:text-[#fdeb14] duration-300'>PRIVASY POLISY </Link>
        </div>

      </div>
    </div>
  )
}

export default App
