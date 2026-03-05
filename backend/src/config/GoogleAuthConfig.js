const { google } = require('googleapis');
const path = require('path');

class GoogleAuthConfig {
    static getAuth() {
        try {
            const keyPath = path.resolve(__dirname, '../../serviceAccountKey.json');
            const auth = new google.auth.GoogleAuth({
                keyFile: keyPath,
                scopes: [
                    'https://www.googleapis.com/auth/spreadsheets',
                    'https://www.googleapis.com/auth/drive'
                ],
            });
            return auth;
        } catch (error) {
            console.error('Failed to initialize Google Auth:', error.message);
            throw error;
        }
    }
}

module.exports = GoogleAuthConfig;
