namespace ASPNetReactApp.Server
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public string? Time { get; set; }

        public int Humidity { get; set; }

        public int WindSpeed {  get; set; }

        public double HumidityMultiplier { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }
}
