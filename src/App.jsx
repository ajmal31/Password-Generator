import { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDelete } from "react-icons/md";
import { genPassword } from './Hooks/generatePassword';

function App() {
   const [copy, setCopy] = useState(false)
   const copyRef = useRef(copy)
   const [createdPasswords, setCreatedPassword] = useState([])
   const [generatedPassword, setGeneratedPassword] = useState('')
   const [passwordLength, setPasswordLength] = useState('')
   const [lengthValidation, setLengthValidation] = useState(false)
   const [symbols,setSymbols]=useState(false)
   const [numbers,setNumbers]=useState(false)
   const [uppercase,setUppercase]=useState(false)
   const [lowerCase,setLowercase]=useState(false)
   const [extrasValidation,setExtrasValidation]=useState(false)
   const [passwordLengthExceed,setPasswordLengthExceed]=useState(false)
   
   //Handle Copy
   const handleCopy = () => {

      if (!copyRef.current) {
         setCopy(true)
         toast.success("Text copied", { position: 'top-right', className: "font-Outfit bg-gray-300  text-sm" })

      }
      setTimeout(() => {

         setCopy(false)
      }, 4000)
   }
   //Handle Generate Passwords
   const generatePassword = () => {
      console.log("password length",passwordLength)
      if (passwordLength.length <= 0) setLengthValidation(true)
      else if(passwordLength>15) setPasswordLengthExceed(true)
      else if(!numbers&&!symbols&&!uppercase&&!lowerCase) setExtrasValidation(true)
      else {
         const k=genPassword(passwordLength,numbers,symbols,uppercase,lowerCase)
         setGeneratedPassword(k)
         setCreatedPassword([...createdPasswords, k])
      }
      setTimeout(() => {
         setLengthValidation(false)
         setExtrasValidation(false)
         setPasswordLengthExceed(false)
      }, 5000)

      
      return 
   }
   //handle Created Passwords
   const clearGeneratedPassword = () => {
      setGeneratedPassword("")
      setPasswordLength('')
      setSymbols(false)
      setNumbers(false)
      setUppercase(false)
      setLowercase(false)
   }
   //Handle Password Length
   const handlePasswordLength = (e) => {

      setPasswordLength(e.target.value)
   }
   // Handle Password Extra Ultreations
   const handleExtras=(e)=>{

      switch(e?.target?.name){
         case "symbols":
            setSymbols(!symbols)
            break
         case "numbers":
            setNumbers(!numbers)
            break  
         case "uppercase":
           setUppercase(!uppercase)  
           break
         case "lowercase":
            setLowercase(!lowerCase)
            break  
      }

   }

   return (
      <>
         <div className=' h-screen w-screen flex  text-txt_cl  bg-primary_bg justify-evenly items-center font-Outfit '>

            <div className=' h-2/3 gap-3 flex  w-3/5 ' >

               <div className='bg-gray-200  bg-secondory_ flex flex-col  items-center rounded-xl h-full w-2/3 '>

                  {/* Heading */}
                  <div className='w-full flex justify-center items-center  h-1/6' >
                     <h1 className='text-2xl ' >Genarate Password</h1>
                  </div>

                  <div className='  w-4/5 gap-2 flex  '>

                     {generatedPassword.length !== 0 ? <MdDelete className='text-3xl  mt-1 cursor-pointer' onClick={clearGeneratedPassword} /> : ''}
                     {generatedPassword.length === 0 ?

                        <>
                           <input type="number" className='w-3/5 h-[40px] rounded-xl bg-primary_bg focus:outline-none p-5 ' placeholder='Length of Password' onChange={handlePasswordLength} />
                           <button className='w-2/5 px-1 h-[40px] rounded-2xl bg-button_hover focus:outline-none ' onClick={generatePassword} > Generate Password </button>

                        </>
                        :
                        <>
                           <input type="text" className='w-3/5 h-[40px] rounded-xl bg-primary_bg focus:outline-none p-5 ' value={generatedPassword} />
                           <button className='w-2/5 px-1 h-[40px] rounded-2xl bg-button_hover focus:outline-none ' onClick={handleCopy} > {copy ? "copied" : " copy text"} </button>
                        </>

                     }
                  </div>
                  {
                     lengthValidation && <div className=' pl-3  w-5/6 '>
                        <p className='text-red-500'>please enter password length</p>
                     </div>
                     
                  }
                  {
                     extrasValidation&&<div className=' pl-3  w-5/6 ' >
                  <p className='text-red-500'>please Include any of them from below</p>
                  </div>
                   }
                  {
                     passwordLengthExceed&&<div className=' pl-3  w-5/6 ' >
                  <p className='text-red-500'>password limit up to 15</p>
                  </div>
                   }

                  <div className='w-5/6 ml-5 mt-5'>
                     <div className='flex justify-between items-center' >

                        <div className='' >
                           <label htmlFor="" className='ml-3 w-5/6'>Include Numbers</label>
                        </div>
                        <div className='flex justify-center mr-6 items-center'>
                           <input type="checkbox" checked={numbers} className='h-5 w-5' name='numbers' onChange={handleExtras} />
                        </div>
                     </div>

                     <div className='flex justify-between mt-2 items-center' >

                        <div className='' >
                           <label htmlFor="" className='ml-3 w-5/6'>Include Symbols</label>
                        </div>
                        <div className='flex justify-center mr-6 items-center'>
                           <input type="checkbox" checked={symbols} className='h-5 w-5 checked-checkbox' name='symbols' onChange={handleExtras}  />
                        </div>
                     </div>
                     <div className='flex justify-between mt-2 items-center' >

                        <div className='' >
                           <label htmlFor="" className='ml-3 w-5/6'>Include Uppercase</label>
                        </div>
                        <div className='flex justify-center mr-6 items-center'>
                           <input type="checkbox" name='uppercase' checked={uppercase} onChange={handleExtras} className='h-5 w-5' />
                        </div>
                     </div>
                     <div className='flex justify-between items-center mt-2' >

                        <div className='' >
                           <label htmlFor="" className='ml-3 w-5/6'>Include LowerCase</label>
                        </div>
                        <div className='flex justify-center mr-6 items-center'>
                           <input type="checkbox" className='h-5 w-5' checked={lowerCase} name='lowercase' onChange={handleExtras} />
                        </div>
                     </div>





                  </div>

               </div>
               {/* Password History  */}
               <div className=' bg-gray-200 h-full flex flex-col bg-secondory_   rounded-xl w-1/3'>
                  <div className='w-full h-1/6  flex justify-center items-center ' >
                     <h1 className='text-2xl ' >Passwords History</h1>
                  </div>
                  <div className=' h-5/6 w-full flex justify-center items-center  '>
                     <div className='  w-4/6 h-full flex justify-center  overflow-hidden overflow-ellipsis  ' >
                        <ul className='' >
                           {createdPasswords.map((val) => (

                              <li className='overflow-ellipsis ' >
                                 {val}
                              </li>
                           ))}

                        </ul>
                     </div>
                  </div>
               </div>


            </div>

         </div>
      </>
   )
}

export default App
