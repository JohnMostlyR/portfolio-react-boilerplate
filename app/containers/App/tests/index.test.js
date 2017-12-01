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

describe('<App />', () => {
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

  it('should have an outer <Wrapper /> component', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>
    );
    const outerWrapper = renderedComponent.find(Wrapper);
    expect(outerWrapper.length).toBe(1);
    expect(outerWrapper.prop('innerRef')).toBeInstanceOf(Function);
  });

  // it('should have a "handleScrollEvent" method', () => {
  //   const renderedComponent = mount(
  //     <Provider store={store}>
  //       <IntlProvider locale={'en'}>
  //         <ConnectedRouter history={history}>
  //           <App />
  //         </ConnectedRouter>
  //       </IntlProvider>
  //     </Provider>
  //   );
  //   // console.log(renderedComponent.debug());
  //   const instance = renderedComponent.instance();
  //   console.log(instance);
  //   const handleScrollEvent = instance.handleScrollEvent();
  //   expect(handleScrollEvent).toHaveBeenCalled();
  // });

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
