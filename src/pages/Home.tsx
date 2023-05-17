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
      <h2 style={{ textAlign: 'center' }}>Contact Me</h2>
      <p style={{ textAlign: 'center' }}>Only available locally</p>
      <p style={{ textAlign: 'center' }}>Email: westphalphotography28@gmail.com</p>
      <p style={{ textAlign: 'center' }}>Instagram: <a href="https://instagram.com/cody_visions">@cody_visions</a></p>
      <h2 style={{ textAlign: 'center' }}>Packages</h2>
      <div className="card-container">
        <Card packageName='Sports' price={100} src={`https://firebasestorage.googleapis.com/v0/b/codyvisions-86fc9.appspot.com/o/images%2FDSC08664.webp?alt=media&token=e9a53ccc-7250-4757-a2ed-8d38ee718958`} orientation="vertical"/>
        <Card packageName='Sports Videos' price={100} src={`https://firebasestorage.googleapis.com/v0/b/codyvisions-86fc9.appspot.com/o/images%2FDSC08885.webp?alt=media&token=8f454d97-716d-4bb4-aa46-dd8c63cb5770`} orientation="vertical"/>
        <Card packageName='Personal 1hr' price={100} src={`https://firebasestorage.googleapis.com/v0/b/codyvisions-86fc9.appspot.com/o/images%2FDSC01632.webp?alt=media&token=6d97089a-4cfe-46e4-8da7-7f8a7b3e4219`}/>
        <Card packageName='Personal 2hr' price={100} src={`https://firebasestorage.googleapis.com/v0/b/codyvisions-86fc9.appspot.com/o/images%2FDSC01632.webp?alt=media&token=6d97089a-4cfe-46e4-8da7-7f8a7b3e4219`}/>
        <Card packageName='Group 1hr' price={100} src={`https://firebasestorage.googleapis.com/v0/b/codyvisions-86fc9.appspot.com/o/images%2FDSC01631.webp?alt=media&token=f7e6bc39-056b-49f3-aa77-a9fcac81d0ca`}/>
        <Card packageName='Group 2hr' price={100} src={`https://firebasestorage.googleapis.com/v0/b/codyvisions-86fc9.appspot.com/o/images%2FDSC01666.webp?alt=media&token=c22e4efa-ed68-4564-8c01-dc76f9769fcd`}/>
        <Card packageName='Tournaments' price={100} src={`https://firebasestorage.googleapis.com/v0/b/codyvisions-86fc9.appspot.com/o/images%2FDSC06044.webp?alt=media&token=bb2034c6-5f2b-4eb3-9092-5e9997395022`}/>
      </div>
    </div>
  );
}