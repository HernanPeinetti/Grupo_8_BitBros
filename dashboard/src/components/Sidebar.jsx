import {SidebarData} from './SidebarData'

export const Sidebar = () => {
  return (
    <div className="Sidebar">
        <ul className='SidebarList'>
        {SidebarData.map((elemento, key) =>{
        return(
            <>
            <li key={key} 
                className='row'
                onClick={() =>{window.location.pathname = elemento.link}}>
                {" "}
            <div id='icon'>{elemento.icon}</div>{" "}
                <div id='titulo'>
                    {elemento.titulo}
                </div>
             </li>
            </>
        )
    })}
    </ul>
    </div>
  )
}
