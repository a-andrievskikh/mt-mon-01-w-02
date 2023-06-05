import React, { ChangeEvent, useState } from 'react'

type FullInputProps = {
  addMessage: (title: string) => void
}

export const FullInput = (props: FullInputProps) => {

  let [title, setTitle] = useState<string>('')

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onClickButtonHandler = () => {
    props.addMessage(title)
    setTitle('')
  }

  return (
    <>
      <input value={title} onChange={onChangeInputHandler} />
      <button onClick={onClickButtonHandler}>+</button>
    </>
  )
}


/*const removeMessage = (idx: number) => {
  const deleteMessage = message.filter((item, index) => idx !== index)
  setMessage(deleteMessage)
}*/

// setMessage(message.splice(idx, 1))

//const removeMessage = (idx: number) => setMessage(message.filter((_, index) => idx !== index))
// const removeMessage = (idx: number) => setMessage(message.filter((_, index) => idx !== index))