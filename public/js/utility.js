class Request{
    constructor(url){
        this.url = url;
    }


    /* 
        This is a method named get that makes a GET request 
        to the specified URL and returns a promise that resolves 
        to a specified URL (this.url) and returns a promise that 
        resolves to an object containing the API status code and 
        the response data in JSON format.
    */
    async get() {
        // Fetch data using GET method
        const response = await fetch(this.url, { method: 'GET' });
        const jsonData = await response.json();
        return {
            apiStatus: response.status,
            json: jsonData
        };
    }
    async post(data) {
        // Fetch data using POST method
        // const response = fetch(this.url, {
            const response = await fetch(this.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const jsonData = await response.json();
        // console.log(jsonData)
        return {
            apiStatus: response.status,
            json: jsonData
        };
    }
    async put(data) {
        // Fetch data using PUT method
        const response = await fetch(this.url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const jsonData = await response.json();
        return {
            apiStatus: response.status,
            json: jsonData
        };
    }

    async delete(data) {
    const response = await fetch(this.url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    // Handle non-JSON responses
    let jsonData;
    try {
      jsonData = await response.json();
    } catch {
      jsonData = { message: response.statusText };
    }
    
    return {
      apiStatus: response.status,
      json: jsonData
    };
  }
}
    // async delete(data) {
    //     // Fetch data using DELETE method
    //     const response = await fetch(this.url, {
    //         method: 'DELETE',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     });
    //     const jsonData = await response.json();
    //     return {
    //         apiStatus: response.status,
    //         json: jsonData
    //     };
    // }
