const Exercise4 = () => {
  const names = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    return (
      <div className="text-center">
        <h1 className="mt-5">This is Exercise 4</h1>
        {names.map(name => <h2>{name}</h2>)}
      </div>
    )
  };
  
  export default Exercise4;