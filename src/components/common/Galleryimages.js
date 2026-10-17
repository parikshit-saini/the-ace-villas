const importAll = (g) => g.keys().map(g);

const gallery = importAll(require.context('../../assets/Gallery', false, /\.(png|jpe?g|svg|webp)$/));

export default gallery;