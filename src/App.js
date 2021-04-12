import { BrowserRouter } from 'react-router-dom';
import { Routing } from './routing/routing';

export const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;
