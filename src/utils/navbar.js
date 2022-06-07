import Home from '../pages/Home'
import Generic from '../pages/Generic'
import Properties from '../pages/Properties'
import Signin from '../pages/Signin';
import SelectedHouse from '../pages/SelectedHouse';




export const navbar = [
    {
        id:1,
        title: 'Home',
        path:'/home',
        Element:<Home/>,
        search:'?',
        hidden:false,
        priate:false,
    },
    {
        id:2,
        title: 'Properties',
        path:'/properties',
        Element:<Properties/>,
        search:'?',
        hidden:false,
        priate:false,
    },
    {
        id:2,
        title: 'Selected House',
        path:'/properties/:id',
        Element:<SelectedHouse/>,
        search:'?',
        hidden:true,
        priate:false,
        useParams:true,

    },
    {
        id:3,
        title: 'Contacts',
        path:'/contacts',
        Element:<Generic/>,
        search:'?',
        hidden:false,
        priate:false,
    },
    {
        id:4,
        title: 'Signin',
        path:'/signin',
        Element:<Signin/>,
        search:'?',
        hidden:true,
        priate:false,
    },
    {
        id:4,
        title: 'Signup',
        path:'/signup',
        Element:<Generic/>,
        search:'?',
        hidden:true,
        priate:false,
    }
]