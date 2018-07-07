import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import createHistory from 'history/createMemoryHistory';
import marked from 'marked';
import Parser from 'html-react-parser';

import { AboutPage, mapDispatchToProps } from '../index';
import { loadContent } from '../actions';
import configureStore from '../../../configureStore';
import PageContent from '../../../components/PageContent';

// enable fake timers
jest.useFakeTimers();

// set options for marked
marked.options({
  breaks: true,
});

describe('<AboutPage />', () => {
  it('should render and match the snapshot', () => {
    const getContent = jest.fn();
    const wrapper = shallow(<AboutPage getContent={getContent} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('fetch content from external source', () => {
    const componentWillReceivePropsSpy = jest.spyOn(
      AboutPage.prototype,
      'componentWillReceiveProps',
    );
    const handleIsLoadingSpy = jest.spyOn(
      AboutPage.prototype,
      'handleIsLoading',
    );
    const setIsLoadingSpy = jest.spyOn(AboutPage.prototype, 'setIsLoading');
    const getContent = jest.fn();
    let isLoadingProp = false;
    let wrapper = {};

    afterEach(() => {
      wrapper = null;
      jest.clearAllTimers();
      jest.clearAllMocks();
    });

    it('should set the "isLoading" state when the "isLoading" prop is true for more than 200ms', () => {
      wrapper = shallow(
        <AboutPage getContent={getContent} isLoading={false} />,
      );
      expect(componentWillReceivePropsSpy).toHaveBeenCalledTimes(0);
      expect(handleIsLoadingSpy).toHaveBeenCalledTimes(0);
      expect(setIsLoadingSpy).toHaveBeenCalledTimes(0);

      isLoadingProp = true;

      wrapper.setProps({ isLoading: isLoadingProp });

      expect(componentWillReceivePropsSpy).toHaveBeenCalledTimes(1);
      expect(handleIsLoadingSpy).toHaveBeenCalledTimes(1);
      expect(setIsLoadingSpy).toHaveBeenCalledTimes(0);
      expect(wrapper.state().isLoading).toBe(false);

      jest.runTimersToTime(300);

      expect(setIsLoadingSpy).toHaveBeenCalledTimes(1);
      expect(wrapper.state().isLoading).toBe(true);
    });

    it('should not set the "isLoading" state when the "isLoading" prop is true for less than 200ms', () => {
      wrapper = shallow(
        <AboutPage getContent={getContent} isLoading={false} />,
      );
      expect(componentWillReceivePropsSpy).toHaveBeenCalledTimes(0);
      expect(handleIsLoadingSpy).toHaveBeenCalledTimes(0);
      expect(setIsLoadingSpy).toHaveBeenCalledTimes(0);

      isLoadingProp = true;

      wrapper.setProps({ isLoading: isLoadingProp });

      expect(componentWillReceivePropsSpy).toHaveBeenCalledTimes(1);
      expect(handleIsLoadingSpy).toHaveBeenCalledTimes(1);
      expect(setIsLoadingSpy).toHaveBeenCalledTimes(0);
      expect(wrapper.state().isLoading).toBe(false);

      jest.runTimersToTime(100);

      expect(setIsLoadingSpy).toHaveBeenCalledTimes(0);
      expect(wrapper.state().isLoading).toBe(false);
    });
  });

  describe('fetching content from external source', () => {
    const history = createHistory();
    const store = configureStore({}, history);
    const getContent = jest.fn();
    let wrapper = {};

    afterEach(() => {
      wrapper = null;
      jest.clearAllMocks();
    });

    it('should call getContent() to load external data', () => {
      mount(
        <Provider store={store}>
          <IntlProvider locale="en">
            <AboutPage getContent={getContent} />
          </IntlProvider>
        </Provider>,
      );

      expect(getContent).toBeCalled();
    });

    it('should show an error message when content could not be loaded', () => {
      wrapper = mount(
        <Provider store={store}>
          <IntlProvider locale="en">
            <AboutPage getContent={getContent} error />
          </IntlProvider>
        </Provider>,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should handle case where invalid content is received without any error', () => {
      wrapper = mount(
        <Provider store={store}>
          <IntlProvider locale="en">
            <AboutPage
              getContent={getContent}
              isLoading={false}
              error={false}
              skillsText={[]}
            />
          </IntlProvider>
        </Provider>,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should show the fetched content', () => {
      const fixture = String.raw`Test Content\nNew Line`;
      wrapper = mount(
        <Provider store={store}>
          <IntlProvider locale="en">
            <AboutPage
              getContent={getContent}
              isLoading={false}
              error={false}
              aboutMeText={Parser(marked(fixture))}
            />
          </IntlProvider>
        </Provider>,
      );

      expect(wrapper.contains(PageContent)).toEqual(true);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('mapDispatchToProps', () => {
    describe('getContent', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        expect(props.getContent).toBeDefined();
      });

      it('should dispatch loadContent when called', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        props.getContent();
        expect(dispatch).toHaveBeenCalledWith(loadContent());
      });
    });
  });
});
