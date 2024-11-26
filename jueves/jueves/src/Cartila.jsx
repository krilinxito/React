import './Cartila.css'
function Cartila(props) {
    return (
        <div className={props.style}>
            <h1 className="title">Title</h1>
            <img
                src={props.img}
                alt="shrek"
            />
            <h2 className='subtitle'>Sub title</h2>
            <h3 className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eos nobis esse quae tempore perspiciatis nostrum deserunt itaque numquam vel quaerat pariatur soluta, error doloribus, ratione, neque sapiente iste doloremque?
            </h3>
        </div>
    );
}

export default Cartila