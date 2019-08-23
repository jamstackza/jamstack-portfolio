import {
  DefaultPage,
  Technologies,
  Devops,
  Security,
  Frameworks,
  Api,
  Markup,
  Overview,
  Layout
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'landing', name: 'Home', component: DefaultPage, isIndex: true },
    { path: 'technologies', name: 'Technologies', component: Technologies },
    { path: 'devops', name: 'Devops', component: Devops },
    { path: 'security', name: 'Security', component: Security },
    { path: 'frameworks', name: 'Frameworks', component: Frameworks },
    { path: 'api', name: 'Api', component: Api },
    { path: 'markup', name: 'Markup', component: Markup },
    { path: 'overview', name: 'Overview', component: Overview },
  ],
};
