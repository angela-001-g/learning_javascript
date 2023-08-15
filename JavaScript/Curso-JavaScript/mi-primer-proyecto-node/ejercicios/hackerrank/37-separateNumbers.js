function separateNumbers(s) {
    let lengthChange = 2
    const characters = s.match(/.{1,3}/g) ?? []
    console.log(characters)
}

separateNumbers("1234")