import { useParams } from "react-router-dom";
import videos from "../data/videos";

function VideoPlayer() {

  const { slug, lessonId } = useParams();

  const video =
    videos[slug]?.[lessonId];

  if (!video)
    return <h2>No Video Available</h2>;

  return (

    <iframe
      width="100%"
      height="600"
      src={video}
      title="Lesson Video"
      allowFullScreen
      style={{
        borderRadius: "15px",
        border: "none",
      }}
    />

  );

}

export default VideoPlayer;