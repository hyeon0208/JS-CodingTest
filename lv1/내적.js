function solution(a, b) {
    var answer = 0;
    for (let i =0; i < a.length; i++) {
        let x = a[i] * b[i]
        answer += x;
    }


    return answer;
}

console.log(solution([1,2,3,4], [-3,-1,0,2]));
console.log(solution([-1,0,1], [1,0,-1]));