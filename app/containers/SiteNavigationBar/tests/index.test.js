import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';

import SiteNavigationBar, { mapDispatchToProps } from '../index';
import {
  setSiteNavigationOffsetHeight,
  setSiteNavigationTopPosition,
} from '../../../containers/App/actions';
import getElementTop from '../../../utils/getElementTop';
import configureStore from '../../../configureStore';

jest.mock('../../../utils/getElementTop');

describe('SiteNavigationBar', () => {
  const initialState = {};
  const history = createHistory();
  const store = configureStore(initialState, history);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match the snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <ConnectedRouter history={history}>
            <SiteNavigationBar />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should get its own top position on the screen', () => {
    const wrapper = mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <ConnectedRouter history={history}>
            <SiteNavigationBar />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>,
    );
    const invocationArgs = getElementTop.mock.calls[0];
    expect(invocationArgs[0].nodeType).toBe(1);
    wrapper.unmount();
  });

  describe('mapDispatchToProps', () => {
    describe('setTopPosition', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        expect(props.setTopPosition).toBeDefined();
      });

      it('should dispatch setTopPosition when mounted', () => {
        const dispatch = jest.fn();
        const topPosition = 10;
        const props = mapDispatchToProps(dispatch);
        props.setTopPosition(topPosition);
        expect(dispatch).toHaveBeenCalledWith(setSiteNavigationTopPosition(topPosition));
      });
    });

    describe('setOffsetHeight', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        expect(props.setOffsetHeight).toBeDefined();
      });

      it('should dispatch setOffsetHeight when mounted', () => {
        const dispatch = jest.fn();
        const offsetHeight = 100;
        const props = mapDispatchToProps(dispatch);
        props.setOffsetHeight(offsetHeight);
        expect(dispatch).toHaveBeenCalledWith(setSiteNavigationOffsetHeight(offsetHeight));
      });
    });
  });
});
