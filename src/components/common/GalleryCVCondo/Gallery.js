const importAll = (r) => r.keys().map(r);

const Acecondo = importAll(require.context('../../../assets/Gallery/condo/', false, /\.(png|jpe?g|svg)$/));

export default Acecondo;