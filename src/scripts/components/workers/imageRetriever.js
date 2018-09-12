export default function importAll(r) {
  let files = [];
  // eslint-disable-next-line
  r.keys().map((item, index) => {
    files[index] = {
      id: index,
      src: r(item),
      path: item,
      name: item.substring(item.lastIndexOf("/") + 1, item.length)
    };
  });
  return files;
}
