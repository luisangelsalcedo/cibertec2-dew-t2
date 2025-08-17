import {
  Header,
  Footer,
  MainTitle,
  ColorfulTitle,
  Container,
} from "./components";

import { ProductGrid } from "./products/components/";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <MainTitle>
            <ColorfulTitle>
              Tecnología <strong>Computadoras</strong>
            </ColorfulTitle>
          </MainTitle>
          <ProductGrid />
        </Container>
      </main>
      <Footer />
    </>
  );
}
