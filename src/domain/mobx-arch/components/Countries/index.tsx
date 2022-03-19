/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useCountriesContext } from '../../state/context/countries.context';
import { DataGrid, GridEventListener, GridEvents, GridRowParams, GridRowIdGetter, GridRowModel } from '@mui/x-data-grid';
import { Country } from '../../state/model';
import { useAppNavigate } from '../../../../infrastructure/navigation/hooks';

const Countries = observer(() => {
  const context = useCountriesContext();
  const { navToMobxArchCountryInfo } = useAppNavigate();

  const handleGetRowId: GridRowIdGetter = (row: GridRowModel<Country | { [key: string]: any }>) => {
    return row.name.common;
  };

  const handleOnRowClick: GridEventListener<GridEvents.rowClick> = (params: GridRowParams<Country | { [key: string]: any }>) => {
    navToMobxArchCountryInfo(params.row.name.common);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexFlow: 'column'
      }}
    >
      <Typography variant="h3" component="div">
        Countries
      </Typography>
      <Button onClick={context.fetchCountries.bind(context)}>Fetch Countries</Button>
      {context.state === 'pending' && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={toJS(context).countries}
          getRowId={handleGetRowId}
          columns={context.dataGridColumns()}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={handleOnRowClick}
        />
      </div>
    </Box>
  );
});

export { Countries };
