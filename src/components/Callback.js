import React, { useEffect } from 'react';
import axios from 'axios';

function Callback() {
      const CLIENT_ID = '2fdd6ad2c3c32c13fd71';
        const CLIENT_SECRET = '7df2c30d04baa6ad22f7fb7266d8fa1276cafde7';
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    console.log(code);

    if (code) {
      axios
        .post(
          `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}code=${code}`,
          null,
          
        )
        .then((response) => {
          const accessToken = response.data.access_token;
          // Store the access token securely (e.g., in localStorage or a state management library)
          console.log('Access Token:', accessToken);
        })
        .catch((error) => {
          console.error('Error exchanging code for access token:', error);
        });
    }
  }, []);
  return <div>Logging in...</div>;
}

export default Callback;
