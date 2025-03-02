import { Navigate, type RouteObject } from 'react-router';
import ChromeTab from '../components/chromeTab';
import FontSelect from '../components/fontSelect';
import GrailLayout from '../components/grailLayout';
import InfinityScroll from '../components/infinityScroll';
import MultiProgressBar from '../components/multiProgressBar';
import ProgressBar from '../components/progressBar';
import ScrollEffect from '../components/scrollEffect';
import ShapeSelect from '../components/shapeSelect';

const registry: Record<
  string,
  Pick<RouteObject, 'Component' | 'element' | 'path'> & {
    label: string;
  }
> = {
  default: { path: '', element: <Navigate to={'chromeTab'} />, label: '' },
  chromeTab: {
    path: 'chromeTab',
    Component: ChromeTab,
    label: 'Chrome Tab',
  },
  fontSelect: {
    path: 'fontSelect',
    Component: FontSelect,
    label: 'Font Select',
  },
  grailLayout: {
    path: 'grailLayout',
    Component: GrailLayout,
    label: 'Grail Layout',
  },
  infinityScroll: {
    path: 'infinityScroll',
    Component: InfinityScroll,
    label: 'Infinity Scroll',
  },
  multiProgressBar: {
    path: 'multiProgressBar',
    Component: MultiProgressBar,
    label: 'Multi Progress Bar',
  },
  progressBar: {
    path: 'progressBar',
    Component: ProgressBar,
    label: 'Progress Bar',
  },
  scrollEffect: {
    path: 'scrollEffect',
    Component: ScrollEffect,
    label: 'Scroll Effect',
  },
  shapeSelect: {
    path: 'shapeSelect',
    Component: ShapeSelect,
    label: 'Shape Select',
  },
};

export { registry };
