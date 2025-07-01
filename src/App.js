// // import React, { useState } from 'react';
// // import { ThemeProvider } from 'styled-components';
// // import GlobalStyle from './styles/GlobalStyle';

// // const lightTheme = {
// //   body: '#f5f5f5',
// //   text: '#121212',
// // };

// // const darkTheme = {
// //   body: '#121212',
// //   text: '#ffffff',
// // };

// // function App() {
// //   const [darkMode, setDarkMode] = useState(true);

// //   return (
// //     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
// //       <GlobalStyle />
// //       <div>
// //         <button
// //           style={{
// //             position: 'fixed',
// //             top: 20,
// //             right: 20,
// //             padding: '10px 20px',
// //             cursor: 'pointer',
// //           }}
// //           onClick={() => setDarkMode(!darkMode)}
// //         >
// //           {darkMode ? '🌞 Light' : '🌙 Dark'}
// //         </button>

// //         <h1 style={{ textAlign: 'center', marginTop: '100px' }}>Manish Portfolio</h1>
// //         <p style={{ textAlign: 'center' }}>Ye structure ab tayar ho raha hai bhai!</p>
// //       </div>
// //     </ThemeProvider>
// //   );
// // }

// // export default App;


// import React, { useState } from 'react';
// import { ThemeProvider } from 'styled-components';
// import GlobalStyle from './styles/GlobalStyle';
// import Header from './components/Header';
// import Hero from './components/Hero';

// const lightTheme = {
//   body: '#f5f5f5',
//   text: '#121212',
// };

// const darkTheme = {
//   body: '#121212',
//   text: '#ffffff',
// };

// function App() {
//   const [darkMode, setDarkMode] = useState(true);
//   const toggleTheme = () => setDarkMode(!darkMode);

//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//       <GlobalStyle />
//       <Header darkMode={darkMode} toggleTheme={toggleTheme} />
//       <div style={{ marginTop: '100px', textAlign: 'center' }}>
//         <h1>Manish Portfolio 🚀</h1>
//       </div>
//       <Header darkMode={darkMode} toggleTheme={toggleTheme} />
// <Hero />
//     </ThemeProvider>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const lightTheme = {
  body: '#f5f5f5',
  text: '#121212',
};

const darkTheme = {
  body: '#121212',
  text: '#ffffff',
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
