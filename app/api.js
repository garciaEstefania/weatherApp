const BASE_API = "http://api.weatherapi.com/v1";

class api {
    async getWeather(city) {
        const formData = new FormData();
        formData.append('key','7ffba6cfd62e4d548b420218212409')
        formData.append('q',city)
        const response = await fetch(`${BASE_API}/current.json`, {
            method: 'POST',
            body: formData,
        })
        const responseData = await response.json();
        console.log(responseData)
        return responseData;
    }

    async getWeatherHistory(city) {
        const formData = new FormData();
        formData.append('key','7ffba6cfd62e4d548b420218212409')
        formData.append('q',city)
        const response = await fetch(`${BASE_API}/history.json`, {
            method: 'POST',
            body: formData,
        })
        const responseData = await response.json();
        console.log(responseData)
        return responseData;
    }
}

export default new api();