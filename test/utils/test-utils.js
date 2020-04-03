import { BootstrapVue } from "bootstrap-vue";
import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
import en from "../../i18n/en.json";

const getValFromPath = (path) => {
  let val = { ...en };
  const pathParts = path.split('.');
  for (let p of pathParts) {
      val = val[p];
  }
  return val;
};

const mocks = {
  $t: msg => getValFromPath(msg),
  $i18n: { locale: "en" },
};

const customShallowMount = (component, options) => {
  const localVue = createLocalVue();
  localVue.use(BootstrapVue);
  return shallowMount(component, {
    localVue,
    mocks,
    ...options
  });
};

const customMount = (component, options) => {
  const localVue = createLocalVue();
  localVue.use(BootstrapVue);
  return mount(component, {
    localVue,
    mocks,
    ...options
  });
};

export { customShallowMount as shallowMount, customMount as mount };
