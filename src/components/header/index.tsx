"use client"
import styles from './index.module.css'
import { useState, useEffect } from 'react'

function Header(){
    const [headerBg, setHeaderBg] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 70) {  // Quando o scroll for maior que 50px, muda o estado
            setHeaderBg(true)
          } else {
            setHeaderBg(false)
          }
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])
        
    

    return(
        <header className={`${styles.header} ${headerBg ? styles.headerScroll : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>Joestar Geek's</div>
                <div className={styles.pesquisa}>
                    <input type="text" placeholder='Berserk'/>
                </div>
            </div>
        </header>
    )
}

export default Header