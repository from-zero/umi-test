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
        path: '/404',
        exact: true,
        component: require('../404.js').default,
      },
      {
        path: '/about',
        exact: true,
        component: require('../about.js').default,
        title: '用户中心',
        Routes: [
          require('../../routes/TestRoute.js').default,
          require('../../routes/PrivateRoute.js').default,
        ],
      },
      {
        path: '/goodList',
        exact: true,
        component: require('../goodList.js').default,
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
      },
      {
        path: '/login',
        exact: true,
        component: require('../login.js').default,
      },
      {
        path: '/users',
        exact: false,
        component: require('../users/_layout.js').default,
        routes: [
          {
            path: '/users',
            exact: true,
            component: require('../users/index.js').default,
          },
          {
            path: '/users/:id',
            exact: true,
            component: require('../users/$id.js').default,
          },
          {
            component: () =>
              React.createElement(
                require('E:/nvm/v8.12.0/node_modules/umi/node_modules/_umi-build-dev@1.12.0@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('E:/nvm/v8.12.0/node_modules/umi/node_modules/_umi-build-dev@1.12.0@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('E:/nvm/v8.12.0/node_modules/umi/node_modules/_umi-build-dev@1.12.0@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'pages', hasRoutesInConfig: false },
      ),
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
