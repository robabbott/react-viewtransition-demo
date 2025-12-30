import { useState, ViewTransition, startTransition } from "react";
import Video from "../../components/Video";
import { Button } from "../../components/Button";
import './CustomExample.css';

const Child = () => {
  return (
    <ViewTransition name="custom-slide">
      <Video
        id="1"
        title="First video"
        description="Video description"
        image="blue"
      />
    </ViewTransition>
  );
}

const CustomExample = () => {
  const [showItem, setShowItem] = useState(false);

  return (
    <>
      <h1>Custom Example</h1>
      <hr/>
      <div className="custom-example">
        <Button
          onClick={() => startTransition(() => setShowItem(!showItem))}
        >
          Click Me
        </Button>
        {showItem ? <Child /> : null}
      </div>
    </>
  );
}

export default CustomExample;
