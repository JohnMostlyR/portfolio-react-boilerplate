import React from 'react';
import toJson from 'enzyme-to-json';

import { ContactPage, mapDispatchToProps } from '../index';
import { sendForm } from '../actions';

import {
  shallowWithIntl,
  mountWithIntl,
} from '../../../helpers/intl-enzyme-test-helper';

describe('<ContactPage />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = mountWithIntl(<ContactPage />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('onSubmit', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        expect(props.onSubmit).toBeDefined();
      });

      it('should dispatch onSubmit when called', () => {
        const dispatch = jest.fn();
        const field = {
          subject: 'A Subject',
          message: 'A Message',
        };
        const props = mapDispatchToProps(dispatch);
        props.onSubmit(field);
        expect(dispatch).toHaveBeenCalledWith(sendForm(field));
      });
    });
  });

  describe('handleChange', () => {
    it('should update "state" when called', () => {
      const stateAfterChange = {
        field: {
          subject: 'Testing',
          message: '',
          name: '',
          email: '',
        },
        fieldError: {
          subject: 'Some Error',
        },
      };

      const argument = {
        name: 'subject',
        value: 'Testing',
        error: 'Some Error',
      };

      const wrapper = shallowWithIntl(<ContactPage />);

      const instance = wrapper.instance();
      instance.handleChange(argument);
      expect(wrapper.state()).toEqual(stateAfterChange);
    });
  });

  describe('onFormSubmit', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    let form = null;
    let initialState = {};
    let wrapper = null;

    beforeEach(() => {
      wrapper = mountWithIntl(<ContactPage />);

      form = wrapper.find('form').first();

      initialState = {
        field: {
          subject: 'A subject',
          message: 'A message',
          name: 'A name',
          email: 'An email',
        },
        fieldError: {},
      };
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should call validateForm', () => {
      const field = Object.assign(initialState.field, {
        ...field,
        subject: '',
      });
      initialState = { ...initialState, field };
      wrapper.setState(initialState);
      form.simulate('submit', {
        preventDefault: () => {},
      });
      expect(dispatch).not.toBeCalled();
    });

    it('should dispatch onSubmit', () => {
      form.simulate('submit', {
        preventDefault: () => {},
      });
      props.onSubmit(initialState.field);
      expect(dispatch).toHaveBeenCalledWith(sendForm(initialState.field));
    });
  });
});
