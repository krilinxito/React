import './Card.css'
import Cartila from './Cartila.jsx'
import Cartila1 from './Cartila1.jsx'
import Cartila2 from './Cartila2.jsx'
function Cards()
{
    return(
        <div className='card-container'>
            <Cartila />
            <Cartila1 />
            <Cartila2 />
        </div>
    )
}
export default Cards