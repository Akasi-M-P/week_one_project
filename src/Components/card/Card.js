const Card = ({ imgSrc, header, text }) => {
  return (
    <>
      <div className="card">
        <img src={imgSrc} alt="sedan" width={80} height={50} />
        <h1 className="title">{header}</h1>
        <p className="para">{text}</p>
        <button className="btn">Learn more</button>
      </div>
    </>
  );
};
export default Card;
