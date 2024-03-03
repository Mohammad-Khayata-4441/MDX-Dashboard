import { DELETE, GET, POST } from "@/services/apiService"
import { CreateUserDto } from "./dto";
import { FeedBack } from "@/shared/decorators/Feedback";
export const UserEndpoints = {
    BASE: '/users',

}


export class UserApi {
    static GetUsers = async () => {
        const res = await GET<CreateUserDto[]>(UserEndpoints.BASE);
        return res.data
    }
    static CreateUser = async (payload: CreateUserDto) => {
        const res = await POST<CreateUserDto, CreateUserDto>(UserEndpoints.BASE, payload);
        return res.data
    }
    static DeleteUser = async (id: string) => {
        console.log('delete for : ',id)
        const res = await DELETE<any>(UserEndpoints.BASE + `/${id}`);
        return res.data
    }
}