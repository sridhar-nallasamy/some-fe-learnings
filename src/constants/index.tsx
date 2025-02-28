import { Navigate, type RouteObject } from 'react-router';
import ChromeTab from '../components/chromeTab';
import FontSelect from '../components/fontSelect';
import GrailLayout from '../components/grailLayout';
import InfinityScroll from '../components/infinityScroll';
import MultiProgressBar from '../components/multiProgressBar';
import ProgressBar from '../components/progressBar';
import ScrollEffect from '../components/scrollEffect';
import ShapeSelect from '../components/shapeSelect';

const registry: (Pick<RouteObject, 'Component' | 'element' | 'path'> & {
  label: string;
})[] = [
  { path: '', element: <Navigate to={'chromeTab'} />, label: '' },
  { path: 'chromeTab', Component: ChromeTab, label: 'Chrome Tab' },
  { path: 'fontSelect', Component: FontSelect, label: 'Font Select' },
  { path: 'grailLayout', Component: GrailLayout, label: 'Grail Layout' },
  {
    path: 'infinityScroll',
    Component: InfinityScroll,
    label: 'Infinity Scroll',
  },
  {
    path: 'multiProgressBar',
    Component: MultiProgressBar,
    label: 'Multi Progress Bar',
  },
  { path: 'progressBar', Component: ProgressBar, label: 'Progress Bar' },
  { path: 'scrollEffect', Component: ScrollEffect, label: 'Scroll Effect' },
  { path: 'shapeSelect', Component: ShapeSelect, label: 'Shape Select' },
];

export { registry };
