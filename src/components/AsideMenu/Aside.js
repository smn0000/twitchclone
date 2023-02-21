import Asideshort from "./Asideshort"
import Asidelong from "./Asidelong"
import mockdata from '../../MOCK_DATA.json'
import { useState } from "react"

const Aside = () => {

  const [hidden, setHidden] = useState(false)

  const handleToggle = () => {
    setHidden((current)=> !current)
  }

  return (
    <aside className='bg-black-700'>
      {hidden ? <Asideshort data={mockdata} toggle={handleToggle}/> : <Asidelong data={mockdata} toggle={handleToggle}/>}
    </aside>
  )
}

export default Aside