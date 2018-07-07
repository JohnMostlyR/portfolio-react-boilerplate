import React from 'react';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createHistory from 'history/createMemoryHistory';

import VisualSiteWrapper, { mapDispatchToProps } from '../index';
import { setScrollTop, setSiteWidth } from '../actions';

import configureStore from '../../../configureStore';

describe('<VisualSiteWrapper />', () => {
  const initialState = {};
  const history = createHistory();
  const store = configureStore(initialState, history);
  const renderedComponent = mount(
    <Provider store={store}>
      <IntlProvider locale="en">
        <VisualSiteWrapper>
          <div>Children</div>
        </VisualSiteWrapper>
      </IntlProvider>
    </Provider>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('setScrollTop', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        expect(props.setScrollTop).toBeDefined();
      });

      it('should dispatch setScrollTop when called', () => {
        const dispatch = jest.fn();
        const topPosition = 10;
        const props = mapDispatchToProps(dispatch);
        props.setScrollTop(topPosition);
        expect(dispatch).toHaveBeenCalledWith(setScrollTop(topPosition));
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
});
