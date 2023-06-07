import './Input.css'
const Input =({Label, ...rest})=>{
    return(
        <div className='Field'>
            <label>{Label}</label>
            <input {...rest}/>
        </div>    
    )
}


export default Input