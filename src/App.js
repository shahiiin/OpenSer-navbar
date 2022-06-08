
import Header from './components/navbar/header/Header'
import Main from './components/contents/main-page/main'
import Janbotran from './components/jambotran/janbotran'


function App(props) {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Janbotran/>
    </div>
  )
}
export default App