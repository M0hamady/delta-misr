import react, { useEffect, useState } from "react";
import axios from "axios";
let requestOptions = {
  method: "GET",
  redirect: "follow",
};
let FormData = require("form-data");


export function allVisitors() {
  const [visits, setVisits] = useState(0);
  useEffect(() => {
    let config = {
      method: "get",
      url: "http://127.0.0.1:8000/visitors/visitors/",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        //   console.log(response.data.length);
        setVisits(response.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return visits;
}

export function AddVisitor(ip) {
  const [ips, setIps] = useState(ip);
  useEffect(() => {
    console.log(ip,44444)
    let data = new FormData();
    data.append("ip", ips);
    
    let config = {
      method: "post",
      url: "http://127.0.0.1:8000/visitors/visitors/",
      headers: {
        ...data.getHeaders,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

}
