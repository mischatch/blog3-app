

export const postsShaper = posts => {
  let arr = [];
  (Object.keys(posts)).forEach((i) => {
    let obj = {};
    obj[i] = posts[i];
    arr.push(obj);
  });
  return arr;
};
