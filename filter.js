const age=[1.12,13,123,34,56,78]

const check = (num) => {
    return num >= 18
}

const voteage = age.filter(check)

console.log(voteage);
