import {
  Header,
  Footer,
  MainTitle,
  ColorfulTitle,
  Container,
} from "./components";

import { ProductGrid } from "./products/components/ProductGrid";

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
