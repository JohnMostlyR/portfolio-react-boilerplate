import React from 'react';
import toJson from 'enzyme-to-json';

import ContactForm from '../ContactForm';
// import validateForm from '../ValidateForm';
import Form from '../../../components/Form';

import { shallowWithIntl } from '../../../helpers/intl-enzyme-test-helper';

jest.mock('../ValidateForm');

describe('<ContactForm />', () => {
  it('should render and match the snapshot', () => {
    const changeHandler = jest.fn();
    const onSubmitHandler = jest.fn();
    const wrapper = shallowWithIntl(
      <ContactForm
        changeHandler={changeHandler}
        onSubmitHandler={onSubmitHandler}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it.skip('should call "changeHandler" on a Change event', () => {
    // TODO: Finish this test
    const changeHandler = jest.fn();
    const onSubmitHandler = jest.fn();
    const wrapper = shallowWithIntl(
      <ContactForm
        changeHandler={changeHandler}
        onSubmitHandler={onSubmitHandler}
      />
    );

    console.log(wrapper.debug());
    console.log(wrapper.dive().find(Form));
    wrapper.simulate('onChange', { target: { value: true } });
    // expect(validateForm).toHaveBeenCalledTimes(1);
  });
});
