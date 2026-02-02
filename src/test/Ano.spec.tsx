import Ano from '../components/Ano/Ano';
import {render,screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';



describe(Ano,()=>{
    it('should render label Ano',()=>{
        render(<Ano onYearChange={jest.fn()}/>);
        expect(screen.getByLabelText('Ano')).toBeInTheDocument();
    });

    it('should render Todos',()=>{
        render(<Ano onYearChange={jest.fn()}/>);
        expect(screen.getByText('Todos')).toBeInTheDocument();
    });
    it('should call onYearChange after year is selected',async()=>{
        type props = ( years : string[]) => void;

        const AnoProps: jest.MockedFunction<props> = jest.fn();

        render(<Ano onYearChange={AnoProps}/>);
        const auto= screen.getByRole('combobox');
        fireEvent.mouseDown(auto);
        const option2023= await screen.findByText('2023');
        fireEvent.click(option2023);
        expect(AnoProps).toHaveBeenCalledWith(
            expect.arrayContaining(['2023'])
        )
    });
});
