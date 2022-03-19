import Editor from '@monaco-editor/react';
import { Alert, Box, Button } from '@mui/material';
import { useCallback, useRef, useState } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { useJsonFormsConfigurationContext } from '../../context/json-forms-configuration';

interface ValidationJsonEvent {
  isValid: boolean;
  message?: string;
}

export const JsonEditor = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
  const [validationState, setValidationState] = useState<ValidationJsonEvent>({ isValid: true });
  const { jsonForms, setJsonForms } = useJsonFormsConfigurationContext();

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    // @ts-expect-error: This is the only way to get the reference, even though TS complains about readonly property in useRef
    editorRef.current = editor;
  }

  const handleOnValidate = useCallback((markers: monaco.editor.IMarker[]) => {
    if (markers.length <= 0) {
      setValidationState({ isValid: true });
      return;
    }

    markers.forEach((marker: monaco.editor.IMarker) => {
      setValidationState({ isValid: false, message: marker.message });
    });
  }, []);

  const handleOnSubmit = useCallback(() => {
    if (editorRef.current) {
      setJsonForms(editorRef.current.getValue());
    }
  }, [setJsonForms]);

  return (
    <Box sx={{ display: 'flex', height: '100%', width: '100%', flexFlow: 'column' }}>
      {validationState.isValid ? (
        <Alert severity="success">JSON is valid</Alert>
      ) : (
        <Alert severity="error">{validationState.message}</Alert>
      )}
      <Button fullWidth disabled={!validationState.isValid} variant="contained" color="primary" onClick={handleOnSubmit}>
        Submit
      </Button>
      <Editor
        height="inherit"
        defaultLanguage="json"
        defaultValue={JSON.stringify(jsonForms, null, 2)}
        onValidate={handleOnValidate}
        onMount={handleEditorDidMount}
      />
    </Box>
  );
};
