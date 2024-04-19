import { apiService } from "./api.service"
import { BASE_API_URL } from "../constants/commonStrings"

const SportService = () => {

    const getPlayers = (onSuccess?: Function, onError?: Function) => {
        return apiService({
            method: 'GET',
            url: BASE_API_URL + '/players',
            onSuccess,
            onError,
        })
    }

    const addPlayer = (onSuccess?: Function, onError?: Function) => {
        return apiService({
            method: 'GET',
            url: BASE_API_URL + '/players',
            onSuccess,
            onError,
        })
    }

    const editPlayer = (onSuccess?: Function, onError?: Function) => {
        return apiService({
            method: 'GET',
            url: BASE_API_URL + '/players',
            onSuccess,
            onError,
        })
    }

    const deletePlayer = (onSuccess?: Function, onError?: Function) => {
        return apiService({
            method: 'GET',
            url: BASE_API_URL + '/players',
            onSuccess,
            onError,
        })
    }

    return {
        getPlayers,
        addPlayer,
        editPlayer,
        deletePlayer,
    }
}

export default SportService;