import { Link } from "react-router-dom";
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <div className='content'>
      {
        //sports: http://localhost:3333/images/DSC08664.webp
        //sports videos: http://localhost:3333/images/DSC08885.webp
        //personal: http://localhost:3333/images/DSC01632.webp
        //group: http://localhost:3333/images/DSC01631.webp, http://localhost:3333/images/DSC01666.webp
        //tournaments: http://localhost:3333/images/DSC06044.webp
      }
      <div className="container">
        <div className="card-container">
          <Card packageName='Sports' price={100} src='http://localhost:3333/images/DSC08664.webp' orientation="vertical"/>
          <Card packageName='Sports Videos' price={100} src='http://localhost:3333/images/DSC08885.webp' orientation="vertical"/>
          <Card packageName='Personal 1h' price={100} src='http://localhost:3333/images/DSC01632.webp'/>
          <Card packageName='Personal 2h' price={100} src='http://localhost:3333/images/DSC01632.webp'/>
          <Card packageName='Group 1h' price={100} src='http://localhost:3333/images/DSC01631.webp'/>
          <Card packageName='Group 2h' price={100} src='http://localhost:3333/images/DSC01666.webp'/>
          <Card packageName='Tournaments' price={100} src='http://localhost:3333/images/DSC06044.webp'/>
          </div>
        </div>
      </div>
  );
}