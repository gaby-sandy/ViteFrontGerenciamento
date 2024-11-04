import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import RoomIcon from '@mui/icons-material/Room';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from '@mui/material';

interface RowData {
  id: number;
  lastName: string;
  firstName: string;
  age: number | null;
  pdfUrl: string; // URL do PDF
  mapUrl: string; // URL do mapa
  status: boolean; // Adicionando status ao RowData
}

const columns: GridColDef<RowData>[] = [
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
    renderCell: (params: GridRenderCellParams<RowData>) => (
      <CheckCircleOutlineIcon
        onClick={() => {
          params.api.setRowData((oldRows) =>
            oldRows.map((row) =>
              row.id === params.row.id ? { ...row, status: !row.status } : row
            )
          );
        }}
        sx={{ 
          cursor: 'pointer', 
          color: params.row.status ? 'green' : 'inherit', 
          fontSize: '18px' 
        }}
      />
    ),
  },
  {
    field: 'car',
    headerName: 'CAR',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'codigoSolicitacao',
    headerName: 'Código de solicitação',
    type: 'number',
    width: 170,
    editable: true,
  },
  {
    field: 'area',
    headerName: 'Área (ha)',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'modulosFiscais',
    headerName: 'Módulos fiscais',
    type: 'number',
    width: 140,
    editable: true,
  },
  {
    field: 'municipio',
    headerName: 'Município',
    width: 150,
    editable: true,
  },
  {
    field: 'região',
    headerName: 'Região',
    width: 150,
    editable: true,
  },
  {
    field: 'anexo',
    headerName: 'Anexo',
    width: 110,
    renderCell: (params: GridRenderCellParams<RowData>) => (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Link href={params.row.pdfUrl} target="_blank" rel="noopener noreferrer">
          <PictureAsPdfIcon />
        </Link>
        <Link href={params.row.mapUrl} target="_blank" rel="noopener noreferrer">
          <RoomIcon />
        </Link>
      </div>
    ),
  },
];

const rows: RowData[] = [
  { id: 1, car: 1234, codigoSolicitacao: 5678, area: 100, modulosFiscais: 2, municipio: 'Viçosa', região: 'Zona da mata', pdfUrl: 'path/to/document1.pdf', mapUrl: 'path/to/map1.pdf', status: false },
  { id: 2, car: 2345, codigoSolicitacao: 6789, area: 200, modulosFiscais: 3, municipio: 'Uberaba', região: 'Triangulo mineiro', pdfUrl: 'path/to/document2.pdf', mapUrl: 'path/to/map2.pdf', status: true },
];

const DataGridDemo: React.FC = () => {
  return (
    <Box sx={{ height: 400, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataGridDemo;