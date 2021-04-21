const dailyNotes = [
    {
        id: 1,
        subject: "javascript",
        date: "4/12/21",
        feeling: "tired",
        timeSpent: "105 minutes"
    },

    {
        id: 2,
        subject: "objects",
        date: "4/15/21",
        feeling: "very good",
        timeSpent: "62 minutes"
    }
]

const noteAboutToday = {
    id: 3,
    subject: "for..of Loops",
    date: "4/16/21",
    feeling: "ok",
    timeSpent: "77 minutes"

}

dailyNotes.push(noteAboutToday)

console.log(dailyNotes)

for (const note of dailyNotes) {
    console.log(`
    Note ${note.id}
    ${note.date}
    I learned ${note.subject}.
    I spent ${note.timeSpent} on it.
    I felt ${note.feeling}.`)
}

const searchTerm = "objects"

for (const note of dailyNotes) {
    if (note.subject === searchTerm) {
        console.log(note)
    }
}