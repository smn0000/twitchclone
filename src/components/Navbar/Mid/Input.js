

const Input = ({setInput}) => {
  return (
    <input type="text" placeholder='Search' onInput={e => setInput(e.target.value)} className=" bg-black-500 w-full rounded-l-md font-thin text-sm p-2 border-black-900 focus:border-2 focus:border-violet-400 outline-none focus:bg-black-900 transition duration-200 ease-in" />
  )
}

export default Input