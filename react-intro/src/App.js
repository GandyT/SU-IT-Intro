import { useState, useEffect } from "react"

// You can use this component as if it were an HTML tag.
function Description({ count }) {
  return (
    <div>
      This is a description component. I can reuse it many times. It also accepts variables. {count}
    </div>
  )
}

function App() {
  let [count, setCount] = useState(0)

  useEffect(() => {
    console.log("The first load of the component")
  }, [])

  useEffect(() => {
    console.log(`Count has been updated! It is now ${count}`)
  }, [count])

  return (
    <div>
      <Description count={1} />
      <Description count={2} />
      <Description count={3} />
      <div>{count}</div>
      <button onClick={() => { setCount(count+1) }}>CLICK ME</button>
    </div>
  );
}

export default App;
