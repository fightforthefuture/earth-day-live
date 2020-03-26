import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

const LOGO_ECLIPSE_INDEX = 0;
const LOGO_EARTH_DAY_LIVE_INDEX = 1;

let wrapper = null;

beforeAll(() => {
  wrapper = shallowMount(Logo);
});

describe('Logo', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('contains a div element with a logo class', () => {
    expect(wrapper.classes('logo')).toBe(true)
  });

  test('contains two img elements with logo-eclipse and logo-earth-day-live class values', () => {
    const logos = wrapper.findAll('img');
    expect(logos.length).toBe(2);
    expect(logos.at(LOGO_ECLIPSE_INDEX).classes('logo-eclipse')).toBe(true);
    expect(logos.at(LOGO_EARTH_DAY_LIVE_INDEX).classes('logo-earth-day-live')).toBe(true);
  });
})
