import { Card } from "../components/Card";

export const Home = () => {
  const url = process.env.NODE_ENV === 'production' ? 'https://codyvisions.com' : 'http://localhost:3333';
  return (
    //sports: http://localhost:3333/images/DSC08664.webp
    //sports videos: http://localhost:3333/images/DSC08885.webp
    //personal: http://localhost:3333/images/DSC01632.webp
    //group: http://localhost:3333/images/DSC01631.webp, http://localhost:3333/images/DSC01666.webp
    //tournaments: http://localhost:3333/images/DSC06044.webp
    <div className="content">
      <h1 style={{ textAlign: 'center' }}>Cody Visions Photography</h1>
      <h2 style={{ textAlign: 'center' }}>Packages</h2>
      <div className="card-container">
        <Card packageName='Sports' price={100} src={`${url}/images/DSC08664.webp`} orientation="vertical"/>
        <Card packageName='Sports Videos' price={100} src={`${url}/images/DSC08885.webp`} orientation="vertical"/>
        <Card packageName='Personal 1hr' price={100} src={`${url}/images/DSC01632.webp`}/>
        <Card packageName='Personal 2hr' price={100} src={`${url}/images/DSC01632.webp`}/>
        <Card packageName='Group 1hr' price={100} src={`${url}/images/DSC01631.webp`}/>
        <Card packageName='Group 2hr' price={100} src={`${url}/images/DSC01666.webp`}/>
        <Card packageName='Tournaments' price={100} src={`${url}/images/DSC06044.webp`}/>
      </div>
      <h2 style={{ textAlign: 'center' }}>Contact Me</h2>
      <p style={{ textAlign: 'center' }}>Only available locally</p>
      <p style={{ textAlign: 'center' }}>Email: info@codyvisions.com</p>
      <p style={{ textAlign: 'center' }}>Phone: 1-555-555-5555</p>
    </div>
  );
}