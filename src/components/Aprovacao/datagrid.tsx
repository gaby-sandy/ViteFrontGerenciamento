import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import RoomIcon from '@mui/icons-material/Room';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from '@mui/material';
import data from '../../data/data.json';

interface RowData {
  id: number;
  car: number;
  codigoSolicitacao: number;
  area: number;
  modulosFiscais: number;
  municipio: string;
  região: string;
  pdfUrl: string;
  mapUrl: string;
  status: boolean;
}

{/* Essa parte é do status do datagrid, entender melhor o fucinoamento */}
const columns: GridColDef<RowData>[] = [
  {
    field: 'status',
    headerName: 'Status',
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
          cursor: 'pointer',
          color: params.row.status ? 'green' : 'inherit',
          fontSize: { xs: '16px', sm: '18px' },
        }}
      />
    ),
  },
  {
    field: 'car',
    headerName: 'CAR',
    flex: 1,
    editable: true,
  },
  {
    field: 'codigoSolicitacao',
    headerName: 'Código de solicitação',
    flex: 1,
    editable: true,
  },
  {
    field: 'area',
    headerName: 'Área (ha)',
    flex: 1,
    editable: true,
  },
  {
    field: 'modulosFiscais',
    headerName: 'Módulos fiscais',
    flex: 1,
    editable: true,
  },
  {
    field: 'municipio',
    headerName: 'Município',
    flex: 1,
    editable: true,
  },
  {
    field: 'região',
    headerName: 'Região',
    flex: 1,
    editable: true,
  },
  {
    field: 'anexo',
    headerName: 'Anexo',
    flex: 1,
    renderCell: (params: GridRenderCellParams<RowData>) => (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Link href={params.row.pdfUrl} target="_blank" rel="noopener noreferrer">
        <PictureAsPdfIcon
        sx={{
            fontSize: { xs: '18px', sm: '24px' },
            color: '#ADAEA8',
            '&:hover': {
            color: '#901C19', // cor ao passar o mouse
           },
          }}
/>
        </Link>
        <Link href={params.row.mapUrl} target="_blank" rel="noopener noreferrer">
        <RoomIcon
          sx={{
            fontSize: { xs: '18px', sm: '24px' },
            color: '#ADAEA8',
            '&:hover': {
              color: '#901C19', // cor ao passar o mouse
            },
          }}
        />
        </Link>
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
          fontSize: { xs: '12px', sm: '14px' },
        },
        '& .MuiDataGrid-row': {
          backgroundColor: '#FFFFFF',
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
          }}
        />
      </Stack>
    </Box>
  );
};

export default DataGridDemo;