// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGES = 'CREATE_MESSAGES';

export function fetchMessages(channel) {
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`).then(response => response.json()).then((data) => {
    return {
      type: FETCH_MESSAGES,
      payload: data.messages
    };
  });
}

export function createMessage(channel, author, content) {
  const body = {
    author,
    content,
  };

  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CREATE_MESSAGES,
    payload: promise
  };
}
