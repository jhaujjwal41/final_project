
import './App.css';
// import BlockPageHeader from './components/BlockPage';
// import BlogHeader from './components/BlogHeader';
// import Catch from './components/Catch';
// import Content from './components/Content';
// import Footer from './components/Footer';
// import FooterOverlap from './components/FooterOverlap';
// import NavigationMenu from './components/Navigation';
import { BrowserRouter,Route,Routes, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Articles from './pages/Articles';
import Login from './pages/Login';
import useToken from './components/UseToken';
import SignUp from './pages/SignUp';
import AddArticle from './pages/AddArticle';

import { useState, useEffect } from 'react';



function App() {

   const [user, setUser] = useState(null);
   
   useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
     setUser(user);
    }
  }, []);
   
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  //  console.log(user.token_info.token);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout user={user} setUser={setUser}  />}>
        <Route index element={<HomePage/>} />
        <Route path="/addArticles" element={<AddArticle user={user} />}/>
        <Route path= "/Articles/:id" element= {<Articles />} />

        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
      {!user &&<Route path="/Login" element={<Login user={user} setUser={setUser} />}/>}
      <Route path="/signup" element={<SignUp />}/>
    </Routes>
  </BrowserRouter>
    // <div className="bg-white py-2">
    //   <div className='flex flex-col  '>
    //     <NavigationMenu  />
    //     <BlogHeader />
    //     <BlockPageHeader />
    //     <Content />
    //     <Catch />
    //     <FooterOverlap />
    //     <Footer />
    //     </div>
    // </div>
  );
}

export default App;
