const BASE_API = "http://api.weatherapi.com/v1";

class api {
    async getWheather(country) {
        const formData = new FormData();
        formData.append('key','7ffba6cfd62e4d548b420218212409')
        formData.append('q',country)
        const response = await fetch(`${BASE_API}/current.json`, {
            method: 'POST',
            body: formData,
        })
        const responseData = await response.json();
        return responseData;
    }
}

export default new api();