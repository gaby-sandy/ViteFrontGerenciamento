import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import data from '../../data/data.json';

interface RowData {
  id: number;
  status: boolean;
  tipo: string;
  codigoSolicitacao: number;
  area: number;
  modulosFiscais: number;
  ano: string;
  progresso: number;
  municipio: string;
  regional: string;
  anexo: string;
}

// Função para exibir o progresso com o rótulo
function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

// Definição das colunas do DataGrid
const columns: GridColDef<RowData>[] = [
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: GridRenderCellParams<RowData>) => (
      <CheckCircleOutlineIcon
        onClick={() => {
          // Ação do clique no ícone (pode ser implementada)
        }}
        sx={{
      
          cursor: 'pointer',
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
    field: 'ano',
    headerName: 'Ano',
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
    renderCell: (params: GridRenderCellParams<RowData>) => (
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel 
        value={params.row.progresso} 
        sx={{
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#BD3E3A', // Cor da barra de progresso
          },
          
        }}
        
        />
      </Box>
    ),
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
        <Button
          variant="contained"
          size="small"
          sx={{
            ml: 1,
            backgroundColor: '#BD3D3A',
            color: 'white',
            fontFamily: 'Montserrat, sans-serif',
            width: '82px',
            borderRadius: '9px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#E29491',
            },
          }}
        >
          ABRIR
        </Button>
      </div>
    ),
  },
];

// Componente principal
const DataGridDemo: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const pageSize = 7;

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
        fontSize: { xs: '12px', sm: '14px' },
        textAlign: 'center', // Centraliza o texto dentro das células
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Centraliza verticalmente o texto das células
      },
      '& .MuiDataGrid-row': {
        backgroundColor: '#FFFFFF',
      },
      '& .MuiDataGrid-columnHeaderTitle': {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        color: '#ADAEA8',
        fontSize: '14px',
        textAlign: 'center', // Centraliza o texto no cabeçalho
      },
      '& .MuiDataGrid-columnHeaders': {
        display: 'center',
        justifyContent: 'center', // Alinha horizontalmente os títulos do cabeçalho
        alignItems: 'center', // Centraliza verticalmente os títulos do cabeçalho
      },
    
      }}
    >
      <DataGrid
        rows={data.slice((page - 1) * pageSize, page * pageSize)}
        columns={columns}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        autoHeight
        hideFooterPagination
        sx={{
          '& .MuiDataGrid-cell': {
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
          },
          '& .MuiDataGrid-columnHeaders': {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />

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