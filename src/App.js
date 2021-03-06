import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Post from './containers/Post';
//Route path element={<Home/>}*/
// Switch foi substituido por Routes

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <main>
        <section>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:subject/:id" element={<Post />} />
            </Routes>
          </Router>
        </section>
      </main>

    </ThemeContext.Provider>
  );
}

export default App;
