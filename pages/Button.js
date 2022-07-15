import styles from "../styles/layout.module.css";

const Button=() =>{
    let ops = "";

    const operations=(n)=>{
        ops=ops+n.target.innerHTML;
        console.log(ops);
        document.getElementById("txt").innerHTML=ops;
    }
    const evaluate=()=>{
        if (ops[0] =="√"){
            square_root(ops[1]);
        }
        else {
            var y = eval(ops);
            var z = (y+"").slice(0,5);
            console.log(z);
            document.getElementById("txt").innerHTML = z;
        }
    }
    const clear=()=>{
        ops=""
        document.getElementById("txt").innerHTML=ops;
    }
    const square_root=(n)=>{
         var ans = Math.sqrt(n.target.innerHTML)
        document.getElementById("txt").innerHTML=ans;
    }
    return(
        <div >
        <div>
            <button className={styles.button}onClick={(e)=>operations(e)}>7</button>
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
                <button className={styles.button}onClick={(e)=>operations(e)}>√ </button>

            </div>

        </div>
    )
}
export default Button