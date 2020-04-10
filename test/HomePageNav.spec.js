import HomePageNav from '../components/HomePageNav'
import { mount } from './utils/test-utils'
import sinon from 'sinon'

describe('HomePageNav', () => {
  const spy = sinon.spy(HomePageNav.methods, 'scrollTo')
  const wrapper = mount(HomePageNav);

  it('should scroll to Participants section when clicking on related nav button', () => {
    wrapper.find('li#participants-nav > a').trigger('click');
    expect(spy.calledWith('#participants')).toBeTruthy();
  });

  it('should scroll to Three Days section when clicking on related nav button', () => {
    wrapper.find('li#three-days-nav > a').trigger('click');
    expect(spy.calledWith('#the-three-days')).toBeTruthy();
  });

  it('should scroll to Get Involved section when clicking on related nav button', () => {
    wrapper.find('li#get-involved-nav > a').trigger('click');
    expect(spy.calledWith('#get-involved')).toBeTruthy();
  });

  it('should scroll to FAQs section when clicking on related nav button', () => {
    wrapper.find('li#faqs-nav > a').trigger('click');
    expect(spy.calledWith('#faqs')).toBeTruthy();
  });
  //
  // it('should scroll to Are You With Us section when clicking on related nav button', () => {
  //   wrapper.find('li#are-you-with-us-nav > a').trigger('click');
  //   expect(spy.calledWith('#are-you-with-us')).toBeTruthy();
  // });
});
