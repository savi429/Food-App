import { useMemo, useState } from "react";
import ItemList from "../components/ItemList";

const Component = () => {
  const [text, setText] = useState("");
  const result = useMemo(() => {
    return 2324234;
  }, []);
  const MemoizedComponent = useMemo(() => <ItemList />, []);
  const memoizedProps = useMemo(() => computeProps(props), [props]);
  return (
    <div>
      <input
        value={text}
        type="text"
        onChange={() => setText(e.target.value)}
      />
      <p>{result}</p>
      <MemoizedComponent rest={momoziedProp} />
    </div>
  );
};
export default Component;
