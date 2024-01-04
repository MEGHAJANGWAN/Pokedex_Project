import './Pokemon.css';

function Pokemon({ name, image }) {
    return(
        <div>
            <div className='pokemon'>{name}</div>
            <div className='pokemon-name'>
                <img className='pokemon-image' src={image} />
            </div>
        </div>

    )
}
export default Pokemon;