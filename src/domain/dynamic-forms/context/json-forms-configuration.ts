import { createContext, useContext } from 'react';
import { noop } from '../../../infrastructure';
import { defaultFormConfuguration } from '../constants';

export interface JsonFormsConfiguration {
  jsonForms: typeof defaultFormConfuguration;
  setJsonForms: (jsonForms: string) => void;
}

export const JsonFormsConfigurationContext = createContext<JsonFormsConfiguration>({
  jsonForms: defaultFormConfuguration,
  setJsonForms: noop
});

export const useJsonFormsConfigurationContext = () => useContext(JsonFormsConfigurationContext);
