
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

export default function DataTable() {
  // Exemplo de colunas
  const columns = [
    { field: "status", headerName: "Status", flex: 1, headerAlign: "center", align: "center" },
    { field: "codigo de solicitacao", headerName: "Codigo de Solicitação", flex: 1, headerAlign: "center", align: "center" },
    { field: "area", headerName: "Area (ha)", flex: 1, headerAlign: "center", align: "center" },
    { field: "modulos fiscais", headerName: "Modulo Fiscais", flex: 1, headerAlign: "center", align: "center" },
    { field: "municipio", headerName: "Município", flex: 1, headerAlign: "center", align: "center" },
    { field: "viveiros", headerName: "Viveiros", flex: 1, headerAlign: "center", align: "center" },
    { field: 'ordem', headerName: 'Ordem', headerAlign: 'center', align: 'center', width: 150 },
   { field: 'prioridade', headerName: 'Prioridade', headerAlign: 'center', align: 'center', width: 150 },
  { field: 'programa', headerName: 'Programa', headerAlign: 'center', align: 'center', width: 150 },
  { field: 'tc', headerName: 'TC', headerAlign: 'center', align: 'center', width: 150 }
  
  ];

  // Exemplo de dados (rows)
  //const rows = [
   //{ id: 1, status: "Ativo", area: 500, municipio: "São Paulo", viveiros: "3" },
//{ id: 2, status: "Inativo", area: 300, municipio: "Rio de Janeiro", viveiros: "2" },
    // Adicione mais linhas conforme necessário
 // ];

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 500,
        width: "90%",
        margin: "auto",
      }}
    >
      <DataGrid
        columns={columns}
        pageSizeOptions={[5]} // Define o tamanho de página (ajuste conforme necessário)
        hideFooterPagination
        sx={{
          fontFamily: '"Montserrat", sans-serif',
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f5f5f5",
            fontWeight: "bold",// Cor de fundo do cabeçalho
            color: "#ADAEA8", // Cor do texto do cabeçalho
            textAlign: "center",
          },
          "& .MuiDataGrid-cell": {
            textAlign: "center", // Centraliza o texto dentro das células
          },
        }}
      />
    </Paper>
  );
}
