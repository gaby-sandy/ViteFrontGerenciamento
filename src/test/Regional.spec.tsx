import Regional from '../components/Regional/Regional';
import {render,screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';



describe(Regional,()=>{
    it('should render label Ano',()=>{
        render(<Regional onRegionalChange={jest.fn()}/>);
        expect(screen.getByLabelText('Regional')).toBeInTheDocument();
    });

    it('should render Todos',()=>{
        render(<Regional onRegionalChange={jest.fn()}/>);
        expect(screen.getByText('Todos')).toBeInTheDocument();
    });
    it('should call onRegionalChange after year is selected',async()=>{
        type props = ( selected : string[]) => void;

        const RegionalProps: jest.MockedFunction<props> = jest.fn();

        render(<Regional onRegionalChange={RegionalProps}/>);
        const auto= screen.getByRole('combobox');
        fireEvent.mouseDown(auto);
        const option= await screen.findByText('Alto Paranaíba Central');
        fireEvent.click(option);
        expect(RegionalProps).toHaveBeenCalledWith(
            expect.arrayContaining(['Alto Paranaíba Central'])
        )
    });
});
