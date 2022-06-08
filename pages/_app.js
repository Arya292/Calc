import '../styles/globals.css'
import {useState} from "react";
function MyApp({ Component, pageProps }) {
    const evaluate=(s)=>{
        const y = eval(s);
        console.log(y)

    }
  return (

    <Component {...pageProps} />

  )
}
export default MyApp
