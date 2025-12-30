import { useState, ViewTransition, startTransition } from "react";
import { Button } from "../../components/Button";
import './BasicExample.css';
import Video from "../../components/Video";

const Child = () => {
  return (
    <ViewTransition>
      <Video
        id="1"
        title="First video"
        description="Video description"
        image="blue"
      />
    </ViewTransition>
  );
}

const BasicExample = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <>
      <h1>Basic Example</h1>
      <hr/>
      <div className="basic-example">
        <div className="example-block">
          <h3>Disabled</h3>
          <Button
            onClick={() => setShow(!show)}
          >
            Click Me
          </Button>
          {show ? <Child /> : null}
        </div>

        <div className="example-block">
          <h3>Enabled</h3>
          <Button
            onClick={() => startTransition(() => setShow2(!show2))}
          >
            Click Me
          </Button>
          {show2 ? <Child /> : null}
        </div>
      </div>
    </>
  )
}

export default BasicExample;
