import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import createHistory from 'history/createMemoryHistory';

import { ProjectsPage, mapDispatchToProps } from '../index';
import { loadContent } from '../actions';
import configureStore from '../../../configureStore';

jest.useFakeTimers();

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

  it('should show an error message when content could not be loaded', () => {
    const history = createHistory();
    const store = configureStore({}, history);
    const getContent = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <ProjectsPage getContent={getContent} error />
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
          <ProjectsPage getContent={getContent} error={false} isLoading />
        </IntlProvider>
      </Provider>
    );
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  it('should show the fetched content', () => {
    const history = createHistory();
    const store = configureStore({}, history);
    const getContent = jest.fn();
    const projects = [
      {
        date: '2017-10-22T00:00+02:00',
        description: 'My portfolio website, now build with React',
        externalLinks: [
          {
            faIcon: 'github',
            name: 'github',
            url: 'https://github.com/Mensae/portfolio-react',
          },
          {
            faIcon: 'globe',
            name: 'world',
            url: 'https://meester-johan.info/',
          }],
        thumbnail: {
          contentType: 'image/png',
          details: { image: { height: 720, width: 1280 }, size: 171379 },
          fileName: 'my-portfolio-16x9.png',
          url: '//images.contentful.com/1tymefars1bj/3X5e0G1CUwYSqKuqc6u8aq/a39b1b271c66573aef2abafbcc239125/my-portfolio-16x9.png',
        },
        title: 'My Portfolio',
      },
    ];
    const wrapper = mount(
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <ProjectsPage
            getContent={getContent}
            isLoading={false}
            error={false}
            projects={projects}
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
