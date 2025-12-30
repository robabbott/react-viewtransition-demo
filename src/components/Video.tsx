import './Video.css'

type VideoProps = {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Video = (video: VideoProps) => {
  return (
    <div className="video">
      <div className="link">
        <div className={`thumbnail ${video.image}`} />
        <div className="info">
          <div className="video-title">{video.title}</div>
          <div className="video-description">{video.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Video;
