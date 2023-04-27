import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <div>
      <div className='content'>
        {
          //sports: http://localhost:3333/images/DSC08664.webp, http://localhost:3333/images/DSC08703.webp
          //sports videos: http://localhost:3333/images/DSC08885.webp
          //personal: http://localhost:3333/images/DSC01632.webp
          //group: http://localhost:3333/images/DSC01631.webp, http://localhost:3333/images/DSC01666.webp
          //tournaments: http://localhost:3333/images/DSC06044.webp
        }
        <p>Currently building the home page. <Link to="/gallery" style={{ fontWeight: 'bold' }} className="link">Gallery</Link> is available in the top right</p>
      </div>
    </div>
  );
}