import React from 'react';
import { shallow } from 'enzyme';

import SendButton from '../index';

describe('SendButton', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<SendButton />);
    expect(wrapper).toMatchSnapshot();
    // wrapper.unmount();
  });

  it('should respond when set to `enabled`', () => {
    const wrapper = shallow(<SendButton disabled={false} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  describe('when the `state` changes', () => {
    let wrapper;

    it('should change its appearance when state is `sending`', () => {
      wrapper = shallow(<SendButton disabled={false} buttonState={'sending'} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should change its appearance when state is `success`', () => {
      wrapper = shallow(<SendButton disabled={false} buttonState={'success'} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should change its appearance when state is `error`', () => {
      wrapper = shallow(<SendButton disabled={false} buttonState={'error'} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('TODO: TEST THIS: should only be allowed to be given a select set of states', () => {
      // TODO: should tests this but at the moment a bit lost as to how.
    });
  });
});
