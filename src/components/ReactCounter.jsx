import { useState } from "react";

export default function ReactCounter() {
  const [count, setCount] = useState(0);

  return (
    <section className="react-counter" aria-labelledby="react-counter-title">
      <h2 id="react-counter-title">React Island</h2>
      <p>Interactive demos will use React components inside MDX.</p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Count {count}
      </button>
    </section>
  );
}
