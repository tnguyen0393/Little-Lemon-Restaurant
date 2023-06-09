import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ReserveFormSection from "../components/ReserveFormSection";

test('ReserveFormSection filters out reserved times', () => {
    const mockFormik = {
        values: { date: '2023-06-10', time: '18:00' },
        touched: {},
        errors: {},
        getFieldProps: jest.fn(),
        handleSubmit: jest.fn(),
        handleChange: jest.fn(),
    };
    const availableTimes = ['17:00', '18:00', '19:00', '20:00'];
    const booked = { reservations: ['2023-06-1018:00'] };
    const setTableReserved = jest.fn();

    render(
        <ReserveFormSection
            formik={mockFormik}
            availableTimes={availableTimes}
            booked={booked}
            setTableReserved={setTableReserved}
        />
    );

    expect(screen.queryByText('18:00')).toBeNull();
    expect(screen.getByText('17:00')).toBeInTheDocument();
    expect(screen.getByText('19:00')).toBeInTheDocument();
    expect(screen.getByText('20:00')).toBeInTheDocument();
});

test('ReserveFormSection validates form fields', async () => {
    const mockFormik = {
        values: { name: '', date: '', time: '', numOfGuest: '', ocassion: '' },
        touched: { name: true, date: true, numOfGuest: true },
        errors: { name: 'Name is required', date: 'Date is required', numOfGuest: 'Party size is required' },
        getFieldProps: jest.fn(),
        handleSubmit: jest.fn(),
        handleChange: jest.fn(),
        handleBlur: jest.fn(),
        setErrors: jest.fn(),
    };
    const availableTimes = ['17:00', '18:00', '19:00', '20:00'];
    const booked = { reservations: ['2023-06-1018:00'] };
    const setTableReserved = jest.fn();

    render(
        <ReserveFormSection
            formik={mockFormik}
            availableTimes={availableTimes}
            booked={booked}
            setTableReserved={setTableReserved}
        />
    );

    fireEvent.blur(screen.getByLabelText('Name'));
    fireEvent.blur(screen.getByLabelText('Date'));
    fireEvent.blur(screen.getByLabelText('Party Size'));

    // Simulate form submission
    fireEvent.submit(screen.getByRole('button', { name: /Reserve/i }));

    await waitFor(() => expect(mockFormik.handleSubmit).toHaveBeenCalled());

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Date is required')).toBeInTheDocument();
    expect(screen.getByText('Party size is required')).toBeInTheDocument();
});