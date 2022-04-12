import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert, Container } from 'reactstrap';

export const Alerts = () => {

  const location = useLocation();
  console.log(location.state);

  const [wasDeleted, setWasDeleted] = useState(false);

  useEffect( () => {
    setWasDeleted(location.state?.delete)
    if (wasDeleted) {
      setTimeout(() => {
        setWasDeleted(false);
        // location.state.delete = false;
        console.log(location.state);
      }, 6000)
    }
  }, [location.state, wasDeleted])


  const styles = {
    position: 'fixed',
    top: "15px",
    left: '0',
    width: '100%',
    zIndex: '2000',
    textAlign: 'center'
  }

  return (
    <div style={styles}>
      <Container>
        {wasDeleted? <Alert isOpen={wasDeleted} >
          Recept bol uspešne odtránený
        </Alert>: null}
      </Container>
    </div>
  )
}
