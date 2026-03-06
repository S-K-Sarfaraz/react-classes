import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.parent}>
        <div className={style.container}>
            <div className="logo">Logo</div>
            <div className={style.btn}>Login</div>
        </div>
    </div>
  )
}

export default Header