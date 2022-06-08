import styles from "../styles/layout.module.css";
import _app from "./_app";
import fns from "./fns";

const Button=() =>{
    let ops = "";
    const operations=(n)=>{

        ops=ops+n.target.innerHTML;
        console.log(ops);
      document.getElementById("txt").innerHTML=ops;

    }

    const evaluate=()=>{
        var y = eval(ops);
        console.log(y);
     document.getElementById("txt").innerHTML=y;
    }
    const clear=()=>{
        ops=""
        document.getElementById("txt").innerHTML=ops;
    }
    return(
        <div >
        <div>
            <button className={styles.button} onClick={(e)=>operations(e)}>7</button>
            <button className={styles.button}onClick={(e)=>operations(e)}>8</button>
            <button className={styles.button}onClick={(e)=>operations(e)}>9</button>
            <button className={styles.button}onClick={(e)=>operations(e)}>*</button>
        </div>
            <div>
                <button className={styles.button } onClick={(e)=>operations(e)}>4</button>
                <button className={styles.button}onClick={(e)=>operations(e)}>5</button>
                <button className={styles.button}onClick={(e)=>operations(e)}>6</button>
                <button className={styles.button}onClick={(e)=>operations(e)}>-</button>
            </div>
            <div>
                <button className={styles.button}onClick={(e)=>operations(e)}>1</button>
                <button className={styles.button}onClick={(e)=>operations(e)}>2</button>
                <button className={styles.button}onClick={(e)=>operations(e)}>3</button>
                <button className={styles.button}onClick={(e)=>operations(e)}>+</button>
            </div>
            <div>
                <button className={styles.button} onClick={(e)=>operations(e)}>0</button>
                <button className={styles.button}onClick={(e)=>operations(e)}>00</button>
                <button className={styles.button} onClick={()=>evaluate()}>=</button>
                <button className={styles.button}onClick={(e)=>operations(e)}>/</button>

            </div>
            <div>
                <button className={styles.button}onClick={(e)=>operations(e)} > . </button>
                <button className={styles.button}onClick={(e)=>operations(e)}>000</button>
                <button className={styles.button} onClick={clear}>AC</button>
                <button className={styles.button}onClick={(e)=>operations(e)}> √ </button>

            </div>

        </div>
    )
}

export default Button