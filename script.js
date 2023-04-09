const students = [
    {
        name: "João",
        n1: 5,
        n2: 7,
    },
    {
        name: "Laura",
        n1: 8,
        n2: 6,
    },
    {
        name: "Diego",
        n1: 9,
        n2: 7,
    },
    {
        name: "Julia",
        n1: 10,
        n2: 9,
    },
]

function media (n1, n2) {
    return ((n1 + n2)/2)
} 

function printStudentMedia (student) {
    if (media > 6) {
        alert (`A média do(a) aluno(a) ${student.name} é: ${media(student.n1, student.n2)}.\nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
        alert (`A média do(a) aluno(a) ${student.name} é: ${media(student.n1, student.n2)}.\nNão foi dessa vez, ${student.name}! Tente novamente!`)
    }
}

for (let student of students) {
    printStudentMedia(student)
}

