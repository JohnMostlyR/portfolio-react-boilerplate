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

  it('should set the "isLoading" state when the "isLoading" prop is true for more than 200ms', () => {
    const spy = jest.spyOn(SkillsPage.prototype, 'componentWillReceiveProps');
    const isLoadingHandlerSpy = jest.spyOn(SkillsPage.prototype, 'handleIsLoading');
    const setIsLoadingSpy = jest.spyOn(SkillsPage.prototype, 'setIsLoading');
    const getContent = jest.fn();
    let isLoadingProp = false;
    const wrapper = shallow(<SkillsPage getContent={getContent} isLoading={isLoadingProp} />);

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
    const spy = jest.spyOn(SkillsPage.prototype, 'componentWillReceiveProps');
    const isLoadingHandlerSpy = jest.spyOn(SkillsPage.prototype, 'handleIsLoading');
    const setIsLoadingSpy = jest.spyOn(SkillsPage.prototype, 'setIsLoading');
    const getContent = jest.fn();
    let isLoadingProp = false;
    const wrapper = shallow(<SkillsPage getContent={getContent} isLoading={isLoadingProp} />);

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
