/* eslint-disable no-restricted-modules */
import { BootstrapVue } from "bootstrap-vue";
import { createLocalVue, shallowMount, mount, RouterLinkStub } from "@vue/test-utils";
import en from "../../app/locales/en.json";

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
    stubs: {
      NuxtLink: RouterLinkStub
    },
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
