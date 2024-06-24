import { render, screen } from '@testing-library/react'
import Login from '../Components/Login';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

test("All text is rendered", async () => {
    
    render(
        <BrowserRouter>
            <Login/ >
        </BrowserRouter>
    );

    expect(await screen.findByText("Portal de pasantías")).toBeVisible()
    
})

