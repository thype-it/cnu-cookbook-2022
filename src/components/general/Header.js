import { useState } from 'react';
import { Navbar, Container, NavbarBrand, Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import { SearchRecipes } from '../helpers/SearchRecipes';


export function Header() {

  const [canvas, setCanvas] = useState(false)

  return (
    <Navbar color="dark" dark>
      <Container className='d-flex justify-content-between'>
        <NavbarBrand href="/">Cookbook</NavbarBrand>
        <Button
          color="secondary"
          onClick={() => setCanvas(true)}
          >
          Otvoriť vyhľadávanie
        </Button>
      </Container>
      <Offcanvas
        isOpen={canvas}
        direction="end"
        scrollable
      >
        <OffcanvasHeader toggle={() => setCanvas(false)}>
          Vyhľadávanie
        </OffcanvasHeader>
        <OffcanvasBody>
          <SearchRecipes/>
        </OffcanvasBody>
      </Offcanvas>
    </Navbar>
  );
}
