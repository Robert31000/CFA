import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';


//OUTLET TE PERMITE QUE SE MUESTRE TU PAGINA DE INICIO AL PRINCIO

export default function Layout() {
    return (
        <div>
            <Sidebar/>
            
            <Outlet />
        
        </div>

    )
}

