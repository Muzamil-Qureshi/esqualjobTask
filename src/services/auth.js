import { View } from "react-native";
import { emailVelidations } from "../validations/validatios"
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
export const signUp = async (email, password, confirmPassword, name) => {
    let emailResult = await emailVelidations(email)
    return new Promise(async (resolve, reject) => {
        if (!emailResult) {
            resolve('Email Type Must Be Email');
        }
        if (password === '') {
            resolve('Password Empty');
        }
        if (password !== confirmPassword) {
            resolve('Password not Equal');
        }
        if (name === '') {
            resolve('Name is empty');
        }

        axios({
            method: 'post',
            url: 'https://dummyjson.com/users/add',
            data: {
                email: email,
                password: password,
                username: name,
            },
            headers: {
                'Content-Type': 'text/plain'
            },
        })
            .then(function (response) {
                if (response.status == '200') {
                    resolve("success")
                }
            })
            .catch(function (error) {
                resolve(JSON.stringify(error))
            })
    });
}

export const LogIn = async (userName, password) => {
    return new Promise(async (resolve, reject) => {
        if (userName === '') {
            resolve('User Name Empty');
        }
        if (password === '') {
            resolve('Password Empty');
        }

        axios({
            method: 'post',
            url: 'https://dummyjson.com/auth/login',
            data: {
                username: 'kminchelle',
                password: '0lelplR'
            },
            headers: {
                'Authorization': 'Bearer /* YOUR_TOKEN_HERE */',
                'Content-Type': 'application/json'
            },

        })
            .then(function (response) {
                if (JSON.stringify(response.status) == '200') {
                    //  console.log(JSON.stringify(response.data));
                    AsyncStorage.setItem(
                        'userdetails',
                        JSON.stringify({
                            token: response.data.token,
                            image: response.data.image,
                            name: response.data.username
                        })
                    )
                    resolve("success")
                }

            })
            .catch(function (error) {
                console.log(error)
                resolve("Something wrong")
            })
    });
}