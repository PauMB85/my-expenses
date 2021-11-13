import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Login = lazy(() => import('./../pages/login/Login'));
const Signup = lazy(() => import('./../pages/signup/SignUp'));
const Home = lazy(() => import('./../pages/Home'));

export const AppRouter = () => {
  const hasUserLoged = localStorage.getItem('user')? true : false
  return (
    <Suspense fallback={<h2>I am loading...</h2>}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/" element={hasUserLoged? <Home /> : <Login />}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
