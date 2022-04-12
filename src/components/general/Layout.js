import { Container } from 'reactstrap';

//compo
import { Alerts } from './Alerts';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout({ children }) {


  return (
    <>
      <Alerts/>
      <Header />
      <Container className="mt-4">{children}</Container>
      <Footer />
    </>
  );
}
