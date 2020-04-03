import GetInvolvedNav from '../components/GetInvolvedNav'
import { mount } from './utils/test-utils'
import sinon from 'sinon'

describe('GetInvolvedNav', () => {
  const spy = sinon.spy(GetInvolvedNav.methods, 'scrollTo')
  const wrapper = mount(GetInvolvedNav);

  it('should scroll to What\'s Happening? section when clicking on related nav button', () => {
    wrapper.find('li#whats-happening-nav > a').trigger('click');
    expect(spy.calledWith('#whats-happening')).toBeTruthy();
  });

  it('should scroll to Website Banner section when clicking on related nav button', () => {
    wrapper.find('li#website-banner-nav > a').trigger('click');
    expect(spy.calledWith('#website-banner')).toBeTruthy();
  });

  it('should scroll to Banner Ads section when clicking on related nav button', () => {
    wrapper.find('li#banner-ads-nav > a').trigger('click');
    expect(spy.calledWith('#banner-ads')).toBeTruthy();
  });

  it('should scroll to Social Downloads section when clicking on related nav button', () => {
    wrapper.find('li#social-downloads-nav > a').trigger('click');
    expect(spy.calledWith('#social-downloads')).toBeTruthy();
  });

  it('should scroll to Are You With Us section when clicking on related nav button', () => {
    wrapper.find('li#are-you-with-us-nav > a').trigger('click');
    expect(spy.calledWith('#are-you-with-us')).toBeTruthy();
  });
});
