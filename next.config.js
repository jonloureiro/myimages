module.exports = {
  basePath: process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PREFIX : ''
};
