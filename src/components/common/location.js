const importAll = (r) => r.keys().map(r);

const images = importAll(require.context('../../assets/location', false, /\.(png|jpe?g|svg)$/));

export default images;