import React, { useState } from 'react'
import './App.css'
import { FullInput } from './Components/FullInput'
import { Input } from './Components/Input'
import { Button } from './Components/Button'

type MessageType = {
  message: string
}

export const App = () => {
  const [message, setMessage] = useState<MessageType[]>([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'},
  ])

  let [title, setTitle] = useState<string>('')

  const addMessage = (title: string) => setMessage([{message: title}, ...message])
  // const removeMessage = (idx: number) => setMessage(message.filter((_, index) => idx !== index))
  const removeMessage = (idx: number) => {
    message.splice(idx, 1)
    setMessage([...message])
  }

  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }

  return (
    <div className={'App'}>
      {/*<FullInput addMessage={addMessage} />*/}
      <Input setTitle={setTitle} title={title} />
      <Button name={'+'} callBack={callBackButtonHandler} />
      {
        message
          .map((item, idx) => <div
              key={idx}>
              {item.message}
              <button onClick={() => removeMessage(idx)}>x</button>
            </div>,
          )
      }
    </div>
  )
}
