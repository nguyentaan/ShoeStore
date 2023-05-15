import config from '~/config';

//layouts
import { DefaultLayout, HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Male from '~/pages/Male/Male';
import Female from '~/pages/Female';
import Profile from '~/pages/Profile';
import ProductItem from '~/pages/ProductItem/productItem';
import Login from '~/pages/Login';
import Register from '~/pages/Resgister/Register';

//public Routes
const publicRoutes = [
  { path: config.routes.home, component: Home, layout: HeaderOnly },
  { path: config.routes.product, component: Product, layout: HeaderOnly },
  { path: config.routes.male, component: Male, layout: HeaderOnly },
  { path: config.routes.female, component: Female, layout: HeaderOnly },
  { path: config.routes.profile, component: Profile, layout: HeaderOnly },
  { path: config.routes.productItem, component: ProductItem, layout: HeaderOnly },
  { path: config.routes.login, component: Login, layout: DefaultLayout },
  { path: config.routes.register, component: Register, layout: DefaultLayout },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
