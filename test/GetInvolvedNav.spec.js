import GetInvolvedNav from '../components/GetInvolvedNav'
import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'

describe('GetInvolvedNav', () => {
  it('should scroll to What\'s Happening? section when clicking on related nav button', () => {
    const spy = sinon.spy(GetInvolvedNav.methods, 'scrollTo')
    const wrapper = shallowMount(GetInvolvedNav);

    wrapper.find('a#whats-happening').trigger('click');
    expect(spy.calledWith('#whats-happening')).toBeTruthy();
  });
});
