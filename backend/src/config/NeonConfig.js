const { Pool } = require('pg');

class NeonConfig {
    static getPool() {
        if (!this.pool) {
            const connectionString = process.env.DATABASE_URL;
            if (!connectionString) {
                console.warn('DATABASE_URL is not set in environment. Neon DB connection will fail.');
            }

            this.pool = new Pool({
                connectionString,
                ssl: {
                    rejectUnauthorized: false
                }
            });

            this.pool.on('error', (err) => {
                console.error('Unexpected error on idle Neon PostgreSQL client', err);
                process.exit(-1);
            });
        }
        return this.pool;
    }

    /**
     * Helper method to execute a query easily
     */
    static async query(text, params) {
        const pool = this.getPool();
        const start = Date.now();
        try {
            const res = await pool.query(text, params);
            const duration = Date.now() - start;
            console.log('Executed query', { text, duration, rows: res.rowCount });
            return res;
        } catch (error) {
            console.error('Error executing query', { text, error });
            throw error;
        }
    }
}

module.exports = NeonConfig;
