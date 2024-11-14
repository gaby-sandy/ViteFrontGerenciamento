
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: '', headerName: 'Status', width: 100 },
  { field: 'firstNam', headerName: 'Areá (ha)', width: 100 },
  { field: 'l', headerName: 'Modulos Fiscais', width: 100 },
  
  {
    field: 'municipio',
    headerName: 'Municipio',
    type: 'number',
    width: 90,
  },

  {
    field: 'viveiros',
    headerName: 'Viveiros',
    type: 'number',
    width: 90,
  },
  {
    field: 'Ordem',
    headerName: 'Ordem',
    type: 'number',
    width: 90,
  },
  {
    field: 'prioridade',
    headerName: 'Prioridade',
    type: 'number',
    width: 90,
  },
  
  
  {
    field: 'programa',
    headerName: 'Programa',
    sortable: false,
    width: 100,
    //valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'tc',
    headerName: 'TC',
    type: 'number',
    width: 100,
  },
];

//const rows = [
  //{ id: 1, lastName: '', firstName: '', age: 35 },
  //{ id: 2, lastName: '', firstName: '', age: 42 },
 // { id: 3, lastName: '', firstName: '', age: 45 },
 // { id: 4, lastName: '', firstName: '', age: 16 },
 // { id: 5, lastName: '', firstName: '', age: null },
 // { id: 6, lastName: '', firstName: null, age: 150 },
 // { id: 7, lastName: '', firstName: '', age: 44 },
 // { id: 8, lastName: '', firstName: '', age: 36 },
 // { id: 9, lastName: '', firstName: '', age: 65 },
  
//];



export default function DataTable() {
  return (
    
    <Paper sx={{ display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 500,
      width: '90%',
      margin: ' auto',}}>
     
      <DataGrid
     
      sx={{}} 
       // rows={rows}//
        columns={columns}
              pageSizeOptions={[0]}
              hideFooterPagination
        
      />
    </Paper>
  );
}