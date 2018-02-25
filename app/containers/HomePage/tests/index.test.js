import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import createHistory from 'history/createMemoryHistory';

import HomePage from '../index';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const history = createHistory();
    const store = configureStore({}, history);
    const wrapper = mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <HomePage />
        </IntlProvider>
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
