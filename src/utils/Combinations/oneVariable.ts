function combineOne(variable) {
  const combined = [];
  let amount = 0;
  variable.content.map((item, index) => {
    combined.push([{ index: variable.index, content: item }]);
    amount++;
  });
  return {amount, combined};
}

export default combineOne;