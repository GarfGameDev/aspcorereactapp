import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <h1>Weather Forecast</h1>
            <p>This app is a work in progress showcase of using React with ASP.net and works off of the base project that you can create using visual studio</p>
            <Button href="/news" variant="primary" size="lg">
                Get Forecast
            </Button>{' '}
        </div>
    )
}

export default Home;