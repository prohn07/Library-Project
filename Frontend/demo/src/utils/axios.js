import axios from "axios";
var url = "http://localhost:8888";

export var axiosNoAuth = axios.create({ baseURL: url });

export var axiosAuth = axios.create({ baseURL: url });

axiosAuth.interceptors.request.use((req) => {
  var token = localStorage.getItem("token");

  req.headers.Authorization = `Bearer ${token}`;

  return req;
});
