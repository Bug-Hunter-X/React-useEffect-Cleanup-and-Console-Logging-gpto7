```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to log to the console in useEffect
    console.log("Component rendered with count:", count);
    // Correct way to handle cleanup in useEffect. Add return to clean up when component unmounts
    return () => {
      console.log('Component unmounted');
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```