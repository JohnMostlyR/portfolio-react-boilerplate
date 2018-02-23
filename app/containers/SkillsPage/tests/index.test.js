import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import createHistory from 'history/createMemoryHistory';
import marked from 'marked';

import { SkillsPage, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';
import { loadContent } from '../actions';

jest.useFakeTimers();

marked.options({
  breaks: true,
});

describe('<SkillsPage />', () => {
  it('should render and match the snapshot', () => {
    const getContent = jest.fn();
    const wrapper = shallow(<SkillsPage getContent={getContent} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getContent() to load external data', () => {
    const history = createHistory();
    const store = configureStore({}, history);
    const getContent = jest.fn();
    mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <SkillsPage getContent={getContent} />
        </IntlProvider>
      </Provider>
    );
    expect(getContent).toBeCalled();
  });

  it('should show an error message when content could not be loaded', () => {
    const history = createHistory();
    const store = configureStore({}, history);
    const getContent = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <SkillsPage getContent={getContent} error />
        </IntlProvider>
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should not show a loading message when content is loaded within 200ms', () => {
    const history = createHistory();
    const store = configureStore({}, history);
    const getContent = jest.fn();
    mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <SkillsPage getContent={getContent} error={false} isLoading />
        </IntlProvider>
      </Provider>
    );
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  it('should show the fetched content', () => {
    const history = createHistory();
    const store = configureStore({}, history);
    const getContent = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <SkillsPage
            getContent={getContent}
            isLoading={false}
            error={false}
            skillsText={marked('Test Content\nNew Line')}
          />
        </IntlProvider>
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
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
