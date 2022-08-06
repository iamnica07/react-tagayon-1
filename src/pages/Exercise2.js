import Button from 'react-bootstrap/Button';

const Exercise2 = () => {

    return (
      <div className="text-center">
        <h1 className="mt-5 p-2">This is Exercise 2</h1>
        <Button variant="primary" type="submit" onClick={() => alert("Button 1!")}>
        Button 1
        </Button>
        <Button variant="primary" type="submit" onClick={() => alert("Button 2")}>
        Button 2
        </Button>
        <Button variant="primary" type="submit" onClick={() => alert("Button 3")}>
        Button 3
        </Button>
      </div>
    )
  };
  
  export default Exercise2;
