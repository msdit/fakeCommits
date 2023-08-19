startDate = "7/19/2023"
// -----------------------------
list = []
d2Str = date => date.toString().split('GMT')[0] + 'BST'
save = date => list.push(d2Str(date))
prevH = () => Math.floor(Math.random() * 10) + 1
d = new Date()
sd = new Date(startDate)
while (d > sd) {
    d.setHours(d.getHours() - prevH())
    save(d)
}
list.forEach((el) => console.log(el))
