const student = {
  name: "Riya",
  rollNo: 101,
  subjects: {
    Math: 85,
    Science: 90,
    English: 78,
    History: 88,
    Art: 92
  }
};


const { name, rollNo, subjects } = student;
const { Math, Science, English, History, Art } = subjects;

const total = Math + Science + English + History + Art;
const percentage = (total / 500) * 100;


console.log(`Report Card for ${name} (Roll No: ${rollNo})`);
console.log('--------------------------');
console.log(`Subjects: Math: ${Math}, Science: ${Science}, English: ${English}, History: ${History}, Art: ${Art}`);
console.log(`Total Marks: ${total}`);
console.log(`Percentage: ${percentage}%`);
