// 1
// 2 3
// 4 5 6
// 7 8 9 10

function pattern1to10(rows) {
    let count = 1;
    let j = 1;

    for (let i = 1; i<=rows; i++) {
        j = 1;
        while (j <= i) {
            process.stdout.write(String(count++)+" ");
            j++;
        }
        console.log();
    }
}

pattern1to10(4);
