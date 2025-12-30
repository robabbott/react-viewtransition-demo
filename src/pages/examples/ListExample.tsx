import {
  ViewTransition,
  useState,
  startTransition
} from "react";
import Video from "../../components/Video";
import { Button } from "../../components/Button";

const videos = [
  {
    id: '1',
    title: 'First video',
    description: 'Video description',
    image: 'blue',
  },
  {
    id: '2',
    title: 'Second video',
    description: 'Video description',
    image: 'red',
  },
  {
    id: '3',
    title: 'Third video',
    description: 'Video description',
    image: 'green',
  },
  {
    id: '4',
    title: 'Fourth video',
    description: 'Video description',
    image: 'purple',
  }
]

const ListExample = () => {
  const [orderedVideos, setOrderedVideos] = useState(videos);
  const reorder = () => {
    startTransition(() => {
      setOrderedVideos((prev) => {
        return [...prev.sort(() => Math.random() - 0.5)];
      });
    });
  };

  return (
    <>
      <h1>List Example</h1>
      <hr />
      <Button onClick={reorder}>🎲</Button>
      <div className="listContainer">
        {orderedVideos.map((video) => {
          return (
            <ViewTransition key={video.title}>
              <Video
                id={video.id}
                title={video.title}
                description={video.description}
                image={video.image}
              />
            </ViewTransition>
          );
        })}
      </div>
    </>
  );
}

export default ListExample;
