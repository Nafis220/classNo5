import { Link } from '@reach/router';
import React from 'react';
import style from  './layout.module.css';

function Layout(props) {
const path = window.location.pathname
    return (
        <div>
            <div className= {style.App}>
    <nav className= {style.nav}>
      <div className= {style.brand}>
        <h2>Brand Name</h2>
      </div>  
      <div className=  {style.menu}>
       <ul>
        <li>
          <Link to='/' className= {path === '/'? style.navItemActive : style.navItem} >Home</Link>
        </li>
        <li>
          <Link className= {path === '/about'? style.navItemActive : style.navItem} to='/about'>About</Link>
        </li>
        <li>
          <Link className= {path === '/help'? style.navItemActive : style.navItem} to='/help'>Help</Link>
        </li>
        <li>
          <Link className= {path === '/clock'? style.navItemActive : style.navItem} to='/clock'>Clock</Link>
        </li>
        <li>
          <Link className= {path === '/toDo'? style.navItemActive : style.navItem} to='/toDo'>TO DO</Link>
        </li>
       </ul>
     </div>
    </nav>
    <main className={style.main}>
     {props.children}
    </main>
    <footer className={style.footer}>
      <h3>Footer</h3>
      <ul>
        <li>footer link one</li>
        <li>footer link one</li>
        <li>footer link one</li>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus amet architecto ipsa quia deleniti in itaque, possimus officia fugiat ex dolores. Rerum deleniti ut perferendis laborum voluptatibus distinctio nobis eos.</p>
      </ul>
    </footer>
    </div>
        </div>
    );
}

export default Layout;