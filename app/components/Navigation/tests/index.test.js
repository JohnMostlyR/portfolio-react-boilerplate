import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import createHistory from 'history/createMemoryHistory';
import { IntlProvider } from 'react-intl';

import Navigation from '../index';
import List from '../List';
import Button from '../Button';
import configureStore from '../../../configureStore';

describe('<Navigation />', () => {
  const initialState = {};
  const history = createHistory({
    initialEntries: ['/about'], // The initial URLs in the history stack
    initialIndex: 0, // The starting index in the history stack
    keyLength: 6, // The length of location.key
    // A function to use to confirm navigation with the user. Required
    // if you return string prompts from transition hooks (see below)
    getUserConfirmation: null,
  });
  const store = configureStore(initialState, history);
  const toggleMenu = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(
      <Navigation bigScreenBreakpoint={1000} toggleMenu={toggleMenu} />,
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "isAtScreenTop" prop', () => {
    let isAtScreenTop = false;
    let renderedComponent = shallow(
      <Navigation
        bigScreenBreakpoint={1000}
        isAtScreenTop={isAtScreenTop}
        toggleMenu={toggleMenu}
      />,
    );

    expect(renderedComponent.prop('isAtScreenTop')).toBe(isAtScreenTop);

    isAtScreenTop = true;
    renderedComponent = shallow(
      <Navigation
        bigScreenBreakpoint={1000}
        isAtScreenTop={isAtScreenTop}
        toggleMenu={toggleMenu}
      />,
    );

    expect(renderedComponent.prop('isAtScreenTop')).toBe(isAtScreenTop);
  });

  describe('expanded state', () => {
    const PREVENT_DEFAULT = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should close/collapse the menu when the ESC-key is pressed', () => {
      const getFocusedLink = jest.spyOn(Navigation.prototype, 'getFocusedLink');
      const renderedComponent = mount(
        <Provider store={store}>
          <IntlProvider locale="en">
            <ConnectedRouter history={history}>
              <Navigation
                bigScreenBreakpoint={1000}
                isExpanded
                toggleMenu={toggleMenu}
              />
            </ConnectedRouter>
          </IntlProvider>
        </Provider>,
      );
      const foundList = renderedComponent.find(List);
      foundList.simulate('keyDown', {
        preventDefault: PREVENT_DEFAULT,
        keyCode: 27,
      });
      expect(PREVENT_DEFAULT).toHaveBeenCalledTimes(1);
      expect(getFocusedLink).not.toHaveBeenCalled();
      expect(toggleMenu).toHaveBeenCalledTimes(1);
    });

    it('should close/collapse the menu when the menu button is clicked', () => {
      const renderedComponent = mount(
        <Provider store={store}>
          <IntlProvider locale="en">
            <ConnectedRouter history={history}>
              <Navigation
                bigScreenBreakpoint={1000}
                isExpanded
                toggleMenu={toggleMenu}
              />
            </ConnectedRouter>
          </IntlProvider>
        </Provider>,
      );
      renderedComponent.find(Button).simulate('click');
      expect(toggleMenu).toHaveBeenCalledTimes(1);
    });

    it('should otherwise look for the link that currently holds focus', () => {
      const handleExpandedState = jest.spyOn(
        Navigation.prototype,
        'handleExpandedState',
      );
      const getLinksFromListItems = jest.spyOn(
        Navigation.prototype,
        'getLinksFromListItems',
      );
      const getListItems = jest.spyOn(
        Navigation.prototype,
        'getLinksFromListItems',
      );
      const getFocusedLink = jest.spyOn(Navigation.prototype, 'getFocusedLink');
      const renderedComponent = mount(
        <Provider store={store}>
          <IntlProvider locale="en">
            <ConnectedRouter history={history}>
              <Navigation
                bigScreenBreakpoint={1000}
                isExpanded
                toggleMenu={toggleMenu}
              />
            </ConnectedRouter>
          </IntlProvider>
        </Provider>,
      );
      const foundList = renderedComponent.find(List);
      const currentTarget = foundList.render()['0'];
      const keyCode = 40;

      foundList.simulate('keyDown', {
        currentTarget,
        preventDefault: PREVENT_DEFAULT,
        keyCode,
      });

      expect(handleExpandedState).toHaveBeenCalledTimes(1);
      expect(getFocusedLink).toHaveBeenCalledTimes(1);
      expect(getLinksFromListItems).toHaveBeenCalledTimes(1);
      expect(getListItems).toHaveBeenCalledTimes(1);
    });

    it('should close the menu in case none of the links have focus', () => {
      const getFocusedLink = jest
        .spyOn(Navigation.prototype, 'getFocusedLink')
        .mockImplementation(() => false);
      const renderedComponent = mount(
        <Provider store={store}>
          <IntlProvider locale="en">
            <ConnectedRouter history={history}>
              <Navigation
                bigScreenBreakpoint={1000}
                isExpanded
                toggleMenu={toggleMenu}
              />
            </ConnectedRouter>
          </IntlProvider>
        </Provider>,
      );
      const foundList = renderedComponent.find(List);
      const currentTarget = foundList.render()['0'];
      const keyCode = 40;

      foundList.simulate('keyDown', {
        currentTarget,
        preventDefault: PREVENT_DEFAULT,
        keyCode,
      });

      expect(getFocusedLink).toHaveBeenCalledTimes(1);
      expect(toggleMenu).toHaveBeenCalledTimes(1);
    });

    describe.skip('when ARROW-DOWN or ARROW-UP is pressed', () => {
      // TODO: Difficulty implementing these test due to limitations of Enzyme with HOC's with
      // regard to setProps and setState
      let currentTarget = {}; // eslint-disable-line no-unused-vars
      let renderedComponent = {};
      let foundList = {};

      beforeEach(() => {
        renderedComponent = mount(
          <Provider store={store}>
            <IntlProvider locale="en">
              <ConnectedRouter history={history}>
                <Navigation
                  bigScreenBreakpoint={1000}
                  isExpanded
                  toggleMenu={toggleMenu}
                />
              </ConnectedRouter>
            </IntlProvider>
          </Provider>,
        );

        foundList = renderedComponent.find(List);
        currentTarget = foundList.render()['0'];
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should move to the next or first item when ARROW-DOWN is pressed', () => {
        //
      });

      it('should move to the previous or last item when ARROW-UP is pressed', () => {
        //
      });
    });
  });
});
