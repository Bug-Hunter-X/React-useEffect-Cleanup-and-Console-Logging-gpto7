```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Component rendered with count:', count);
    }, 1000);

    return () => {
      clearInterval(intervalId);
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