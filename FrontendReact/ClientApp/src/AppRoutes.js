import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { FetchCatalog } from "./components/FetchCatalog";
import { FetchExtApi } from "./components/FetchExtApi";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/fetch-catalog',
    element: <FetchCatalog />
    },
    {
        path: '/fetch-extapi',
        element: <FetchExtApi/>
    }
];

export default AppRoutes;
