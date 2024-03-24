import LogoImage from '@/assets/header.jpg'
import Link from 'next/link'; 
export default function MainHeader() {

    return(
       <header>
          <Link href="/" >
          <img src={LogoImage.src} alt="soil conservation" style={{ width: '90%', height: '100 px' }} />
          Soil Conservation
          </Link>
        <nav>
           <ul>
               <li><Link href="/about">About</Link></li>
               <li><Link href="/login">Login</Link></li>

           </ul>


        </nav>

        </header>

    );



}