import Municipio from '../components/Municipio/Municipio';
import {render,screen, fireEvent,} from '@testing-library/react';
import '@testing-library/jest-dom';



describe(Municipio,()=>{
    it('should render label Ano',()=>{
        render(<Municipio onMunicipioChange={jest.fn()}/>);
        expect(screen.getByLabelText('Municipio')).toBeInTheDocument();
    });

    it('should render Todos',async()=>{
        render(<Municipio onMunicipioChange={jest.fn()}/>);
       
        fireEvent.click(screen.getByRole('combobox')); 


        const todos = await screen.findByText('Todos');
        expect(todos).toBeInTheDocument();

    });
    it('should call onRegionalChange after year is selected',async()=>{
        type props = ( selectedMunicipios : string[]) => void;

        const MunicipioProps: jest.MockedFunction<props> = jest.fn();

        render(<Municipio onMunicipioChange={MunicipioProps}/>);
        const auto= screen.getByRole('combobox');
        fireEvent.mouseDown(auto);
        const option= await screen.findByText('Abaeté');
        fireEvent.click(option);
        expect(MunicipioProps).toHaveBeenCalledWith(
            expect.arrayContaining(['Abaeté'])
        )
    });
});
