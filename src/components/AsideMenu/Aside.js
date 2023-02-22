import Asideshort from "./Asideshort"
import Asidelong from "./Asidelong"
import mockdata from '../../MOCK_DATA.json'
import { useState } from "react"

const Aside = () => {

  const [isSorted, setIsSorted] = useState(true)
  const [hidden, setHidden] = useState(false)

  let unsorted = mockdata
  let sorted = [...mockdata].sort((a,b) => b.viewer - a.viewer)

  const handleSort = ()=>{   
    setIsSorted((currentValue => !currentValue))  
  }


  const handleToggle = () => {
    setHidden((current)=> !current)
  }

  return (
    <aside className='bg-black-700'>
      {hidden ? <Asideshort data={isSorted ? sorted : unsorted} toggle={handleToggle}/> : <Asidelong data={isSorted ? sorted : unsorted} toggle={handleToggle} sort={handleSort} isSorted={isSorted}/>}
    </aside>
  )
}

export default Aside