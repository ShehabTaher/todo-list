import React from 'react'
// import style from '../styles/modules/title.module.scss'

function PageTitle({children , ...rest}) {
  return (

        <p className="title" {...rest}>{children}</p>

  )
}

export default PageTitle