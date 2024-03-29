import axios from "axios";

export default class EmployeeService {
    async signIn(data) {
        try {
            const response = await axios.post("http://localhost:8092/api/employee/signIn", data);
            console.log(response);
            return response.data; // Başarılı yanıtı döndür
        } catch (error) {
            console.error(error);
            throw new Error("Kaydolma hatası: " + error.message); // Hata durumunda hata döndür
        }
    }
}
