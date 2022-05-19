import Home from '../component/Home'
import Generic from '../pages/Generic'
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
        Element:<Generic/>,
        search:'?',
        hidden:false,
        priate:false,
    },
    {
        id:3,
        title: 'Contacts',
        path:'/contacts',
        Element:<Generic/>,
        search:'?',
        hidden:false,
        priate:false,
    }
]