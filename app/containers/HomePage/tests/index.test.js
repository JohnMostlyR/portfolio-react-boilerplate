import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import createHistory from 'history/createMemoryHistory';

import HomePage, { runAnimation } from '../index';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let history;
  let store;

  beforeAll(() => {
    history = createHistory();
    store = configureStore({}, history);
  });

  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<HomePage store={store} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should have "componentDidMount" to be called', () => {
    const spy = jest.spyOn(HomePage.prototype, 'componentDidMount');
    shallow(<HomePage store={store} />);
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockReset();
    spy.mockRestore();
  });

  it('should receive a "locale" property', () => {
    const renderedComponent = shallow(<HomePage store={store} />);
    expect(renderedComponent.prop('locale')).toBe('en');
  });

  describe('runAnimation', () => {
    jest.useFakeTimers();

    it('should run the animation according the given timeline', () => {
      const animationDuration = 200;
      const animate = jest.fn();
      const animationTimingFunction = jest.fn();
      const snapSVGElement = {
        select: jest.fn().mockReturnValue({ animate }),
      };
      const timeline = [
        {
          elementId: 'p1',
          animationAttributes: {
            opacity: 1,
          },
          animationDuration,
          animationDelay: 1,
          animationTimingFunction,
          dFrom: '',
          dTo: '',
        },
        {
          elementId: 'p2',
          animationAttributes: {
            opacity: 0,
          },
          animationDuration: animationDuration * 3,
          animationDelay: 1,
          animationTimingFunction,
          dFrom: '',
          dTo: '',
        },
      ];
      const startFrame = 0;
      const args = {
        snapSVGElement,
        timeline,
        startFrame,
      };

      runAnimation(args);

      expect(snapSVGElement.select).toHaveBeenCalledTimes(0);

      jest.runTimersToTime(animationDuration + 1);

      expect(snapSVGElement.select).toHaveBeenCalledTimes(2);
      expect(snapSVGElement.select).lastCalledWith('#p2');
      expect(animate).lastCalledWith(
        timeline[1].animationAttributes,
        timeline[1].animationDuration,
        timeline[1].animationTimingFunction
      );
    });
  });
});
