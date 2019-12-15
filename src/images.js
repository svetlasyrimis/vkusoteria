// import * as assets from './assets';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  // debugger;
  return images;
}

const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

export default images