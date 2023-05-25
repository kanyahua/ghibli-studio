import './Picture.css';

function Picture(props) {
  const { pic, onPictureClick } = props;
    return (
        <div className="picture">
          <img src={pic.thumbnailURL} onClick={() => {onPictureClick(pic)}} />
          <h4>{pic.title}</h4>
        </div>
    )
}

export default Picture;