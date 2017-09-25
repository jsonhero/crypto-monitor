function test(strings, ...keys) {
    console.log(strings, keys)
    return strings.reduce((query, str, i) => {
        const key = keys[i] || '';
        query += `${str}${key}`;
        return query;
    }, '');
}


const query = test `INSERT INTO test VALUES (${'me'}, ${'you'})`

console.log(query);