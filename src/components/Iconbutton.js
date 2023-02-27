import { useState } from "react"
import {BiEnvelope , BiChat, BiCrown, BiDotsVerticalRounded, BiArrowFromRight , BiSortAlt2} from "react-icons/bi"
import Hint from "./Hint"

const Iconbutton = ({icon, text = 'Text', func, hintPosition='right', size='25px', style, disableHint}) => {
    let buttonIcon
    switch (icon) {
        case "notification":
            buttonIcon = <BiEnvelope size={size}/>
            break;
        case "whispers":
            buttonIcon = <BiChat size={size}/>
            break;
        case "prime":
            buttonIcon = <BiCrown size={size}/>
            break;
        case "more":
            buttonIcon = <BiDotsVerticalRounded size={size}/>
            break;
        case "collapse":
            buttonIcon = <BiArrowFromRight size={size}/>
            break; 
        case "expand":
            buttonIcon = <BiArrowFromRight className="rotate-180" size={size}/>
            break; 
        case "sort":
            buttonIcon = <BiSortAlt2 size={size}/>
            break; 
        default:
            buttonIcon = ''
            break;
    }

    const [hover, setHover] = useState(false)

    const handleMouseEnter = () =>{
            setHover(true) 
    }

    const handleMouseLeave = () =>{
        setHover(false)
    }

    return (
    <button className={"flex items-center justify-center h-2/3 rounded aspect-square hover:bg-black-500 " + style} onClick={func} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {buttonIcon}
        {hover && !disableHint && <Hint position={hintPosition} text={text}/>}

    </button>
  )
}

export default Iconbutton