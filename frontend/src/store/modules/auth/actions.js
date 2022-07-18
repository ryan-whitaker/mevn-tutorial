export default {
    async auth(context, payload) {

        let url = `http://localhost:3000/users/${payload.mode}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                name: payload.name
            })
        });        

        if (!response.ok) {
            const error = 'Authentication failed. Check your username and password.';
            return error;
        } else {
            const responseData = await response.json();
            context.commit('setUser', {
                userId: responseData.user._id,                
                token: responseData.token,
                userName: responseData.user.name,                
            });
            localStorage.setItem('userId', responseData.user._id);
            localStorage.setItem('token', responseData.token);
            localStorage.setItem('userName', responseData.user.name);            
            return null;
        };
    },
    autoLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const userName = localStorage.getItem('userName');

        context.commit('setUser', {
            token: token,
            userId: userId,
            userName: userName
        });
    },
    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');

        context.commit('setUser', {
            token: null,
            userId: null,
            userName: null
        });        
    },
};