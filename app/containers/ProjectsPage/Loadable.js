/**
 *
 * Asynchronously loads the component for ProjectsPage
 *
 */

import Loadable from 'react-loadable';

import LoadingComponent from '../../components/LoadingComponent';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadingComponent,
});
