import { shallowMount, mount } from './utils/test-utils'
import { BListGroupItem } from 'bootstrap-vue'
import WidgetInstructions from '@/components/WidgetInstructions.vue'
import sinon from "sinon";

describe('WidgetInstructions', () => {

  describe('Instructions description', () => {

    const wrapper = shallowMount(WidgetInstructions);

    test('contains description center style', () => {
      expect(wrapper.find('p').classes('description-center')).toBe(true);
    })
  });

  describe('Instructions items', () => {

    const wrapper = shallowMount(WidgetInstructions);

    test('contains instruction list style', () => {
      expect(wrapper.findAll('div').at(1).classes('widget-instructions-list')).toBe(true);
    });

    test('contains Squarespace instruction items', () => {
      expect(wrapper.findAll(BListGroupItem).at(0).text().toLowerCase()).toContain('squarespace');
    });

    test('contains Tumblr instruction items', () => {
      expect(wrapper.findAll(BListGroupItem).at(1).text().toLowerCase()).toContain('tumblr');
    });

    test('contains Shopify instruction items', () => {
      expect(wrapper.findAll(BListGroupItem).at(2).text().toLowerCase()).toContain('shopify');
    });

  });

  describe('Clicking on instructions item', () => {

    window.open = jest.fn();
    const spy = sinon.spy(WidgetInstructions.methods, 'goToInstructions');
    const wrapper = mount(WidgetInstructions);

    test('goToInstructions method gets called', () => {
      wrapper.findAll(BListGroupItem).at(0).trigger('click');
      expect(spy.called).toBeTruthy();

      wrapper.findAll(BListGroupItem).at(1).trigger('click');
      expect(spy.called).toBeTruthy();

      window.open.mockClear();
    });
  });

});
