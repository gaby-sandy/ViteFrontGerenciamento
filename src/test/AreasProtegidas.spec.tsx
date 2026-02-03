import FixedTags from '../components/Areas-protegidas/Areas';
import {render,screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';



describe(FixedTags,()=>{
    it('should render label Ano',()=>{
        render(<FixedTags onProtectedAreaChange={jest.fn()}/>);
        expect(screen.getByLabelText('Áreas protegidas')).toBeInTheDocument();
    });

    it('should render Todos',()=>{
        render(<FixedTags onProtectedAreaChange={jest.fn()}/>);
        expect(screen.getByText('Todos')).toBeInTheDocument();
    });
    it('should call onRegionalChange after year is selected',async()=>{
        type props = ( selectedAreas : string[]) => void;

        const FixedTagsProps: jest.MockedFunction<props> = jest.fn();

        render(<FixedTags onProtectedAreaChange={FixedTagsProps}/>);
        const auto= screen.getByRole('combobox');
        fireEvent.mouseDown(auto);
        const option= await screen.findByText('Área de Preservação Permanente (APP)');
        fireEvent.click(option);
        expect(FixedTagsProps).toHaveBeenCalledWith(
            expect.arrayContaining(['Área de Preservação Permanente (APP)'])
        )
    });
});
