import { useState } from 'react'
import Card from './Components/Card'
import Container from './Components/Container'
import UserForm from './Components/UseForm'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const submit = (usuario) =>{
    
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }
  return(
    <div style={{marginTop:'15%'}}>
    <Container>
        <Card>
          <div style={{ padding:20 }}>
            <UserForm submit={submit}/>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(usuario => 
              <li key={usuario.email}>
                {`${usuario.name} ${usuario.lastname} : ${usuario.email}`}
              </li>
              )}
          </ul>
        </Card>
      </Container>  
      </div>
      
  )
}

export default App
