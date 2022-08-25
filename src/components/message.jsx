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

const simpleDate = (oldDate) => {
  const newDate = new Date(oldDate);
  return new Intl.DateTimeFormat('en-Us', options).format(newDate);
}

const Message = (props) => {
  return (
    <div className="single-message">
      <h3>{props.message.author}</h3>
      <p>{props.message.content}</p>
      <p>{simpleDate(props.message.created_at)}</p>
    </div>
  );
};

export default Message;
