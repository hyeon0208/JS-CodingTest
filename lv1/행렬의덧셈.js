function solution(arr1, arr2) {
    var answer = [[]];
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = [];
        console.log(answer);
        for (let j = 0; j < arr1[i].length; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
        console.log(answer);
    }
    return answer;
}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));
console.log(solution([[1],[2]], [[3],[4]]));

