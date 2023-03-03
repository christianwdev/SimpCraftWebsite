import { Routes, Route } from '@solidjs/router'
import styles from './App.module.css';
import TopNav from './components/nav/topnav';
import Blog from './pages/blog';

function App() {
  return (
    <div class={styles.App}>
      <TopNav/>
      
      <div class={styles.Content}>
        <Routes>
          <Route path='/' component={<Blog/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
