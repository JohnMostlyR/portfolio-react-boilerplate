import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import createHistory from 'history/createMemoryHistory';

import { ProjectsPage, mapDispatchToProps } from '../index';
import { loadContent } from '../actions';
import configureStore from '../../../configureStore';

describe('<ProjectsPage />', () => {
  it('Expect to render and match the snapshot', () => {
    const getContent = jest.fn();
    const wrapper = shallow(<ProjectsPage getContent={getContent} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getContent() to load external data', () => {
    const history = createHistory();
    const store = configureStore({}, history);
    const getContent = jest.fn();
    mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <ProjectsPage getContent={getContent} />
        </IntlProvider>
      </Provider>
    );
    expect(getContent).toBeCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('getContent', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        expect(props.getContent).toBeDefined();
      });
    });

    it('should dispatch loadContent when called', () => {
      const dispatch = jest.fn();
      const props = mapDispatchToProps(dispatch);
      props.getContent();
      expect(dispatch).toHaveBeenCalledWith(loadContent());
    });
  });
});
