function Button() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Greet Me!</button>
      </form>
    );
  }