const defaultFormConfuguration = [
  {
    type: 'text',
    key: 'text_field',
    label: 'Name',
    required: true
  },
  {
    type: 'checkbox_single',
    key: 'checkbox_single_field',
    label: 'Patient is an adult?'
  },
  {
    type: 'checkbox_multiple',
    key: 'checkbox_multiple_field',
    label: 'Which doctor would you like to visit?',
    options: [
      {
        label: 'Cardiologist',
        value: 'cardiologist'
      },
      {
        label: 'Dermatologist',
        value: 'dermatologist'
      }
    ]
  },
  {
    type: 'radio',
    key: 'radio_field',
    label: 'Patient is sick?',
    required: true,
    options: [
      {
        label: 'Yes',
        value: true
      },
      {
        label: 'No',
        value: false
      }
    ]
  },
  {
    label: 'How would you like to be contacted?',
    key: 'select_field',
    type: 'select',
    options: [
      {
        label: 'SMS',
        value: 'sms'
      },
      {
        label: 'Email',
        value: 'email'
      }
    ]
  }
];

export { defaultFormConfuguration };
