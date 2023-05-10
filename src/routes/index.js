import config from '~/config';

//layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Male from '~/pages/Male/Male'
import Female from '~/pages/Female';
import Profile from '~/pages/Profile';
import ProductItem from '~/pages/ProductItem/productItem';

//public Routes
const publicRoutes = [
  { path: config.routes.home, component: Home, layout: HeaderOnly },
  { path: config.routes.product, component: Product },
  { path: config.routes.male, component: Male },
  { path: config.routes.female, component: Female },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.productItem, component: ProductItem },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
