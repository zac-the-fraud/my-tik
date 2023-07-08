import Home from "../pages/home";
import Following from "../pages/following";
import DefaultLayout from '../components/layouts/DefaultLayout/'
const publicRoutes = [
    {path: '/', components: Home},
    {path: '/following', components: Following, layout: DefaultLayout }
]
const privateRoutes=[];
export {publicRoutes, privateRoutes}