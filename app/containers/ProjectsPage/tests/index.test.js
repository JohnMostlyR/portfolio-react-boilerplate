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

  it('should set the "isLoading" state when the "isLoading" prop is true for more than 200ms', () => {
    const spy = jest.spyOn(ProjectsPage.prototype, 'componentWillReceiveProps');
    const isLoadingHandlerSpy = jest.spyOn(ProjectsPage.prototype, 'handleIsLoading');
    const setIsLoadingSpy = jest.spyOn(ProjectsPage.prototype, 'setIsLoading');
    const getContent = jest.fn();
    let isLoadingProp = false;
    const wrapper = shallow(<ProjectsPage getContent={getContent} isLoading={isLoadingProp} />);

    expect(spy).toHaveBeenCalledTimes(0);
    expect(isLoadingHandlerSpy).toHaveBeenCalledTimes(0);
    expect(setIsLoadingSpy).toHaveBeenCalledTimes(0);

    isLoadingProp = true;

    wrapper.setProps({ isLoading: isLoadingProp });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(isLoadingHandlerSpy).toHaveBeenCalledTimes(1);
    expect(setIsLoadingSpy).toHaveBeenCalledTimes(0);
    expect(wrapper.state().isLoading).toBe(false);

    jest.runTimersToTime(300);

    expect(setIsLoadingSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().isLoading).toBe(true);

    spy.mockReset();
    spy.mockRestore();
    isLoadingHandlerSpy.mockReset();
    isLoadingHandlerSpy.mockRestore();
    setIsLoadingSpy.mockReset();
    setIsLoadingSpy.mockRestore();
  });

  it('should not set the "isLoading" state when the "isLoading" prop is true for less than 200ms', () => {
    const spy = jest.spyOn(ProjectsPage.prototype, 'componentWillReceiveProps');
    const isLoadingHandlerSpy = jest.spyOn(ProjectsPage.prototype, 'handleIsLoading');
    const setIsLoadingSpy = jest.spyOn(ProjectsPage.prototype, 'setIsLoading');
    const getContent = jest.fn();
    let isLoadingProp = false;
    const wrapper = shallow(<ProjectsPage getContent={getContent} isLoading={isLoadingProp} />);

    expect(spy).toHaveBeenCalledTimes(0);
    expect(isLoadingHandlerSpy).toHaveBeenCalledTimes(0);
    expect(setIsLoadingSpy).toHaveBeenCalledTimes(0);

    isLoadingProp = true;

    wrapper.setProps({ isLoading: isLoadingProp });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(isLoadingHandlerSpy).toHaveBeenCalledTimes(1);
    expect(setIsLoadingSpy).toHaveBeenCalledTimes(0);
    expect(wrapper.state().isLoading).toBe(false);

    jest.runTimersToTime(100);

    expect(setIsLoadingSpy).toHaveBeenCalledTimes(0);
    expect(wrapper.state().isLoading).toBe(false);

    spy.mockReset();
    spy.mockRestore();
    isLoadingHandlerSpy.mockReset();
    isLoadingHandlerSpy.mockRestore();
    setIsLoadingSpy.mockReset();
    setIsLoadingSpy.mockRestore();
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
