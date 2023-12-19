function shakeMagic8Ball() {

    const question = prompt('Ask the Magic 8-Ball a question:');

    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //FIX THIS
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, color;

    switch (randomNumber) {
        case 0:
            answer = "Yes";
            color = "text-success";
            break;
        case 1:
            answer = "No";
            color = "text-danger";
            break;
        case 2:
            answer = "Ask again later";
            color = "text-secondary";
            break;
        case 3:
            answer = "Maybe";
            color = "text-warning";
            break;
        case 4:
            answer = "Cannot predict now";
            color = "text-muted";
            break;
        case 5:
            answer = "Don't count on it";
            color = "text-danger";
            break;
        case 6:
            answer = "Most likely";
            color = "text-success";
            break;
        case 7:
            answer = "Outlook not so good";
            color = "text-danger";
            break;
        default:
            break;
    }

    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;

}
