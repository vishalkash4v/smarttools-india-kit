
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Dispatch render event for prerendering
document.dispatchEvent(new Event('render-event'));
