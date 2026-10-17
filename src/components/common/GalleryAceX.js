const importAll = (r) => r.keys().map(r);

const AceGalleryImages = importAll(require.context('../../assets/Gallery/ace/', false, /\.(png|jpe?g|svg)$/));

export default AceGalleryImages;