import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>MERN Authentication</h1>
          <p className='text-center mb-4'>
            <h1 className='text-center mb-4'> 

This is a boilerplate for MERN authentication that stores a JSON Web Token (JWT) in an HTTP-only cookie. It also uses Redux Toolkit and the React Bootstrap library.</h1>
            
<p>It also uses Redux Toolkit and the React Bootstrap library.</p>
<p>JWT is a standard way of securely transmitting information between parties.</p>
<p>HTTP-only cookies are cookies that cannot be accessed by JavaScript.</p>
<p>Redux Toolkit is a collection of utilities that make it easier to use Redux.</p>
<p>React Bootstrap is a library that provides React components that are based on Bootstrap.</p>
<p>This boilerplate provides a simple and secure way to implement authentication in a MERN stack application.</p>
<p>It can be used as a starting point for building your own authentication system or as a reference for learning how to implement authentication with JWT and HTTP-only cookies.</p>
<p>Here are some of the benefits of using this boilerplate:</p>
<ul>
<li>It is secure.</li>
<li>It is easy to use.</li>
<li>It is well-documented.</li>
</ul>
<p>If you are looking for a way to implement authentication in your MERN stack application, I recommend using this boilerplate.</p>
<p>It is a secure, easy-to-use, and well-documented way to get started with authentication.</p>
          </p>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Register
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
