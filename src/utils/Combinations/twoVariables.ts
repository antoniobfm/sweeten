function combineTwo(variable) {
  const combined = [];
  let amount = 0;
  variable[0].content.map((v1) => {
    variable[1].content.map((v2) => {
      combined.push([
        { index: variable[0].index, content: v1 },
        { index: variable[1].index, content: v2 }
      ]);
      amount++;
    });
  });
  return {amount, combined};
}

export default combineTwo;