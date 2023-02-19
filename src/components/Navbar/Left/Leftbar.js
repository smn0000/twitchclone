import { useState } from 'react'
import Leftbarbtn from './Leftbarbtn'
import Morebtn from './Morebtn'
import Logo from './Logo'


const Leftbar = () => {

  const [selected, setSelected] = useState()

  const handleSelect = (id) =>{
    if(selected === id ) return
    setSelected(id)
  }

  return (
    <div className=' w-1/4 flex align-middle px-2 text-xl font-medium'>
      <Logo onClick={handleSelect}/>
      <Leftbarbtn id={1} onClick={handleSelect} selected={selected} text='Following'/>
      <Leftbarbtn id={2} onClick={handleSelect} selected={selected} text='Browse'/>
      <Morebtn/>
    </div>
  )
}

export default Leftbar