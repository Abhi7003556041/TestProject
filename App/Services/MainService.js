
import Storage from "../Utils/Storage";


const getAccount = async () => {
    return Storage.get('account');
}

const setAccount = async (data)=> {
    return Storage.set('account', data);
}



const MainService = {
    getAccount,
    setAccount,
}

export default MainService;