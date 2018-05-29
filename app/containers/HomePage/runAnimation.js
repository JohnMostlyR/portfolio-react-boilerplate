/**
 * Runs a SnapSVG animation timeline
 * @param {Object} snapSVGElement
 * @param {Object} timeline
 * @param {number} startFrame=0
 */
export default function runAnimation({ snapSVGElement, timeline, startFrame = 0 }) {
  let animationTimer = setTimeout(
    function doAnimate(_timeline, currentFrameIndex) {
      const currentFrame = _timeline[currentFrameIndex];

      snapSVGElement
        .select(`#${currentFrame.elementId}`)
        .animate(
          currentFrame.animationAttributes,
          currentFrame.animationDuration,
          currentFrame.animationTimingFunction,
        );

      if (currentFrameIndex < timeline.length - 1) {
        /* eslint-disable no-param-reassign */
        animationTimer = setTimeout(
          doAnimate,
          _timeline[currentFrameIndex + 1].animationDelay,
          timeline,
          (currentFrameIndex += 1),
        );
      } else {
        clearTimeout(animationTimer);
      }
    },
    timeline[startFrame].animationDelay,
    timeline,
    startFrame,
  );
}
