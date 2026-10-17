const importAll = (r) => r.keys().map(r);

const gallerygala = importAll(require.context('../../assets/Gallery/gala/', false, /\.(png|jpe?g|svg)$/));

export default gallerygala;