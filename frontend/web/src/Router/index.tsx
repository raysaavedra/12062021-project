import { Suspense, Fragment, FC } from "react";
import {
  Routes as ReactRouterDOMRoutes,
  Route as ReactRouterDOMRoute,
} from "react-router-dom";

import { MainLayout } from "../Layouts";
import { Home } from "../Components/Home";
import { NotFound } from "../Components/Shared/NotFound";
import { Detail as PropertyDetail } from "../Components/Property/Detail";

export enum ROUTES {
  HOME = "/*",
  PROPERTY_DETAIL = "property/:id",
  NOT_FOUND = "/404",
}

interface Route {
  layout?: FC;
  path: ROUTES;
  component?: FC;
}

export const routes: Route[] = [
  {
    path: ROUTES.HOME,
    component: Home,
    layout: MainLayout,
  },
  {
    path: ROUTES.PROPERTY_DETAIL,
    component: PropertyDetail,
    layout: MainLayout,
  },
  {
    path: ROUTES.NOT_FOUND,
    component: NotFound,
    layout: MainLayout,
  },
];

export const renderRoutes = (_routes: Array<Route> = []) => (
  <Suspense fallback={<span>Loading!!!</span>}>
    <ReactRouterDOMRoutes>
      {_routes.map(({ path, layout, component }) => {
        const Layout = layout || Fragment;
        if (!component) return null;
        const Component = component;
        return (
          <ReactRouterDOMRoute
            key={path}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}
    </ReactRouterDOMRoutes>
  </Suspense>
);
