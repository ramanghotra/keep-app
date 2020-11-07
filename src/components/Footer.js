import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return (<footer>
         <p> Copyrght © {year} </p>
    </footer>);
}

export default Footer;