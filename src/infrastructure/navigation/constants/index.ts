const mobxArchPath = '/mobx-arch';

const appNavigation = {
  home: '/',
  mobxArch: { home: mobxArchPath, countries: `${mobxArchPath}/countries`, info: `${mobxArchPath}/countries/:name` },
  dynamicForms: { home: '/dynamic-forms' }
};

export { appNavigation };
