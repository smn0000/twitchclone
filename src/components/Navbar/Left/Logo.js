import { FaTwitch } from 'react-icons/fa'

const Logo = ({onClick}) => {
  return (
    <div className='flex items-center justify-center ml-1 mr-4'>
        <button onClick={() => onClick(0)}>
            <FaTwitch size='25px' className='hover:text-violet-600'/>
        </button>
        
    </div>
  )
}

export default Logo