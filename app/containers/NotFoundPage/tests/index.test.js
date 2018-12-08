import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'connected-react-router/immutable';
import createHistory from 'history/createMemoryHistory';

import NotFoundPage from '../index';

import InlineLink from '../../../components/InlineLink';
import configureStore from '../../../configureStore';

describe('<NotFoundPage />', () => {
  const initialState = {};
  const history = createHistory();
  const store = configureStore(initialState, history);

  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<NotFoundPage />);

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should have a link to the home page', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <ConnectedRouter history={history}>
            <NotFoundPage />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>,
    );

    const linkToHomePage = renderedComponent.find(<InlineLink to="/" />);
    expect(renderedComponent.contains(InlineLink)).toEqual(true);
    expect(linkToHomePage).toBeDefined();
  });

  it('should have a link to the contact page', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <ConnectedRouter history={history}>
            <NotFoundPage />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>,
    );

    const linkToHomePage = renderedComponent.find(<InlineLink to="/contact" />);
    expect(renderedComponent.contains(InlineLink)).toEqual(true);
    expect(linkToHomePage).toBeDefined();
  });
});
