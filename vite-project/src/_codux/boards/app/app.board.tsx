import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { MemoryRouter } from "react-router-dom"

export default createBoard({
    name: 'App',
    Board: () => (
        <MemoryRouter>
            <App />
        </MemoryRouter>),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1608,
        windowHeight: 768,
        canvasWidth: 1184
    }
});
