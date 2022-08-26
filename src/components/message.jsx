import React from 'react';

const options = {
  weekday: "long", // or: "short", "numeric"
  month: "long", //or: "short", "numeric"
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};

// const simpleDate = (oldDate) => {
//   const newDate = new Date(oldDate);
//   return new Intl.DateTimeFormat('en-Us', options).format(newDate);
// }

const stringToColour = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  colour += "00000".substring(0, 6 - c.length) + c;
  return colour;
};

const Message = (props) => {
  const time = new Date(props.message.created_at).toLocaleTimeString();

  return (
    <div className="single-message">
      {console.log(stringToColour(props.message.author))}
      <h4><span style={{ color: stringToColour(props.message.author) }}>{props.message.author}</span> • <small>{time}</small></h4>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
