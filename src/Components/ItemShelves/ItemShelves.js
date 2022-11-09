import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { it } from '../../animation'

import './ItemShelves.css'


const ItemShelves = (props) => {

    return (
        <motion.div variants={it}>
            <Link to={props.item.href} className={props.className}>
                <div className="img-of-item">
                    <img src={props.item.imgSrc} alt={props.item.imgAlt} />
                </div>
                <div className="item-description">
                    <h4>{props.item.itemDescription}</h4>
                    <h5>
                        <span className="price">{props.item.price}</span>
                        <span className="currency">{props.item.currency}</span>
                        <span className="week">{`/` + props.item.period}</span>
                    </h5>
                </div>
            </Link>
        </motion.div>

    )
}

export default ItemShelves