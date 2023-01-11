import React, { Children } from 'react'
// import { getClasses } from '../utils/getClasses'
// import styles from '../styles/modules/mySass.scss'

// const buttonTypes = {
//     primary: 'primary',
//     secondary: 'secondary'
// }
function PrimaryButton({children})  {
  return (
    <button 
    type='button' 
    className='button button--primary'>{children}</button>
  )
}

export default PrimaryButton