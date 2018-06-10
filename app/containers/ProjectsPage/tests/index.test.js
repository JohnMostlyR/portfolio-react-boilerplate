import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import createHistory from 'history/createMemoryHistory';

import { ProjectsPage, mapDispatchToProps } from '../index';
import { loadContent } from '../actions';

// enable fake timers
jest.useFakeTimers();

const project = Object.freeze({
  article: '# Article for test case\n\n[add attributes to link](https://the.world/)\n',
  description: 'Description for test case',
  images: [
    { file: { fileName: 'test-s.png', url: '/test-s.png' }, title: 'Test image' },
    { file: { fileName: 'test-m.png', url: '/test-m.png' }, title: 'Test image' },
    { file: { fileName: 'test-l.png', url: '/test-l.png' }, title: 'Test image' },
    { file: { fileName: 'test-xl.png', url: '/test-xl.png' }, title: 'Test image' },
  ],
  title: 'Title for test case',
});

describe('<ProjectsPage />', () => {
  const history = createHistory({
    initialEntries: ['/projects'], // The initial URLs in the history stack
    initialIndex: 0, // The starting index in the history stack
    keyLength: 6, // The length of location.key
    getUserConfirmation: null,
  });
  const getContent = jest.fn();
  const componentWillReceivePropsSpy = jest.spyOn(
    ProjectsPage.prototype,
    'componentWillReceiveProps'
  );
  const handleIsLoadingSpy = jest.spyOn(ProjectsPage.prototype, 'handleIsLoading');
  const setIsLoadingSpy = jest.spyOn(ProjectsPage.prototype, 'setIsLoading');

  let wrapper = {};

  afterEach(() => {
    wrapper = null;
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it('Expect to render and match the snapshot', () => {
    const { location } = history;
    wrapper = shallow(
      <ProjectsPage
        error={false}
        isLoading={false}
        location={location}
        getContent={getContent}
        projects={[project]}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('fetch content from external source', () => {
    let isLoadingProp = false;

    afterEach(() => {
      wrapper = null;
      jest.clearAllTimers();
      jest.clearAllMocks();
    });

    it('should set the "isLoading" state when the "isLoading" prop is true for more than 200ms',
      () => {
        wrapper = shallow(
          <ProjectsPage
            error={false}
            isLoading={false}
            location={location}
            getContent={getContent}
            projects={[project]}
          />
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

    it('should not set the "isLoading" state when the "isLoading" prop is true for less than 200ms',
      () => {
        wrapper = shallow(
          <ProjectsPage
            error={false}
            isLoading={false}
            location={location}
            getContent={getContent}
            projects={[project]}
          />
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
    afterEach(() => {
      wrapper = null;
      jest.clearAllMocks();
    });

    it('should call getContent() to load external data', () => {
      wrapper = shallow(
        <ProjectsPage
          error={false}
          isLoading={false}
          location={location}
          getContent={getContent}
          projects={[project]}
        />
      );

      expect(getContent).toHaveBeenCalledTimes(1);
    });

    it('should show an error message when content could not be loaded', () => {
      wrapper = shallow(
        <ProjectsPage
          error
          isLoading={false}
          location={location}
          getContent={getContent}
          projects={[]}
        />
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should handle case where no content is received', () => {
      wrapper = shallow(
        <ProjectsPage
          error={false}
          isLoading={false}
          location={location}
          getContent={getContent}
          projects={[]}
        />
      );

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
    });

    it('should dispatch loadContent when called', () => {
      const dispatch = jest.fn();
      const props = mapDispatchToProps(dispatch);
      props.getContent();
      expect(dispatch).toHaveBeenCalledWith(loadContent());
    });
  });

  describe('details page', () => {
    afterEach(() => {
      history.go('/projects');
      wrapper = null;
      jest.clearAllTimers();
      jest.clearAllMocks();
    });

    it('Should render the details page when requested', () => {
      history.push('/projects/title-for-test-case');
      const { location } = history;
      wrapper = shallow(
        <ProjectsPage
          error={false}
          isLoading={false}
          location={location}
          getContent={getContent}
          projects={[project]}
        />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should handle case where a non existent details page is requested', () => {
      history.push('/projects/nothing-here');
      const { location } = history;
      wrapper = shallow(
        <ProjectsPage
          error={false}
          isLoading={false}
          location={location}
          getContent={getContent}
          projects={[project]}
        />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
