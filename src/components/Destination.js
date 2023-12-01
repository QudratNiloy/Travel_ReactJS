import Place1 from "../assets/1.jpg";
import Place2 from "../assets/2.jpg";
import Place3 from "../assets/5.jpg";
import Place4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Taal volcancano, Batangas"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi asperiores a pariatur error natus veniam, deleniti similique possimus suscipit expedita facere hic quis itaque dolore iste neque magni libero, iure odio. Obcaecati voluptatibus eveniet quas dignissimos fugiat quaerat voluptatum! Reprehenderit sapiente impedit consequatur cumque! Enim laborum blanditiis natus assumenda?"
        img1={Place1}
        img2={Place2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt.Duguldul, Batangas"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi asperiores a pariatur error natus veniam, deleniti similique possimus suscipit expedita facere hic quis itaque dolore iste neque magni libero, iure odio. Obcaecati voluptatibus eveniet quas dignissimos fugiat quaerat voluptatum!"
        img1={Place3}
        img2={Place4}
      />
    </div>
  );
}

export default Destination;
