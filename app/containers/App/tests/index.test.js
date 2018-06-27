import React from 'react';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';

import App, { mapDispatchToProps } from '../index';
import { setSiteNavigationIsAtScreenTop, setSiteWidth } from '../actions';
import Wrapper from '../Wrapper';

import configureStore from '../../../configureStore';
import ThemeContext, { theme } from '../../../styles/theme';

describe('<App />', () => {
  const initialState = {};
  const history = createHistory();
  const store = configureStore(initialState, history);
  const componentDidMount = jest.spyOn(App.prototype, 'componentDidMount');
  const componentWillUnmount = jest.spyOn(
    App.prototype,
    'componentWillUnmount',
  );
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

  it('should call "componentDidMount"', () => {
    expect(componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('should have an outer <Wrapper /> component', () => {
    const outerWrapper = renderedComponent.find(Wrapper);
    expect(outerWrapper.length).toBe(1);
    expect(outerWrapper.prop('innerRef')).toBeInstanceOf(Function);
    expect(outerWrapper.prop('lang')).toBe('en');
  });

  it('should render some routes', () => {
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
        expect(dispatch).toHaveBeenCalledWith(
          setSiteNavigationIsAtScreenTop(isAtScreenTop),
        );
      });
    });

    describe('setSiteWidth', () => {
      it('should have been mapped', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        expect(props.setSiteWidth).toBeDefined();
      });

      it('should dispatch setSiteWidth when called', () => {
        const dispatch = jest.fn();
        const width = 320;
        const props = mapDispatchToProps(dispatch);
        props.setSiteWidth(width);
        expect(dispatch).toHaveBeenCalledWith(setSiteWidth(width));
      });
    });
  });

  it('should call "componentWillUnmount"', () => {
    renderedComponent.unmount();
    expect(componentWillUnmount).toHaveBeenCalledTimes(1);
  });
});
