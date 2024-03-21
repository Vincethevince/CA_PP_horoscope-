const mainMessage = 'Your topics of the day:\n';
const topicPool = ['Love','Money','Job','Family and Friends'];

const topicGenerator = ()=>{
    let topicA = topicPool[Math.floor(Math.random()*4)];
    let topicB = topicA;
    while (topicB === topicA) topB = topicPool[Math.floor(Math.random()*4)]
    return [topicA,topicB];
}

const timeGenerator = ()=>{
    let ran = Math.floor(Math.random()*4);
    const timeArr = ['Today', 'Your morning', 'The whole week', 'This day'];
    return timeArr[ran];
}

const verbGenerator = ()=>{
    let ran = Math.floor(Math.random()*5);
    const timeArr = ['is', 'will be', 'should be', 'won\'t be','should bring you'];
    return timeArr[ran];
}

const moneyGenerator = ()=> {
    let ran = Math.floor(Math.random()*5);
    const sentenceArr = ['your opportunity!', 'your lucky time!','an amazing situation.','filled with possibilities!','something new!'];
    return sentenceArr[ran];
}

const emotionalGenerator = ()=>{
    let ran = Math.floor(Math.random()*5);
    const sentenceArr = ['it\'s okay to slow down!', 'you should take your time!','you could help others.','your loved ones may need you','you could be open for others'];
    return sentenceArr[ran];
}

const topicSentenceMatch = topic=>{
    if (topic === 'Love' || topic ===  'Family and Friends'){
        return timeGenerator()+' '+emotionalGenerator();
    }
    else if (topic === 'Money' || topic === 'Job'){
        return timeGenerator()+' '+ verbGenerator()+' '+moneyGenerator();
    }
    else{
        console.log('Unknown topic chosen');
    }
}

const outputGenerator = ()=>{
    let output = mainMessage;
    let topics = topicGenerator()
    topics.forEach(topic => {
        mainMessage+= topic+ ': ';
        mainMessage+=topicSentenceMatch()+'\n';
    })
    console.log(mainMessage);
}