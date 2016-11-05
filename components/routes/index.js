import NpmGuiDependencies from '../npm-gui-dependencies';

export default [{
  path: '/dependencies',
  name: 'dependencies',
  component: NpmGuiDependencies,
}, {
  path: '/dev-dependencies',
  name: 'dev-dependencies',
  component: NpmGuiDependencies,
}, {
  path: '/global-dependencies',
  name: 'global-dependencies',
  component: NpmGuiDependencies,
}];
