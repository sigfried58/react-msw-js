import {useEffect, useState} from 'react';
import fetch from 'cross-fetch';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    getApiData();
  }, []);

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/hello',
    )
      .then(response => response.json())
      .catch(error => setData(error));

    // update the state
    setData(response);
  };

  const onUserAdd = user => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <div>{data ? data[0].name : ''}</div>
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
