import { useState } from 'react'
import './App.css'
import routes from './constants/routes.constant'
import { Suspense, useEffect } from 'react'
// import { usePreload } from './hooks/usePreload'
import { SplashScreen, StaticSplashScreen } from './pages/SplashScreen.component'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.component'
import NavBar from './components/Atoms/NavBar.component'
import Header from './layouts/Header.layout'
// import SecondTodoList from './features/todos/SecondTodoList'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // usePreload({});

  // if (loading) {
  //   return <SplashScreen />;
  // }
  return (
    <>
    <NavBar/>
      <Suspense fallback={<StaticSplashScreen />}>
        <div>
          {/* {<SignIn /> : */}
          <div style={{ marginTop: "4rem" }}>
            <div>
              <Routes>
                <Route path={routes.Home.path} Component={Home} />
              </Routes>
            </div>
          </div>
          {/* } */}
        </div>
      </Suspense>
    </>
  )
}

export default App
