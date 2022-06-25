import Home from '../pages/Home'
import Generic from '../pages/Generic'
import Properties from '../pages/Properties'
import Signin from '../pages/Signin';
import SelectedHouse from '../pages/SelectedHouse';
import Myproperties from '../pages/Myproperties';
import AddNew from '../pages/AddNew'
// import Footer from '../pages/Footer'


export const navbar = [
    {
        id:1,
        title: 'Home',
        path:'/home',
        Element:<Home/>,
        search:'?',
        hidden:false,
        private:false,
    },
    {
        id:2,
        title: 'Properties',
        path:'/properties',
        Element:<Properties/>,
        search:'?',
        hidden:false,
        private:false,
    },
    {
        id:3,
        title: 'Selected House',
        path:'/properties/:id',
        Element:<SelectedHouse/>,
        search:'?',
        hidden:true,
        private:false,
        useParams:true,

    },
    {
        id:4,
        title: 'Contacts',
        path:'/contacts',
        Element:<Generic/>,
        search:'?',
        hidden:false,
        private:false,
    },
    {
        id:5,
        title: 'Signin',
        path:'/signin',
        Element:<Signin/>,
        search:'?',
        hidden:true,
        private:false,
    },
    {
        id:6,
        title: 'Signup',
        path:'/signup',
        Element:<Generic/>,
        search:'?',
        hidden:true,
        private:false,
    },
    {
        id:7,
        title: 'My Properties',
        path:'/myproperties',
        Element:<Myproperties/>,
        search:'?',
        hidden:true,
        private:false,
        useParams:true,

    },
    {
        id:8,
        title: 'Add New',
        path:'/properties/addnew',
        Element:<AddNew/>,
        search:'?',
        hidden:true,
        private:false,
        useParams:true,

    },
    {
        id:9,
        title: 'Edit item',
        path:'/properties/addnew/:id',
        Element:<AddNew/>,
        search:'?',
        hidden:true,
        private:false,
        useParams:true,

    },
    // {
    //     id:10,
    //     title: 'Footer',
    //     path:'/footer',
    //     Element:<Footer/>,
    //     search:'?',
    //     hidden:true,
    //     private:false,
    //     useParams:true,

    // },
]