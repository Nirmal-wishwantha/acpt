import About from "../../pagses/about/about";
import ViewStudent from "../../pagses/viewStudent/ViewStudent";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from "../../pagses/home/Home";







const routs=[

    {
        path:'/viewStudent',
        element:<ViewStudent/>,
        text:'View Student',
        pageicon:<HomeRoundedIcon/>,
        key:'ViewStudent'

    },

    {
        path:'/about',
        element:<About/>,
        text:'About',
        pageicon:<AccountCircleIcon/>,
        key:'about'

    },

]

export default routs;