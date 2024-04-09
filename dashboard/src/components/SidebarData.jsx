import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import LastPageIcon from '@mui/icons-material/LastPage';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';

export const SidebarData = [
    {
        titulo : "Inicio",
        icon : <HomeIcon/>,
        link : "/"
    },
    {
        titulo : "Productos",
        icon : <InventoryIcon/>,
        link : "/productos"
    },
    {
        titulo : "Usuarios",
        icon : <PersonIcon/>,
        link : "/usuarios"
    },
    {
        titulo : "Categorias",
        icon : <CategoryIcon/>,
        link : "/categorias"
    },
    {
        titulo : "Ultimos",
        icon : <LastPageIcon/>,
        link : "/ultimos"
    },
    {
        titulo : "Categoria Total",
        icon : <DoNotDisturbOnTotalSilenceIcon/>,
        link : "/caTotal"
    },
    {
        titulo : "Listado Producto",
        icon : <ChecklistRtlIcon/>,
        link : "/listadoTotal"
    }


]
