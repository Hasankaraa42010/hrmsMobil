import axios from "axios";

const localHost="10.196.17.132";
const urlapi="http://"+localHost+":";
export default class AdminService {

    async login(data) {
        return axios({
          method:'POST',
         
          url:urlapi+"8092/api/admin/login?email="+data.email+"&password="+data.password,
          data:data
        }).then(function(response){
          return response.data
        }).catch(function(error){
          
          console.log(error);
        })
      }
      async getAdmin(email) {
        return axios({
          method:'GET',
          
          url:urlapi+"8092/api/admin/getAdmin?email="+email,
          data:email
        }).then(function(response){
          return response.data
        }).catch(function(error){
          
          console.log(error);
        })
      }
}
