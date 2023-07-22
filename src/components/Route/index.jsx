
import { useRoutes } from "react-router"
import Home from "../../Pages/Home";
import Menu from "../../Pages/Menu";
import Map from "../../Pages/Map";





const Router = () => {
    const mainrouter = [
        {
            path: '/',
            element: <Home  />,
            exact: true,
        },
        {
            path: "/menu",
            element: <Menu  />,
        },
        {
            path: "/map",
            element: <Map  />,
        },
        
    ]
    const route = useRoutes(mainrouter);
    return <>{route}</>
}

export default Router