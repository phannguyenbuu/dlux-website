// GB.js
let _updateInput = null; // biến lưu hàm updateInput nội bộ

export const GB = {
  setUpdateInput(fn) {
    _updateInput = fn;
  },
  setInput1(value) {
    if (_updateInput) _updateInput("input1", value);
    else console.warn("updateInput chưa được bind");
  },
  setInput2(value) {
    if (_updateInput) _updateInput("input2", value);
  },
  setInput3(value) {
    if (_updateInput) _updateInput("input3", value);
  }
};
