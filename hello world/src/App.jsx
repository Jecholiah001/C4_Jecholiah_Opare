import './App.css'
import Button from './components/Button';

const myApp = () => {
  return (
    <>
      <div>
        <h1>USER PORTFOLIO</h1>
        <p>
          <h2>Full Name:</h2>
          Jecholiah Afua Antwiwaa Opare
          <h2> Educational Background:</h2>
          Bachelor Of Science in Biomedical Engineering- University Of Ghana, 2022
          <h2> Professional Background:</h2>
            <ul>
              <li>Biomedical Engineering Intern at UGMC</li>
              <li>Front-End Developer Trainee at Azubi Africa</li>
            </ul>
          <h2>Skills:</h2>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
              <li>Troubleshooting</li>
              <li>Repair and Maintenance</li>
            </ul>
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Button label="Login"/>
      <Button label="Sign In"/>
    </div>
    </>
  )
}

export default myApp;
