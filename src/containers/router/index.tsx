import { createBrowserRouter } from 'react-router';
import Layout from '../layout';
import ErrorPage from '../pages/error';
import { registry } from '../../constants';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    ErrorBoundary: ErrorPage,
    children: [
      ...Object.values(registry).map(({ path, element, Component }) => ({
        path,
        element,
        Component,
      })),
    ],
  },
]);

export default router;
