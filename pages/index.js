import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'
import { useState } from 'react'

const Home = () => {
  const [userInput, setUserInput] = useState('')
  const [data, setData] = useState([])

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const addData = (e) => {
    e.preventDefault();
    setData([userInput, ...data])
  }

  return (
    <div className={homeStyles.home}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="web development programming" />
      </Head>
      <div>
        <h1 className={homeStyles.header}>TODO LIST</h1>
        <form className={homeStyles.inputCover} onSubmit={addData}>
          <input type='text' onChange={handleChange} className={homeStyles.input} />
          <button className={homeStyles.button} type='submit'>Submit</button>
        </form>
        <diV className={homeStyles.data}>
          {data.map((d, i) => {
            return (
              <h2 key={i} className={homeStyles.dataList}>{d}</h2>
            )
          }
          )}
        </diV>
      </div>
    </div>
  )
}

export default Home