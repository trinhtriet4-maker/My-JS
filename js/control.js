let score = 7.2;

if (score >= 8.5) {
    console.log("Xếp loại: Giỏi");
} else if (score >= 6.5) {
    console.log("Xếp loại: Khá");
} else if (score >= 5) {
    console.log("Xếp loại: Trung bình");
} else {
    console.log("Xếp loại: Yếu");
}

console.log("In các số từ 1 đến 5 bằng vòng for:");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let total = 0;

for (let i = 1; i <= 5; i++) {
    total += i;
}

console.log("Tổng =", total);
