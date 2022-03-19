import { Box, Typography } from '@mui/material';
import { useJsonFormsConfigurationContext } from '../../context/json-forms-configuration';
import { emitDynamicForm } from './form';

const DynamicForms = () => {
  const { jsonForms } = useJsonFormsConfigurationContext();

  const DynamicForms = emitDynamicForm(jsonForms);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        flexFlow: 'column'
      }}
    >
      <Typography variant="h6" component="div">
        Dynamic
      </Typography>
      <DynamicForms />
    </Box>
  );
};

export { DynamicForms };
