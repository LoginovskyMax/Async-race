import React from 'react';

export default function ModalWindow() {
  return (
    <div className='modal-window'>
        <div className='modal-window__conteiner'>
            <p>Server not found</p>
            <p>Please run server, or download on 
              <a href="https://github.com/mikhama/async-race-api" target="_blank" rel="noreferrer">Github</a>
            </p>
        </div>
    </div>
  );
}
