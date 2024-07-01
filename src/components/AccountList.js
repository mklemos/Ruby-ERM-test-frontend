import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/accounts')
      .then(response => {
        console.log('API response:', response.data); // Log the response
        setAccounts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the accounts!', error);
      });
  }, []);

  return (
    <div>
      <h1>Accounts</h1>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>{account.name}: {account.balance}</li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
