import { shallowMount } from '@vue/test-utils'
import getInvolved from '../pages/get-involved/index.vue'

let wrapper = null;

beforeAll(() => {
  wrapper = shallowMount(getInvolved);
});

describe('Get Involved page', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('contains a h1 element', () => {
    expect(wrapper.contains('h1')).toBe(true)
  });

  test('contains a h1 with class title', () => {
    const title = wrapper.find('h1');
    expect(title.classes('title')).toBe(true)
    expect(title.text()).toContain("Spread the word to help save the world.")
  });
})