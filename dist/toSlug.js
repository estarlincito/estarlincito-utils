const toSlug = (str) => {
    return str
        .normalize('NFD') // Remove accents
        .replace(/[\u0300-\u036f]/g, '') // Strip diacritics
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, '-') // Replace spaces with dashes
        .replace(/[^a-z0-9-]/g, ''); // Remove special characters
};
export default toSlug;
