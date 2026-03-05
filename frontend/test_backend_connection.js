const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testConnection() {
    const API_BASE_URL = 'https://backend-api-gray.vercel.app/api';
    console.log(`Connecting to: ${API_BASE_URL}/content/isr`);
    try {
        const response = await fetch(`${API_BASE_URL}/content/isr`);
        console.log(`Status: ${response.status}`);
        if (response.ok) {
            const data = await response.json();
            console.log('Successfully fetched content titles:', Object.keys(data.content || {}));
            console.log('Services found:', data.services?.length || 0);
        } else {
            const errorText = await response.text();
            console.error('Failed to connect:', errorText);
        }
    } catch (e) {
        console.error('Connection error:', e.message);
    }
}

testConnection();
