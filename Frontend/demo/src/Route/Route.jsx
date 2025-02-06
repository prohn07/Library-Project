import Login from '../components/login/Login'
import Registration from '../components/registration/Registration'
import LibraryCatalog from '../components/librarycatalog/LibraryCatalog'
import Booklist from "../components/booklist/Booklist";
import Bookdetail from '../components/bookdetail/Bookdetail';

export var route = [

    
    {path:"/booklist", element: <Booklist/> },
    {path:"/bookdetail/:id", element: <Bookdetail/> }
    
];