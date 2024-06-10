import axios from "axios";

const localHost = "192.168.1.50";
const urlapi = "http://" + localHost + ":";
export default class AdminService {
  async login(data) {
    return axios({
      method: "POST",

      url:
        urlapi +
        "8092/api/admin/login?email=" +
        data.email +
        "&password=" +
        data.password,
      data: data,
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async addJob(data) {
    return axios({
      method: "POST",
      url:
        urlapi +
        "8092/api/admin/addJob?adminId=" +
        data.adminId +
        "&jobAdvertisementName=" +
        data.name +
        "&cityName=" +
        data.city +
        "&area=" +
        data.area +
        "&salary=" +
        data.salary +
        "&jobName=" +
        data.jobName,
      data: data,
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async getAdminAdvertisement(adminId) {
    return axios({
      method: "GET",

      url: urlapi + "8092/api/admin/getAllByAdminId?adminId=" + adminId,
      data: adminId,
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async getAdmin(email) {
    return axios({
      method: "GET",

      url: urlapi + "8092/api/admin/getAdmin?email=" + email,
      data: email,
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async getAppFromJobId(advertisementId) {
    return axios({
      method: "GET",
      url:
        urlapi +
        "8092/api/admin/getAllApplicationForJobAdvertisementId?id=" +
        advertisementId,
      data: advertisementId,
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async addJobsEmployee(adminId,employeeId,jobAdvertisementId) {
    return axios({
      method: "POST",
      url:
        urlapi +
        
        "8092/api/admin/addJobs?adminId=" +
        adminId +
        "&employeeId=" +
        employeeId +
        "&jobadvertisementId=" +
        jobAdvertisementId ,
       
     
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async getWorkers(adminId) {
    return axios({
      method: "GET",
      url:
      
        urlapi +
        "8092/api/admin/findByAdminIdWithWorkers?adminId=" +
        adminId,
      data: adminId,
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  
}
