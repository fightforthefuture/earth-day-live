import { BootstrapVue } from "bootstrap-vue";
import { createLocalVue, shallowMount, mount } from "@vue/test-utils";

const customShallowMount = (component, options) => {
  const localVue = createLocalVue();
  localVue.use(BootstrapVue);
  return shallowMount(component, {
    localVue,
    ...options
  });
};

const customMount = (component, options) => {
  const localVue = createLocalVue();
  localVue.use(BootstrapVue);
  return mount(component, {
    localVue,
    ...options
  });
};

export { customShallowMount as shallowMount, customMount as mount };
