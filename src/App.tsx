import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
        
      </GridItem>
      <Show above="lg">
        <GridItem area="side" bg="teal">
          side
        </GridItem>
      </Show>

      <GridItem area="main" bg="gold">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
