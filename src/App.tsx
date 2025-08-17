import {
  Header,
  Footer,
  MainTitle,
  ColorfulTitle,
  Container,
} from "./components";
import { PopupProvider } from "./popup/components/PopupProvider";

import { ProductGrid } from "./products/components/";

export function App() {
  return (
    <>
      <PopupProvider>
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
      </PopupProvider>
    </>
  );
}
