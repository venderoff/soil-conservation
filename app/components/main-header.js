import LogoImage from '@/assets/header.jpg'
import Link from 'next/link'; 
import classes from './main-header.module.css'
export default function MainHeader() {

    return(
       <header className={classes.header}>
          <Link className={classes.logo}href="/" >
          <img src={LogoImage.src} alt="soil conservation" style={{ width: '90%', height: '100 px' }} />
          Soil Conservation
          </Link>
        <nav className={classes.nav}>
           <ul>
               <li><Link href="/about">About</Link></li>
               <li><Link href="/login">Login</Link></li>

           </ul>


        </nav>

        </header>

    );



}