
import style from './App.module.css';
import Home from './components/Home/Home';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Row from './components/Row/Row'
import Column from './components/Column/Column'
import Footer from './components/Footer/Footer'
import Divider from './components/Divider/Divider';
import { Input,Button } from '@mui/material';
import Skills from './components/Skills/Skills';
import Project from './components/Projetcs/Project';
import AllFaqs from './components/Faq/AllFaqs'
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {
<>
  
   <Layout>
              
              
              <div className={style.navbarDiv}> <Home/></div>
 
<Row styles={{marginTop:'50px'}}>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Contacts</h2>
              <p>+92 3142274 221</p>
              <p>saimshehzad2030@gmail.com</p>
              </Column>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Social</h2>
              <p><Link style={{marginTop:'10px',textDecoration:'none',color:'black'}} to={'https://github.com/saimshahzad2030'}>Github</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'https://www.linkedin.com/in/saim-shahzad-476bba25b/'}>Linkedin</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'https://www.fiverr.com/saimshehzad_ai?up_rollout=true'}>fiver</Link></p>
              </Column>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Skills</h2>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>React</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>MERN</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>AI</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." sx={{marginTop:'20px'}}/>
              <Button variant="outlined" sx={{margin:'20px',color:'rgb(0, 51, 102)'}}>Send</Button>
   
              </Column>
             </Row>
             <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey'}}/>
             
             <Footer><h4 style={{color:'rgb(0, 51, 102)'}}>Copyright @ Saim Shahzad</h4></Footer></Layout>
</>

    }/>




<Route path='/skills' element = {
<>
<Layout>
    
<Skills/>
<Row styles={{marginTop:'50px'}}>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Contacts</h2>
              <p>+92 3142274 221</p>
              <p>saimshehzad2030@gmail.com</p>
              </Column>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Social</h2>
              <p><Link style={{marginTop:'10px',textDecoration:'none',color:'black'}} to={'https://github.com/saimshahzad2030'}>Github</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'https://www.linkedin.com/in/saim-shahzad-476bba25b/'}>Linkedin</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'https://www.fiverr.com/saimshehzad_ai?up_rollout=true'}>fiver</Link></p>
              </Column>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Skills</h2>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>React</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>MERN</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>AI</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." sx={{marginTop:'20px'}}/>
              <Button variant="outlined" sx={{margin:'20px',color:'rgb(0, 51, 102)'}}>Send</Button>
   
              </Column>
             </Row>
             <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey'}}/>
             
             <Footer><h4 style={{color:'rgb(0, 51, 102)'}}>Copyright @ Saim Shahzad</h4></Footer>

</Layout>
</>

    }/>




<Route path='/projects' element = {
<>
<Layout>
<Project/>
<Row styles={{marginTop:'50px'}}>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Contacts</h2>
              <p>+92 3142274 221</p>
              <p>saimshehzad2030@gmail.com</p>
              </Column>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Social</h2>
              <p><Link style={{marginTop:'10px',textDecoration:'none',color:'black'}} to={'https://github.com/saimshahzad2030'}>Github</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'https://www.linkedin.com/in/saim-shahzad-476bba25b/'}>Linkedin</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'https://www.fiverr.com/saimshehzad_ai?up_rollout=true'}>fiver</Link></p>
              </Column>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Skills</h2>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>React</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>MERN</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>AI</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." sx={{marginTop:'20px'}}/>
              <Button variant="outlined" sx={{margin:'20px',color:'rgb(0, 51, 102)'}}>Send</Button>
   
              </Column>
             </Row>
             <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey'}}/>
             
             <Footer><h4 style={{color:'rgb(0, 51, 102)'}}>Copyright @ Saim Shahzad</h4></Footer>
</Layout>
</>

    }/>




<Route path='/faqs' element = {
<>
<Layout>
    
<AllFaqs/>
<Row styles={{marginTop:'50px'}}>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Contacts</h2>
              <p>+92 3142274 221</p>
              <p>saimshehzad2030@gmail.com</p>
              </Column>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Social</h2>
              <p><Link style={{marginTop:'10px',textDecoration:'none',color:'black'}} to={'https://github.com/saimshahzad2030'}>Github</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'https://www.linkedin.com/in/saim-shahzad-476bba25b/'}>Linkedin</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'https://www.fiverr.com/saimshehzad_ai?up_rollout=true'}>fiver</Link></p>
              </Column>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'rgb(0, 51, 102)'}}>Skills</h2>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>React</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>MERN</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>AI</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." sx={{marginTop:'20px'}}/>
              <Button variant="outlined" sx={{margin:'20px',color:'rgb(0, 51, 102)'}}>Send</Button>
   
              </Column>
             </Row>
             <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey'}}/>
             
             <Footer><h4 style={{color:'rgb(0, 51, 102)'}}>Copyright @ Saim Shahzad</h4></Footer>
</Layout>
</>

    }/>

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
