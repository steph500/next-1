import styles from '../styles/Home.module.css'
import { Marks } from './data/marks'

// let data = new Marks;
let data: any;

export async function getMarks() {
    const res = await fetch("http://localhost:3000/api/hello")
    data = await res.json();
    console.log("data")
    return { props: {data}};
}

export default function Marks() {
    return ( 
        <>
        <h1>Enter your marks</h1>
        <div className={styles.grid}>
            {data.candidateName}
            <label htmlFor="maths">Maths</label><br />
            <input type="number" name="maths" id="maths" /><br />
        </div>
        <div className={styles.grid}>
            <label htmlFor="science">Science</label><br />
            <input type="number" name="science" id="science" /><br />
        </div>
        <div className={styles.grid}>
            <label htmlFor="english">English</label><br />
            <input type="number" name="english" id="english" /><br />
        </div>
        <div className={styles.grid}>
            <label htmlFor="history">History</label><br />
            <input type="number" name="history" id="history" /><br />
        </div>
        <div className={styles.grid}>
            <label htmlFor="geography">Geography</label><br />
            <input type="number" name="geography" id="geography" /><br />
        </div>
        <div className={styles.grid}>
            <label htmlFor="art">Art</label><br />
            <input type="number" name="art" id="art" /><br />
        </div>
        <div className={styles.grid}>
            <label htmlFor="music">Music</label><br />
            <input type="number" name="music" id="music" /><br />
        </div>
        <div className={styles.grid}>
            <label htmlFor="pe">PE</label><br />
            <input type="number" name="pe" id="pe" /><br />
        </div>
        <div className={styles.grid}>
            <label htmlFor="computing">Computing</label><br />
            <input type="number" name="computing" id="computing" /><br />
        </div>
        <div className={styles.grid}>
            <label htmlFor="languages">Languages</label><br />
            <input type="number" name="languages" id="languages" /><br />
        </div>
        </>
     );
}