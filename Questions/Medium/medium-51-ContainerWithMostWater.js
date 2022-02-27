const maxArea = (height) => {
  let [i, j] = [0, height.length - 1];
  let maxArea = 0;

  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    maxArea = Math.max(area, maxArea);
    if (height[i] < height[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  return maxArea;
};

export default maxArea;

// [1,8,6,2,5,4,8,3,7]

// [1,1,6,2,5,4,8,3,7]

// [1, 5, 6, 2, 5, 4, 8, 3, 7]

// [0,2]

// O(n^2) approad below

// let [i, j] = [0, 1];
//   let area = 0;

//   while (i <= height.length - 2) {
//     if (height[i] >= height[j]) {
//       area = Math.max(area, height[j] * (j - i));
//     }
//     if (height[j] >= height[i]) {
//       area = Math.max(area, height[i] * (j - i));
//     }
//     if (j === height.length - 1) {
//       i += 1;
//       j = i + 1;
//     } else {
//       j += 1;
//     }
//   }

//   return area;
