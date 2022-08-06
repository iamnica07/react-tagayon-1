const Exercise4 = () => {
  const names = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    return (
      <>
      <div className="text-center">
        <h1 className="mt-5">This is Exercise 4</h1>
        </div>
        <div>
          {names.map(name => <ul><li><h4>{name}</h4></li></ul>)}
      </div>
      </>
    )
  };
  
  export default Exercise4;
