
import './index.css'

import { IoPeopleOutline } from "react-icons/io5"


const Header = () => {
    return(
        <div className="header-holder">
            <div className="text-section">
                <h1 className="heading">Introductions</h1>
                <p className="text">This Channel is For Company Wide Chatter</p>
            </div>
            <div className="icon-section">
                <p className="text">3/100</p>
                <IoPeopleOutline color="#7e8286" size="27"/>

            </div>
        </div>
    )
}

export default Header 