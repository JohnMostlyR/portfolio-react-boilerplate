import React from 'react';

import { ContactPage, mapDispatchToProps, validateForm } from '../index';
import { sendForm } from '../actions';

import { shallowWithIntl, mountWithIntl } from '../../../helpers/intl-enzyme-test-helper';

describe('<ContactPage />', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallowWithIntl(
      <ContactPage />
    );
    expect(wrapper).toMatchSnapshot();
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

  describe('onInputChange', () => {
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

      const wrapper = shallowWithIntl(
        <ContactPage />
      );

      const instance = wrapper.instance();
      instance.onInputChange(argument);
      expect(wrapper.state()).toEqual(stateAfterChange);
    });
  });

  describe('validateForm', () => {
    let initialState = {};

    beforeEach(() => {
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

    it('should return "true" when there is no "subject"', () => {
      const field = Object.assign(initialState.field, { ...field, subject: '' });
      initialState = { ...initialState, field };
      expect(validateForm(initialState.field, initialState.fieldError)).toBe(true);
    });

    it('should return "true" when there is no "message"', () => {
      const field = Object.assign(initialState.field, { ...field, message: '' });
      initialState = { ...initialState, field };
      expect(validateForm(initialState.field, initialState.fieldError)).toBe(true);
    });

    it('should return "true" when there is no "name"', () => {
      const field = Object.assign(initialState.field, { ...field, name: '' });
      initialState = { ...initialState, field };
      expect(validateForm(initialState.field, initialState.fieldError)).toBe(true);
    });

    it('should return "true" when there is no "email"', () => {
      const field = Object.assign(initialState.field, { ...field, email: '' });
      initialState = { ...initialState, field };
      expect(validateForm(initialState.field, initialState.fieldError)).toBe(true);
    });

    it('should return "true" when there are any errors', () => {
      const fieldError = Object.assign(initialState.fieldError, { ...fieldError, email: 'Error' });
      initialState = { ...initialState, fieldError };
      expect(validateForm(initialState.field, initialState.fieldError)).toBe(true);
    });

    it('should return "false" when all fields are correctly filled', () => {
      expect(validateForm(initialState.field, initialState.fieldError)).toBe(false);
    });
  });

  describe('onFormSubmit', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    let form = null;
    let initialState = {};
    let wrapper = null;

    beforeEach(() => {
      wrapper = mountWithIntl(
        <ContactPage />
      );

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
      const field = Object.assign(initialState.field, { ...field, subject: '' });
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
