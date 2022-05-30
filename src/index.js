import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messagesText = [
  { id: 1, text: 'Hello, world' },
  { id: 2, text: 'Hi, bro' },
  { id: 3, text: 'Shut up' }
]

let dialogsData = [
{ id: 1, name: 'Maxim' },
{ id: 2, name: 'Nikita' },
{ id: 3, name: 'Alina' },
{ id: 4, name: 'Mary' }
]

let postsContent = [
{ id: 1, text: 'Hello, world', likesCount: 24 },
      { id: 2, text: 'It my first post here', likesCount: 21 }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App mt={messagesText} dd={dialogsData} pc={postsContent}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
