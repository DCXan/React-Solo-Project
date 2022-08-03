const TextList = (props) => {
    const items = props.gifs.map((results) => {
      return <Item url={results.url} />;
    });
    return <div className="text-container">{items}</div>;
  };

  const Item = (props) => {
    return (
      <div className="gif-item">
        <img src={props.url} />
      </div>
    );
  };
  export default TextList;