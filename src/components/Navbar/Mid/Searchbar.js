import Input from "./Input"
import {FaSearch} from "react-icons/fa"
import { useState } from "react"

const Searchbar = () => {

const [input, setInput] = useState('') 

const handleQuery = (input) => {
  console.log('Searching for', input)
}
  return (
    <div className=" w-96 h-2 flex items-center">
      <Input setInput={setInput} />
      <button onClick={() => handleQuery(input)} disabled={input === '' ? true : false} className="flex justify-center items-center bg-black-600 aspect-square h-9 ml-[1px] rounded-r-md disabled:cursor-not-allowed"  >
        <FaSearch size="20px"/>
      </button>
      

    </div>
  )
}

export default Searchbar