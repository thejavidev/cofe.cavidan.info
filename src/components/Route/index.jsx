
import { useRoutes } from "react-router"
import Home from "../../Pages/Home";
import Menu from "../../Pages/Menu";





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
        
        
    ]
    const route = useRoutes(mainrouter);
    return <>{route}</>
}

export default Router