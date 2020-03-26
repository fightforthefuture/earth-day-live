import { shallowMount } from '@vue/test-utils'
import index from '../pages/index.vue'

let wrapper = null;

beforeAll(() => {
  wrapper = shallowMount(index);
});

describe('Index page', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('contains a h1 element', () => {
    expect(wrapper.contains('h1')).toBe(true)
  });

  test('contains a h1 with class title', () => {
    const title = wrapper.find('h1');
    expect(title.classes('title')).toBe(true)
  });
})
