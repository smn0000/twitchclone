import Moremenuitem from "./Moremenuitem"


const Moremenu = () => {

  const items = {
    general: [
      {id: 1, name: 'About'}, 
      {id: 2, name: 'Advertisers'},
      {id: 3, name: 'Blog'},
      {id: 4, name: 'Developers'},
      {id: 5, name: 'Download Apps'},
      {id: 6, name: 'Gift Card'},
      {id: 7, name: 'IGDB'},
      {id: 8, name: 'Jobs'},
      {id: 9, name: 'Loot Cave - Merch Store'},
      {id: 10, name: 'Music on Twitch'},
      {id: 11, name: 'Partners'},
      {id: 12, name: 'Press'},
      {id: 13, name: 'Turbo'},
    ],
    help:[
      {id: 1, name: 'Accessibility Statement'}, 
      {id: 2, name: 'Ad Choises'},
      {id: 3, name: 'Community Guidelines'},
      {id: 4, name: 'Cookie Policy'},
      {id: 5, name: 'Help'},
      {id: 6, name: 'Privacy Policy'},
      {id: 7, name: 'Safety Center'},
      {id: 8, name: 'Security'},
      {id: 9, name: 'Terms'}
    ]
  }




  return (
    <div className='w-48  rounded-lg absolute top-10 left-0 bg-black-700 shadow-black-900 shadow-[-1px_-1px_2px] p-2 '>
      <div className='flex flex-col'>
        <span className='text-sm text-gray-400 font-semibold my-1 pl-1'>GENERAL</span>
        {items.general.map(item => <Moremenuitem key={item.id} text={item.name}/>)}
      </div>

      <div className='my-2 h-1 w-full border-t border-gray-700'></div>

      <div className='flex flex-col'>
        <span className='text-sm text-gray-400 font-semibold my-1 pl-1 '>HELP & LEGAL</span>
        {items.help.map(item => <Moremenuitem key={item.id} text={item.name}/>)}
      </div>
        
        
    </div>
  )
}

export default Moremenu