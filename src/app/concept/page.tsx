// Concept page - ASCII box with WebTUI
import '@webtui/css';
import styles from './page.module.css';

export default function Concept() {
    return (
        <main className={styles.test}>
            <div box-="square" shear-="both">
                <div className="header">
                    <span is-="badge" variant-="background0">top-left</span>
                    <span is-="badge" variant-="background0">top-right</span>
                </div>
                <div id="content">
                    <p>Lorem ipsum dolor sit amet sit dolor ipsum lorem idk i dont speak french</p>
                    <div id="buttons">
                        <button box-="round">Cancel</button>
                        <button box-="round">Ok</button>
                    </div>
                </div>
                <div className="header">
                    <span is-="badge" variant-="background0">bottom-left</span>
                    <span is-="badge" variant-="background0">bottom-right</span>
                </div>
            </div>
        </main>
    );
}