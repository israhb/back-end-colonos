import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceGeneralService {
    //regresa fecha actual formato yyyy-mm-dd
    getDateNowAMD(){
        const u = new Date();
        return `${u.getUTCFullYear()}-${('0'+(u.getUTCMonth()+1)).slice(-2)}-${('0'+u.getUTCDate()).slice(-2)}`;
    }

    //regresa fecha actual formato dd-mm-yyyy HH:mm
    getHourNow(){
        const u = new Date();
        const minutes = u.getMinutes() < 10 ? '0'+u.getMinutes() : u.getMinutes();
        const hours = u.getHours() < 10 ? '0'+u.getHours() : u.getHours();
        return `${hours}:${minutes}:00`;
    }
}
