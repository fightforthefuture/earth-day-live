import GetInvolvedNav from '../components/GetInvolvedNav'
import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'

describe('GetInvolvedNav', () => {
  const spy = sinon.spy(GetInvolvedNav.methods, 'scrollTo')
  const wrapper = shallowMount(GetInvolvedNav);

  it('should scroll to What\'s Happening? section when clicking on related nav button', () => {
    wrapper.find('a#whats-happening').trigger('click');
    expect(spy.calledWith('#whats-happening')).toBeTruthy();
  });

  it('should scroll to Website Banner section when clicking on related nav button', () => {
    wrapper.find('a#website-banner').trigger('click');
    expect(spy.calledWith('#website-banner')).toBeTruthy();
  });

  it('should scroll to Banner Ads section when clicking on related nav button', () => {
    wrapper.find('a#banner-ads').trigger('click');
    expect(spy.calledWith('#banner-ads')).toBeTruthy();
  });

  it('should scroll to Social Downloads section when clicking on related nav button', () => {
    wrapper.find('a#social-downloads').trigger('click');
    expect(spy.calledWith('#social-downloads')).toBeTruthy();
  });

  it('should scroll to Are You With Us section when clicking on related nav button', () => {
    wrapper.find('a#are-you-with-us').trigger('click');
    expect(spy.calledWith('#are-you-with-us')).toBeTruthy();
  });
});
