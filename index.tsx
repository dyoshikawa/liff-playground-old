import React from 'react'
import ReactDOM from 'react-dom'
import liff from '@line/liff'

const App: React.VFC = () => {
  const [initState, setInitState] = React.useState('Initializing...')
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    console.log('liff init start')
    liff
      .init({
        liffId: '1656223866-2r9KwN3k',
      })
      .then((result) => {
        setInitState('Initialized!')
        console.log('liff init end')
        console.log(result)
      })
      .catch((e) => {
        setError(e.message)
        console.log('liff init error')
        console.error(e)
      })
  }, [setInitState, setError])

  return (
    <div>
      <div>LIFF init state: {initState}</div>
      {error !== '' && <div>Error message: {error}</div>}
      <div></div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
