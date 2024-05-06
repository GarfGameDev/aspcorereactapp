using Microsoft.AspNetCore.Mvc;

namespace ASPNetReactApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Cloudy Sunny Showers", "Windy", "Heavy Rain", "Cloudy", "Cloudy Sunshine", "Light Rain", "Thunderstorm", "Sunny"
        };

        private static readonly double[] Humidities = new[]
        {
            0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                Time = DateTime.Now.ToString("HH:mm"),
                WindSpeed = Random.Shared.Next(0, 70),
                Humidity = Random.Shared.Next(0, 100),
                HumidityMultiplier = Humidities[Random.Shared.Next(Humidities.Length)],
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
