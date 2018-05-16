import React from 'react';
import { IntlProvider } from 'react-intl';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';

import App, { mapDispatchToProps } from '../index';
import { setSiteNavigationIsAtScreenTop } from '../actions';
import Wrapper from '../Wrapper';

import configureStore from '../../../configureStore';
import ThemeContext, { theme } from '../../../styles/theme';

describe.skip('<App />', () => {
  const initialState = {};
  const history = createHistory();
  const store = configureStore(initialState, history);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  /**
   * TODO; Waiting for Enzyme to resolve issues with testing with the Context API
   * @link https://github.com/airbnb/enzyme/issues/1553
   */
  it.skip('should have an outer <Wrapper /> component', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <ConnectedRouter history={history}>
            <ThemeContext.Provider value={theme}>
              <App />
            </ThemeContext.Provider>
          </ConnectedRouter>
        </IntlProvider>
      </Provider>
    );
    const outerWrapper = renderedComponent.find(Wrapper);
    expect(outerWrapper.length).toBe(1);
    expect(outerWrapper.prop('innerRef')).toBeInstanceOf(Function);
  });

  it('should render some routes', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });

  describe('mapDispatchToProps', () => {
    describe('setSiteNavigationIsAtScreenTop', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        expect(props.setSiteNavigationIsAtScreenTop).toBeDefined();
      });

      it('should dispatch setSiteNavigationIsAtScreenTop when called', () => {
        const dispatch = jest.fn();
        const isAtScreenTop = true;
        const props = mapDispatchToProps(dispatch);
        props.setSiteNavigationIsAtScreenTop(isAtScreenTop);
        expect(dispatch).toHaveBeenCalledWith(setSiteNavigationIsAtScreenTop(isAtScreenTop));
      });
    });
  });
});
