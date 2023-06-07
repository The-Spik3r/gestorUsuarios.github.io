import Input from './Input'
import Button from './Button'
import useFormulario from '../hooks/useFormulario'

const UseForm = ({submit})=>{

    const [formulario, handleChange, reset] = useFormulario({
      name: '',
      lastname:'',
      email:''
    })
    const handleSubmit = (e)=>{
      e.preventDefault()
      submit(formulario)
      reset()
    }
    return(
        <form onSubmit={handleSubmit}>
              <Input
                Label='Nombre' name='name'
                value={formulario.name}
                onChange={handleChange}
              />
              <Input
                Label='Apellido'
                name='lastname'
                value={formulario.lastname}
                onChange={handleChange}
              />
              <Input
                Label='Correo'
                name='email'
                value={formulario.email}
                onChange={handleChange}
              />
              <Button>
                Enviar
              </Button>
            </form>
    )
    
}

export default UseForm