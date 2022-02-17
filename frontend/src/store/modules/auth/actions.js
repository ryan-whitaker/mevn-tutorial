export default {
    async login(context, payload) {
        return await context.dispatch('auth', {
            ...payload,
            mode: 'login'
        });
    },
    async signup(context, payload) {
        return await context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        });
    },
    async auth(context, payload) {
        const mode = payload.mode;

        let action;
        if (mode === 'signup') {
            action = 'signUp';
        } else if (mode === 'login') {            
            action = 'login';
        }

        let url = `${process.env.VUE_APP_EXPRESS_ROUTE}/users/${action}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                name: payload.name
            })
        });
        const responseData = await response.json();

        if (!response.ok) {            
            const error = new Error(responseData.message || 'Failed to authenticate. Check your username and password and try again.');
            throw error;
        } else {
            
            context.commit('setUser', {
                userId: responseData.user._id,                
                token: responseData.idToken,
                userName: responseData.user.name,                
            });

            localStorage.setItem('userId', responseData.user._id);
            localStorage.setItem('token', responseData.idToken);
            localStorage.setItem('userName', responseData.user.name);           
        }        
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