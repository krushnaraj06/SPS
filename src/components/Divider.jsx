const Divider = () => (
    <div style={{ borderTop: "2px solid #ddd", margin: "20px 0" }}></div>
  );
  
  function App() {
    return (
      <div>
        <h1>Title</h1>
        <Divider />
        <p>Content below the divider</p>
      </div>
    );
  }

  export default Divider;