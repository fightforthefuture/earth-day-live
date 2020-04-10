import { shallowMount } from './utils/test-utils'
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

  test('contains a h4 element', () => {
    expect(wrapper.contains('h4')).toBe(true)
  });

  test('contains 3 subtitle classes within the h4 elements', () => {
    const subtitles = wrapper.findAll('h4');
    expect(subtitles.length).toBe(2);
    expect(subtitles.at(0).classes('subtitle')).toBe(true);
    expect(subtitles.at(1).classes('subtitle')).toBe(true);
  });
})
