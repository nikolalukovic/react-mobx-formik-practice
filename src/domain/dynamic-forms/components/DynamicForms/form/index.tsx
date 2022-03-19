import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import { emitValidationSchema } from '../validation';

const extractInitialValues = (jsonForm) =>
  jsonForm.reduce((acc, curr) => {
    const ret = { ...acc };
    if (curr.type === 'text') {
      ret[curr.key] = curr.defaultValue ?? '';
    }

    if (curr.type === 'checkbox_single') {
      ret[curr.key] = curr.defaultValue ?? false;
    }

    if (curr.type === 'checkbox_multiple') {
      ret[curr.key] = curr.defaultValue ?? [];
    }

    if (curr.type === 'radio') {
      ret[curr.key] = curr.defaultValue;
    }

    if (curr.type === 'select') {
      ret[curr.key] = curr.defaultValue ?? '';
    }

    return ret;
  }, {});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const emitFormField = (formik, form) => {
  if (form.type === 'text') {
    return (
      <TextField
        fullWidth
        id={form.key}
        key={form.key}
        name={form.key}
        label={form.label}
        value={formik.values[form.key]}
        onChange={formik.handleChange}
        error={formik.touched[form.key] && Boolean(formik.errors[form.key])}
        helperText={formik.touched[form.key] && formik.errors[form.key]}
      />
    );
  }

  if (form.type === 'checkbox_single') {
    return (
      <FormControlLabel
        id={form.key}
        key={form.key}
        name={form.key}
        label={form.label}
        onChange={formik.handleChange}
        control={<Switch />}
      />
    );
  }

  const handleCheckboxMultipleChange = (event) => {
    const {
      target: { value }
    } = event;
    formik.setFieldValue(form.key, typeof value === 'string' ? value.split(',') : value);
  };

  if (form.type === 'checkbox_multiple') {
    return (
      <FormControl fullWidth key={form.key}>
        <FormLabel id={`${form.key}_label}`}>{form.label}</FormLabel>
        <Select
          labelId={`${form.key}_label}`}
          id={form.key}
          key={form.key}
          name={form.key}
          multiple
          value={formik.values[form.key]}
          onChange={handleCheckboxMultipleChange}
          input={<OutlinedInput label={form.label} />}
          renderValue={(selected: string[]) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {form.options.map((option) => (
            <MenuItem key={option.label} value={option.value}>
              <Checkbox checked={formik.values[form.key].indexOf(option.value) > -1} />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  const handleRadioChange = (event) => {
    const {
      target: { value }
    } = event;
    formik.setFieldValue(form.key, Boolean(value));
  };

  if (form.type === 'radio') {
    return (
      <FormControl fullWidth key={form.key} error={!!formik.errors[form.key]}>
        <FormLabel id={`${form.key}_radio`}>{form.label}</FormLabel>
        <RadioGroup
          aria-labelledby={`${form.key}_radio`}
          defaultChecked={false}
          onChange={handleRadioChange}
          id={form.key}
          name={form.key}
        >
          {form.options.map((option) => (
            <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
          ))}
        </RadioGroup>
        {formik.errors[form.key] && <FormHelperText>{formik.errors[form.key]}</FormHelperText>}
      </FormControl>
    );
  }

  if (form.type === 'select') {
    return (
      <FormControl fullWidth key={form.key}>
        <FormLabel id={`${form.key}_select`}>{form.label}</FormLabel>
        <Select
          labelId={`${form.key}_select`}
          id={form.key}
          value={formik.values[form.key]}
          name={form.key}
          label={form.label}
          onChange={formik.handleChange}
        >
          {form.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
};

const emitDynamicForm = (jsonForm) =>
  function DynamicForm() {
    const formik = useFormik({
      initialValues: extractInitialValues(jsonForm),
      validationSchema: emitValidationSchema(jsonForm),
      onSubmit: (values) => {
        console.log(values);
      }
    });

    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          {jsonForm.map((field) => emitFormField(formik, field))}
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  };

export { emitDynamicForm };
