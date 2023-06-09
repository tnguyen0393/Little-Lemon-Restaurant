import { render, screen} from "@testing-library/react";
import ReservationHeaderSection from "./ReservationHeaderSection";

test("Renders from the ReservationHeaderSection", () => {
    render(<ReservationHeaderSection />);
    const headingElement = screen.getByText("Little Lemon Reservation");
    expect(headingElement).toBeInTheDocument();
})