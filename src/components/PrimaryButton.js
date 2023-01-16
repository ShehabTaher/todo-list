import React, { Children } from 'react'
// import { getClasses } from '../utils/getClasses'
// import styles from '../styles/modules/mySass.scss'

// const buttonTypes = {
//     primary: 'primary',
//     secondary: 'secondary'
// }
function PrimaryButton({children , type, ...rest})  {
  return (
    <button  
    className='button button--primary'
    type={type === 'submit' ? 'submit' : 'button'}
    {...rest}
    >
      {children}
      </button>
  )
}

export default PrimaryButton