import Header from "./components/Header";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;



function App() {
  return (
    <Contenedor>
            <Header 
                titulo='Cotizador de Seguros'/>
    </Contenedor>
  );
}

export default App;
