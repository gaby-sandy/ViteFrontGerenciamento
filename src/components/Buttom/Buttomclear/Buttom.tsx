
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './Buttom.module.css'; 

// Definindo o tipo das props
interface ColorButtonsProps {
  onClick: () => void;  // Função que será executada ao clicar no botão
}

export default function ColorButtons({ onClick }: ColorButtonsProps) {
  return (
    <div className={styles.container}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" className={styles.customButton} onClick={onClick}>
          Limpar filtros
        </Button>
      </Stack>
    </div>
  );
}