
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// Definindo a tipagem para as linhas da tabela
interface DataRow {
  id: number;
  proprietario: string;
  data_projeto: Date;
  area_ha: number;
  modulos_fiscais: number;
  regional: string;
  municipio: string;
  programa: string;
}

// Definindo a tipagem para as props do componente
interface DatagridProps {
  filteredData: Array<Omit<DataRow, 'id'>>;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'proprietario', headerName: 'Proprietário', width: 150, editable: true },
  { field: 'data_projeto', headerName: 'Data', type: 'date', width: 100, editable: true },
  { field: 'area_ha', headerName: 'Área (ha)', type: 'number', width: 150, editable: true },
  { field: 'modulos_fiscais', headerName: 'Módulos Fiscais', type: 'number', width: 150, editable: true },
  { field: 'regional', headerName: 'Regional', width: 150, editable: true },
  { field: 'municipio', headerName: 'Município', width: 150, editable: true },
  { field: 'programa', headerName: 'Programa', width: 150, editable: true },
];

export default function Datagrid({ filteredData }: DatagridProps) {
  const rows: DataRow[] = filteredData.map((item, index) => ({
    id: index + 1, // Atribuindo um ID a partir do índice
    proprietario: item.proprietario,
    data_projeto: new Date(item.data_projeto),
    area_ha: item.area_ha,
    modulos_fiscais: item.modulos_fiscais,
    regional: item.regional,
    municipio: item.municipio,
    programa: item.programa,
  }));

  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
}
