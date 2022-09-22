import './banner.css';
import Foto from './Foto.js';

export default function Journal() {


    return (

            <div>
                <img className="banner" src="./images/banner.jpg" alt="banner" />
                <ul>
                    <li>
                        <Foto/>
                    </li>
                </ul>

            </div>

        );
}
