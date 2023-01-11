
import { useRouter } from 'next/router'
import WeatherService from '../../services/weather';

const Weather = ({ data }: any) => {
    const router = useRouter()
    const { zip } = router.query


    return (
        <div>
            <h1>Weather Page with ID: {zip} with key</h1>
            <div>{JSON.stringify(data)}</div>
            {/* {loading ? <h1>Loading!!!</h1> : <div>{`${JSON.stringify(data)}`}</div>} */}
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const data = await WeatherService.getForecast(context.params.zip);
    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default Weather;