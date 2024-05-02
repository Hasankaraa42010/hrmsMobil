import axios from "axios";

const localHost="10.196.17.132";
const urlapi="http://"+localHost+":";

export default class EmployeeService {
   
    async signIn(data) {
      return axios({
        method:'POST',
        url:urlapi+"8092/api/employee/signIn",
        data:data
      }).then(function(response){
        return response.data
      }).catch(function(error){
        
        console.log(error);
      })
    }
     //8092/api/employee/login?email=hsn33y2%40gmail.com&password=1234562
    async login(data) {
        return axios({
          method:'POST',
          url:urlapi+"8092/api/employee/login?email="+data.email+"&password="+data.password,
          data:data
        }).then(function(response){
          return response.data
        }).catch(function(error){
          
          console.log(error);
        })
      }
      async getEmployee(email) {
        return axios({
          method:'GET',
          
          url:urlapi+"8092/api/employee/getEmployee?email="+email,
          data:email
        }).then(function(response){
          return response.data
        }).catch(function(error){
          
          console.log(error);
        })
      }
}
