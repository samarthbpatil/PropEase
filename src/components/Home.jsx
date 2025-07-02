import styles from './home.module.css';
import Nav from './Nav.jsx';
import penthouse from '../assets/images/penthouse.png';
export default function Home(){
    return (
        <div>
        <Nav/>
        <div className={styles.tagline}>

            <h1>Capture. Upload. Connect</h1>
            <h4>Smarter Property Sharing Made Simple.</h4>
            <div className={styles.homeimg}>
                <div className={styles.leftimage}>
                    <h4>start you journey towards ownership today!</h4>
                    <button>get started</button>
                </div>
                <div className={styles.image}>
                 <img src={penthouse} alt="" />
                 </div>
                <div>
                    <div></div>
                    <div></div>
                    <a href="">Explore</a>
                </div>
            </div>
        </div>

</div>

    )
}