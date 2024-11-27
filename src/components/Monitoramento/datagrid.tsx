import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import data from '../../data/data.json';

interface RowData {
    id: number;
    status: boolean;
    tipo: string;
    codigoSolicitacao: number;
    area: number;
    modulosFiscais: number;
    ano:number;
    progresso:string;
    região: string;
    anexo:string;
    
}

{/* Essa parte é do status do datagrid, entender melhor o fucinoamento */}
const columns: GridColDef<RowData>[] = [
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: GridRenderCellParams<RowData>) => (
      <CheckCircleOutlineIcon
        onClick={() => {    {/* talvez criar uma função para o click*/}
          params.api.setRowData((oldRows) =>
            oldRows.map((row) =>
              row.id === params.row.id ? { ...row, status: !row.status } : row
            )
          );
        }}
        sx={{
          cursor: 'pointer',textAlign: 'center',
          color: params.row.status ? 'green' : 'inherit',
          fontSize: { xs: '16px', sm: '18px' },
        }}
      />
    ),
  },
  {
    field: 'tipo',
    headerName: 'Tipo',
    headerAlign: 'center',
    flex: 1,
    editable: false,
    
  },
  {
    field: 'codigoSolicitacao',
    headerName: 'Código de Solicitação',
    headerAlign: 'center',
    flex: 1,
    editable: false,
    
  },
  {
    field: 'area',
    headerName: 'Área (ha)',
    headerAlign: 'center',
    flex: 1,
    editable: false,
  },
  
  {
    field: 'modulosFiscais',
    headerName: 'Módulos Fiscais',
    headerAlign: 'center',
    flex: 1,
    editable: false,
  },
  {
    field: 'progresso',
    headerName: 'Progresso',
    headerAlign: 'center',
    flex: 1,
    editable: false,
  },


  {
    field: 'municipio',
    headerName: 'Município',
    headerAlign: 'center',
    flex: 1,
    editable: false,
  },
 
  
  {
    field: 'regional',
    headerName: 'Regional',
    headerAlign: 'center',
    flex: 1,
    editable: false,
  },
  {
   field: 'anexo',
    headerName: 'Anexo',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: GridRenderCellParams<RowData>) => (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="contained" size="small" sx={{ ml: 1, backgroundColor: '#BD3D3A', color: 'white',fontFamily: 'Montserrat, sans-serif',width: '82px',borderRadius: '9px',
  fontWeight: 'bold','&:hover': {
              backgroundColor: '#E29491',}}}>ABRIR</Button>
      </div>
    ),
  },
];

const DataGridDemo: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const pageSize = 7; {/* quantidade de dados que vai aparecer por pagina*/}

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box
    sx={{
    width: '100%',
    height: { xs: 'calc(100vh - 150px)', sm: 'calc(100vh - 170px)' },
    maxWidth: '100%',
    padding: { xs: '0 10px', sm: '0 20px' },
    marginTop: { xs: '20px', sm: '40px' },
    boxSizing: 'border-box',
    marginBottom: { xs: '40px', sm: '60px' },
    '& .MuiDataGrid-cell': {
      textAlign: 'center', // Centraliza o texto dentro das células
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'#FFFFFF',
          fontFamily: 'Montserrat, sans-serif',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      color: '#ADAEA8',
      fontSize: '14px',
      display: 'flex', // Flexbox também para o cabeçalho
      justifyContent: 'center', // Centraliza horizontalmente
      alignItems: 'center', // Alinha verticalmente
      textAlign: 'center', // Garantia extra para texto no centro
    },
    '& .MuiDataGrid-columnHeaders': {
      display: 'flex', // Alinhamento para todo o cabeçalho
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .MuiDataGrid-root': {
      '& .MuiDataGrid-columnHeader': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    },
  }}
    >
      <DataGrid
        rows={data.slice((page - 1) * pageSize, page * pageSize)}  // Usando os dados do JSON
        columns={columns}
        pageSizeOptions={[5]}
        //checkboxSelection 
        disableRowSelectionOnClick
        autoHeight
        hideFooterPagination
        disableColumnResize
        sx={{
          '& .MuiDataGrid-cell': {
            textAlign: 'center', // Centraliza o texto dentro das células
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
          },
          '& .MuiDataGrid-columnHeaders': {
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />

      {/*Aqui a nova paginação */}
      <Stack spacing={2} sx={{ alignItems: 'center', mt: 2 }}>
        <Pagination
          count={Math.ceil(data.length / pageSize)}
          page={page}
          onChange={handlePageChange}
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#000000',
              backgroundColor: '#D9D9D9',
              '&:hover': {
                backgroundColor: '#D9D9D9',
              },
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              color: '#FFFFFF',
              backgroundColor: '#901C19',
              '&:hover': {
                backgroundColor: '#901C19',
              },
            },
            '& .MuiPaginationItem-previousNext': {
              color: '#000000',
              backgroundColor: '#D9D9D9',
              '&:hover': {
                backgroundColor: '#D9D9D9',
              },
            },
            '& .MuiPaginationItem-ellipsis': {
              backgroundColor: 'transparent', 
            },
          }}
        />
      </Stack>
    </Box>
  );
};

export default DataGridDemo;