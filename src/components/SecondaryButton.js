import React, { Children } from 'react'
// import { getClasses } from '../utils/getClasses'
// import styles from '../GlobalStyles.css'

// const buttonTypes = {
//     primary: 'primary',
//     secondary: 'secondary'
// }
function SecondaryButton({children , type , ...rest})  {
  return (
    <button 
    type={type === 'submit' ? 'submit' : 'button'} 
    className='button button--secondary' {...rest}>{children}</button>
  )
}

function SelectButton({children, ...rest}){
    return (
        <select className='button button__select'
        {...rest}
        >
            {children}
        </select>
    )
}

export {SelectButton}
export default SecondaryButton