import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/Discover',
        exact: true,
        component: require('../Discover/index.js').default,
        _title: 'umi-dva',
        _title_default: 'umi-dva',
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
        _title: 'umi-dva',
        _title_default: 'umi-dva',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/ruiliang.li/Documents/code/electron/electron-quick-start/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: 'umi-dva',
        _title_default: 'umi-dva',
      },
    ],
    _title: 'umi-dva',
    _title_default: 'umi-dva',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/ruiliang.li/Documents/code/electron/electron-quick-start/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: 'umi-dva',
    _title_default: 'umi-dva',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
