import fn from 'knex';

export const connectionInfo = {
    host: '127.0.0.1',
    port: 3306,
    user: 'ba4a4722a83d27',
    pass: '23121d15',
    database: 'heroku_8874bb0dcf40a7f'
}

const knex = fn({
    client: 'mysql2',
    connection: connectionInfo,
    pool: { min: 0, max: 10 }
});

export default knex;
