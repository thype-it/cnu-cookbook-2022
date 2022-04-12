import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert, Container } from 'reactstrap';

export const Alerts = () => {

  const location = useLocation();

  const [alertActive, setAlertActive] = useState(location.state.delete);
  useEffect(() => {
    setTimeout(() => {
      setAlertActive(false)
    }, 6000)
  }, []);

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
        {location.state.delete? <Alert isOpen={alertActive} >
          Recept bol uspešne odtránený
        </Alert>: null}
      </Container>
    </div>
  )
}
