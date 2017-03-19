import request from 'request';

export function login(username, password, rememberMe,callback) {
    let reqBody = {
            "Username": username,
            "Password": password,
            "RememberMe": rememberMe,
        };

    request('Your API url', {
        method: 'POST',
        body: reqBody,
        json: true,
        headers: {'Content-Type': 'application/json'},
    }, function successCallback(error, response, body) {
        callback(body);
    });
}
