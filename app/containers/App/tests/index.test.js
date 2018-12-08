import React from 'react';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import createHistory from 'history/createMemoryHistory';

import App from '../index';

import configureStore from '../../../configureStore';
import ThemeContext, { theme } from '../../../styles/theme';

describe('<App />', () => {
  const initialState = {};
  const history = createHistory();
  const store = configureStore(initialState, history);
  const renderedComponent = mount(
    <Provider store={store}>
      <IntlProvider locale="en">
        <ConnectedRouter history={history}>
          <ThemeContext.Provider value={theme}>
            <App />
          </ThemeContext.Provider>
        </ConnectedRouter>
      </IntlProvider>
    </Provider>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => renderedComponent.unmount());

  it('should render some routes', () => {
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });
});
