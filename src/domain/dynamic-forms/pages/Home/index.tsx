import { Box, CssBaseline, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { DynamicForms, JsonEditor } from '../../components';
import { defaultFormConfuguration } from '../../constants';
import { JsonFormsConfigurationContext } from '../../context/json-forms-configuration';

const DynamicFormsHomePage = () => {
  const [jsonForms, setJsonForms] = useState(defaultFormConfuguration);

  const handleJsonFormsChange = useCallback((json: string) => {
    setJsonForms(JSON.parse(json));
  }, []);

  return (
    <Box sx={{ display: 'flex', height: '100%', width: '100%', flexFlow: 'column' }}>
      <Typography variant="h3" component="div">
        Formik dynamic forms
      </Typography>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: 'inherit', width: 'inherit', justifyContent: 'center', alignItems: 'center' }}>
        <JsonFormsConfigurationContext.Provider value={{ jsonForms, setJsonForms: handleJsonFormsChange }}>
          <DynamicForms />
          <JsonEditor />
        </JsonFormsConfigurationContext.Provider>
      </Box>
    </Box>
  );
};

export { DynamicFormsHomePage };
