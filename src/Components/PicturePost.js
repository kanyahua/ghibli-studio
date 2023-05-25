import pictures from '../data/pictures';
import './PicturePost.css';

function PicturePost(props) {
    const { pictures, onBgClick } = props;
    return (
        <div className="piture-post">
            <div className="picture-post-bg" onClick={onBgClick}/>
            <div className="picture-post-content">
                <img src={pictures.thumbnailURL} />
                <h4>{pictures.title}</h4>
            </div>
        </div>
    )
}

export default PicturePost;