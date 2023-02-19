import Rightbutton from "./Rightbutton"
import Bitsbutton from "./Bitsbutton"
import RightbarUser from "./RightbarUser"

const Rightbar = () => {
  return (
    <div className='flex justify-end items-center px-2 font-medium h-full text-sm'>
      <Rightbutton type={'prime'}/>
      <Rightbutton type={'notifications'}/>
      <Rightbutton type={'whispers'}/>
      <Bitsbutton/>
      <RightbarUser/>
    </div>
  )
}

export default Rightbar