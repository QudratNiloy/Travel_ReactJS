import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations from Google Maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip In Italy"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi asperiores a pariatur error natus veniam, deleniti similique possimus suscipit expedita facere hic quis itaque dolore iste neque magni libero, iure odio. Obcaecati voluptatibus eveniet quas dignissimos fugiat quaerat voluptatum!"
        />

        <TripData
          image={Trip2}
          heading="Trip In Indonesia"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi asperiores a pariatur error natus veniam, deleniti similique possimus suscipit expedita facere hic quis itaque dolore iste neque magni libero, iure odio. Obcaecati voluptatibus eveniet quas dignissimos fugiat quaerat voluptatum! Reprehenderit sapiente impedit consequatur cumque! Enim laborum blanditiis natus assumenda?"
        />

        <TripData
          image={Trip3}
          heading="Trip In India"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi asperiores a pariatur error natus veniam, deleniti similique possimus suscipit expedita facere hic quis itaque dolore iste neque magni libero, iure odio."
        />
      </div>
    </div>
  );
}

export default Trip;
