const url = 'https://jsonplaceholder.typicode.com/posts'
const data = {
  a: 10,
  b: 20,
};
axios
  .post(url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
  .then(({data}) => {
    console.log(data);
});