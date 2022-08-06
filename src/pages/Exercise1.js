import Button from 'react-bootstrap/Button';

const Exercise1 = () => {

    return (
      <div className="text-center">
        <h1 className="mt-5">This is Exercise 1</h1>
        <Button variant="primary" type="submit" onClick={() => alert("Clicked!")}>
        Click Me!
        </Button>
      </div>
    )
  };
  
  export default Exercise1;
