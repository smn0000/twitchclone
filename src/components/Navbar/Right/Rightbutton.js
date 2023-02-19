import { BiEnvelope , BiChat, BiCrown}  from "react-icons/bi"


const Rightbutton = ({type}) => {
  return (
    <button className="flex h-2/3 ml-3 items-center justify-center rounded aspect-square hover:bg-black-500"> 
        {type === 'prime' && <BiCrown size={'20px'}/>}
        {type === 'notifications' && <BiEnvelope size={'20px'} />}
        {type === 'whispers' && <BiChat size={'20px'} />} 
    </button>
     

   
  )
}

export default Rightbutton