import { createBrowserRouter } from "react-router-dom";
import Itens from "./pages/Itens/Itens";
import Principal from "./pages/Principal/Principal";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/NavBar";
import Item from "./pages/Item/Item";
import DetailedItem from "./pages/DetailedItem/DetailedItem"

const router = createBrowserRouter([
    {
        path:"/",
        element: <Navbar />,
        children: [{
            index:true,
            element: <Principal/>
        },{
            path:"itens",
            element: <Header/>,
            children:[
                {
                    index: true,
                    element: <Itens />
                }, {
                    path: "item/:itemId",
                    element: <Item />
                }, {
                    path: "item",
                    element: <Item />
                }, {
                    path: "detailedItem/:itemId",
                    element: <DetailedItem />
                }]
            }
        ] 
    }
]);

export default router;