import { Routes, Route } from '@solidjs/router'
import styles from './App.module.css';
import TopNav from './components/nav/topnav';

function App() {
  return (
    <div class={styles.App}>
      <TopNav/>
      
      <div class={styles.Content}>
        <Routes>
          <Route path='/' element={<p>Landing</p>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
