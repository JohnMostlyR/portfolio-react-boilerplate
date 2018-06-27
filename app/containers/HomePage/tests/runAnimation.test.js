import runAnimation from '../runAnimation';

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
      timeline[1].animationTimingFunction,
    );
  });
});
