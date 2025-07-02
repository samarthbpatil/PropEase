import styles from './home.module.css';
import Nav from './Nav.jsx';
import penthouse from '../assets/images/penthouse.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
               
                 <img src={penthouse} alt="" />
            
                <div className={styles.rightimage}>
                    <div>
                        <i class="bi bi-house"></i>
                        <h3>Explore Properties</h3>
                    </div>
                    <div>
                        <i class="bi bi-people"></i>
                        <h3>Connect with Agents</h3>
                    </div>
                    <a href="">Explore</a>
                </div>
            </div>
        </div>

</div>

    )
}