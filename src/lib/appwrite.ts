import { Client, Databases, ID } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('http://localhost:8080/v1')
    .setProject('678bb0aa002c051d5dcf');

export const databases = new Databases(client);


export function createDocument(data : object){
    const promise = databases.createDocument(
        '678bb2bc0003f298bbf4',
        '678bb2e2001d0fd5ff50',
        ID.unique(),
        data
    );
    
    promise.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}
