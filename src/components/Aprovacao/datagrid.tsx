import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import RoomIcon from '@mui/icons-material/Room';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface RowData {
  id: number;
  status: number;
  tipo: string;
  codigo_solicitacao: number;
  area: number;
  modulos_fiscais: number;
  municipio: string;
  regional: string;
  pdf: string;
  localizacao: string;
}

const columns: GridColDef<RowData>[] = [
  {
    field: 'status',
    headerAlign: 'center',
    headerName: 'Status',
    flex: 1,
    renderCell: (params: GridRenderCellParams<RowData>) => (
      <CheckCircleOutlineIcon
        onClick={() => {
          setRows((prevRows) =>
            prevRows.map((row) =>
              row.id === params.row.id ? { ...row, status: row.status ? 0 : 1 } : row
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
    field: 'tipo',
    headerName: 'Tipo',
    flex: 1,
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'codigo_solicitacao',
    headerName: 'Código de solicitação',
    headerAlign: 'center',
    flex: 1,
    editable: false,
  },
  {
    field: 'area',
    headerAlign: 'center',
    headerName: 'Área (ha)',
    flex: 1,
    editable: false,
  },
  {
    field: 'modulos_fiscais',
    headerAlign: 'center',
    headerName: 'Módulos fiscais',
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
        {params.row.localizacao && (
          <Link href={params.row.localizacao} target="_blank" rel="noopener noreferrer">
            <RoomIcon
              sx={{
                fontSize: { xs: '18px', sm: '25px' },
                color: '#ADAEA8',
                '&:hover': { color: '#901C19' },
              }}
            />
          </Link>
        )}
        {params.row.pdf && (
          <Link href={params.row.pdf} target="_blank" rel="noopener noreferrer">
            <PictureAsPdfIcon
              sx={{
                fontSize: { xs: '18px', sm: '25px' },
                color: '#ADAEA8',
                '&:hover': { color: '#901C19' },
              }}
            />
          </Link>
        )}
      </div>
    ),
  },
];

const DataGridDemo: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const pageSize = 7;
  const [rows, setRows] = useState<RowData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log('Fazendo requisição para a API...');
        const response = await axios.get<{ data: RowData[], total: number }>('http://localhost:3000/aprovacao', {
          params: { page, pageSize },
        });
        console.log('Resposta recebida:', response.data);
        setRows(response.data.data);
        setTotal(response.data.total);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        alert('Erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, pageSize]);

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
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          fontFamily: 'Montserrat, sans-serif',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 500,
          color: '#ADAEA8',
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
        '& .MuiDataGrid-columnHeaders': {
          display: 'flex',
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
        rows={rows}
        loading={loading}
        columns={columns}
        rowCount={total}
        pageSize={pageSize}
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
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
        disableColumnResize
      />

      <Stack spacing={2} sx={{ alignItems: 'center', mt: 2 }}>
        <Pagination
          count={Math.ceil(total / pageSize)}
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
