function sanitizeQuery(strings, ...keys) {
    return strings.reduce((query, str, i) => {
        const key = keys[i] || '';
        query += `${str}${key}`;
        return query;
    }, '');
}

module.exports = { sanitizeQuery };