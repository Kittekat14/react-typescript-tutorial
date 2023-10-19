import {useState} from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App() {
  const cities = ['San Francisco', 'New York', 'Tokyo', 'London', 'Paris'];

  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClose = () => {
    setIsAlertVisible(false);
  };

  return (
    <>
      {isAlertVisible && (
        <Alert onClose={handleClose}>
          Hello <span>World</span>
        </Alert>
      )}
      <ListGroup
        heading='Cities'
        cities={cities}
        onSelectItem={handleSelectItem}
      />
      <br />
      <Button onClick={() => setIsAlertVisible(true)}>Click Here</Button>
    </>
  );
}

export default App;

