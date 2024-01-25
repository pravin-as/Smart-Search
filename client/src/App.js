import { Box } from "@mui/material";
import SearchBox from "./components/SearchBox";
import AppHeader from "./components/AppHeader";
import Title from "./components/Title";


function App() {
  return (
    <Box sx={{ backgroundColor: '#171719', minHeight: '100vh' }}>
      <AppHeader  />
      <Title/>
      <SearchBox  />
    </Box>
  );
}

export default App;
