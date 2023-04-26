export const Home = () => {
  return (
    <div>
      <div className='header'>
        <h1>Cody Visions</h1>
        <h2>Home</h2>
      </div>
      <div className='container'>
        <h3>Welcome to Cody Visions!</h3>
        <p>
          This is a simple image gallery app that uses a React frontend and a
          Flask backend. The frontend is hosted on AWS Amplify and the backend
          is hosted on AWS Elastic Beanstalk. The frontend and backend are
          connected by a REST API. The frontend is written in TypeScript and
          uses React Router for routing and React Query for data fetching. The
          backend is written in Python and uses Flask for routing and SQLAlchemy
          for the database. The database is a PostgreSQL database hosted on AWS
          RDS. The frontend and backend are both deployed using GitHub Actions.
        </p>
        <p>
          The frontend GitHub repository can be found{' '}
        </p>
      </div>
    </div>
  );
}