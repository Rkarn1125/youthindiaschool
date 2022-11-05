import "../index.css";
const Card = ({ owner, imageUrl }) => {
  return (
    <div class="mainhead overflow-hidden  shadow-lg m-2">
      <img class="imgmain " src={imageUrl} />

      <div class="maintext">
        <h1>{owner}</h1>
      </div>
    </div>
  );
};
export default Card;
