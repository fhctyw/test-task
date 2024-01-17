import { QueryClient, QueryClientProvider } from 'react-query';
import OrganizationPackage from "./components/specific/OrgranizationPackageComponent";
import { GlobalStyle } from './GlobalStyle';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle/>
      <OrganizationPackage/>
    </QueryClientProvider>
  )
}

export default App
