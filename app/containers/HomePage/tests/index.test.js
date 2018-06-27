import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';

import HomePage from '../index';

import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  const componentDidMount = jest.spyOn(HomePage.prototype, 'componentDidMount');
  let history = {};
  let store = {};

  beforeEach(() => {
    history = createHistory();
    store = configureStore({}, history);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match the snapshot', () => {
    mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <ConnectedRouter history={history}>
            <HomePage />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>,
    );
    expect(componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('should have "componentDidMount" to be called', () => {
    shallow(<HomePage store={store} />);
    expect(componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('should receive a "locale" property', () => {
    const renderedComponent = shallow(<HomePage store={store} />);
    expect(renderedComponent.prop('locale')).toBe('en');
  });
});
