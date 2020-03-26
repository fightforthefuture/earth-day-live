import { shallowMount } from '@vue/test-utils'
import index from '../pages/index.vue'

let wrapper = null;

beforeAll(() => {
  wrapper = shallowMount(index);
});

describe('Index page', () => {
  test('true is truthy', () => {
    expect(true).toBeTruthy();
  })
})
