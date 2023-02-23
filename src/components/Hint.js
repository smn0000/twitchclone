import React from 'react'



const Hint = ({position ,text}) => {
    let style = "fixed pointer-events-none"
    let left = " mr-28 " , right = " ml-28 " , top = " mb-16 ", bottom = " mt-16 "

    let notchStyle = "h-5 w-5 rounded-sm rotate-45 bg-white absolute -z-10 "
    let notchLeft = "top-1 left-0" , notchRight = "top-1 right-0" , notchTop = " top-0 left-1/2 translate-x-[-50%]", notchBottom = " bottom-0 left-1/2 translate-x-[-50%]"

    switch (position) {
        case "left":
            notchStyle += notchRight
            style += left
            break
        case "right": 
            notchStyle += notchLeft
            style += right
            break
        case "top":
            notchStyle += notchBottom
            style += top
            break
        case "bottom":
            notchStyle += notchTop
            style += bottom
            break
        default:
            console.error('Invalid position name');
    }
    
  return (
    <div className={style}>

        <div className={notchStyle}></div>
        <div className='bg-white w-full h-full rounded-md text-black-900 text-sm font-semibold p-1'>
            {text}
        </div>
    </div>
  )
}

export default Hint