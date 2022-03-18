import { Box, Typography } from '@mui/material';
import { useJsonFormsConfigurationContext } from '../../context/json-forms-configuration';

const DynamicForms = () => {
  const { jsonForms } = useJsonFormsConfigurationContext();

  console.log('jsonForms rerender', jsonForms);

  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant="h3" component="div">
        Dynamic Forms
      </Typography>
    </Box>
  );
};

export { DynamicForms };
