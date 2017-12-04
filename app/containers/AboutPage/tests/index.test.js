import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import createHistory from 'history/createMemoryHistory';

import { AboutPage } from '../index';
import configureStore from '../../../configureStore';

describe('<AboutPage />', () => {
  it('should render and match the snapshot', () => {
    const getContent = jest.fn();
    const wrapper = shallow(<AboutPage getContent={getContent} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getContent() to load external data', () => {
    const history = createHistory();
    const store = configureStore({}, history);
    const getContent = jest.fn();
    mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <AboutPage getContent={getContent} />
        </IntlProvider>
      </Provider>
    );
    expect(getContent).toBeCalled();
  });
});
