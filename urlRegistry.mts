const registry = {
  localhost: {
    userApiUrl: "",
    spotApiUrl: "",
    sessionApiUrl: "",
    forecastApiUrl: "",
    imageApi: "",
    //authApi:"http://localhost:3500"
  },
  devloppmentServer: {
    authApi: "http://192.168.1.39:3500",
    imageApi: "http://192.168.1.39:3250",
    userApiUrl: "http://192.168.1.39:3750",
  }
};
export default registry;