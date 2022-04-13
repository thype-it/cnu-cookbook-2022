import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Alert, Container } from 'reactstrap';

export const Alerts = () => {

  //states
  const [isAlert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect( () => {
    if (location.state) {
      setAlert(true);
      setAlertType(location.state.alert);
      navigate(location.pathname, {});
      setTimeout(()=>{
        setAlert(false);
        setAlertType('');
      }, 3000)
    }
  }, [location, navigate])

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
        {alertType === 'delete' ? <Alert isOpen={isAlert} >
          Recept bol úspešne odtránený.
        </Alert>: null}
        {alertType === 'newRecipe' ? <Alert isOpen={isAlert} >
          Recept bol úspešne vytvorený.
        </Alert>: null}
        {alertType === 'edit' ? <Alert isOpen={isAlert} >
          Recept bol úspešne upravený.
        </Alert>: null}
      </Container>
    </div>
  )
}
