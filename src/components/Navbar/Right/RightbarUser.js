import {FaRegUserCircle} from 'react-icons/fa'

const RightbarUser = ({id, handleToggle,toggled}) => {
  return (
    <button className='flex h-2/3 ml-3 items-center justify-center aspect-square' onClick={() => handleToggle(id)}>
        <FaRegUserCircle size="30px"/>
    </button>
  )
}

export default RightbarUser