import { shallowMount } from '@vue/test-utils'
import PageFooter from '@/components/PageFooter.vue'

describe('PageFooter', () => {
  test('contains a <footer> tag', () => {
    const wrapper = shallowMount(PageFooter)
    expect(wrapper.contains('footer')).toBe(true)
  })
})
