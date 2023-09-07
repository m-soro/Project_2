// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function ResortDisplay({ resort }) {
  console.log(resort);
  // function to return loaded JSX
  const loaded = () => {
    return (
      <div className="MovieDisplay container">
        <h1>{resort.basicInfo.name}</h1>
        <div className="MovieGrid grid">
          <ul className="MovieInfo">
            <h2></h2>
          </ul>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>No Data</h1>;
  };

  return resort ? loaded() : loading();
}
