const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'token'

client.login(token);
console.log('test')
client.on('ready', () => {
  client.channels.get('629526736631103489').send('BOT ONLINE!');
  console.log('This bot is online');
})
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

client.on("message", msg => {
  // if (msg.content === "tunafish") {
  //     console.log('tunafish')
  //     let edit = msg.content.replace(/tunafish/gi, "salmon");
  // msg.channel.send(`${msg.author.username}: ${edit}`);
  // msg.delete()
  // .catch(console.error);
  // } else
  if (msg.content === "my id") {
    console.log(msg.author.id, msg.author.username)
    msg.reply("Author sent to terminal");
  } else if (msg.content === "grounds") {
    console.log(client.channels.get('admin-test-grounds'));
    // client.channels.get('test-grounds').send('Test Ground Announcement')
  } else if (msg.content === "d20") {
    console.log('d20')
    let rollResult = getRandomInt(20);
    msg.reply('You rolled a ' + rollResult);
  } else if (msg.content === "Hello") {
    console.log('hello')
    msg.reply("Hi!");
  } else if (msg.content === "Matt") {
    console.log('matt')
    msg.reply("Matt loves Tiffany more than WarCraft!!");
  } else if (msg.content === "Aaron") {
    console.log('aaron')
    msg.reply("Aaron needs to learn how to code some actual javascript... not some lame yelp app.");
  } else if (msg.content === "Bye") {
    console.log('bye')
    msg.reply("Cya!");
  }
  //love club quiz//
  if (msg.content.toLocaleLowerCase() === "dere quiz") {
    newQuizUser(msg);
  }
  if (msg.content.toLocaleLowerCase() == "dere question") {
    startQuiz(msg);
  }
  if (msg.content.toLocaleLowerCase() == "my dere type") {
    let user = quizUsers.find(x => x.id === msg.author.id);
    if (user === undefined) {
      console.log("no user")
      msg.reply("To register for the quiz say: **dere quiz**");
    } else{
      let userIndex = quizUsers.findIndex(x => x.id === msg.author.id);
      if (quizUsers[userIndex].status === "Tsundere"){
        msg.reply("You are a **Tsundere**!")
      } else if(quizUsers[userIndex].status === "Yandere"){
        msg.reply("You are a **Yandere**!")
      } else if(quizUsers[userIndex].status === "Himedere"){
        msg.reply("You are a **Himedere**!")
      } else if(quizUsers[userIndex].status === "Dandere"){
        msg.reply("You are a **Dandere**!")
      } else if(quizUsers[userIndex].status === "Kuudere"){
        msg.reply("You are a **Kuudere**!")
      } else {
        msg.reply("Hmm, I think we need more info. Say **dere question**")
      }
    }
  }
  if(msg.content.toLocaleLowerCase() == "embed test"){
    msg.channel.send(questionEmbed)
  }
});

//Love Club Quiz//
const startQuiz = msg => {
  let user = quizUsers.find(x => x.id === msg.author.id);
  if (user === undefined) {
    console.log("No user");
    msg.reply("To register for the quiz say: **dere quiz**");
  } else if (user.status !== "started") {
    msg.reply("You're already done! Say **my dere type**")
  } else {
    let userIndex = quizUsers.findIndex(x => x.id === msg.author.id);
    let qNum = getRandomInt(user.userQuestions.length - 1);
    console.log(user.username);
    let questionEmbed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .setTitle('-dere type Questionnaire')
      .setAuthor(user.username)
      .setDescription(user.userQuestions[qNum].question)
      .addField('a', user.userQuestions[qNum].answerA)
      .addField('b', user.userQuestions[qNum].answerB)
      .addField('c', user.userQuestions[qNum].answerC)
      .addField('d', user.userQuestions[qNum].answerD)
      .addField('e', user.userQuestions[qNum].answerE)
      .addBlankField()
      .setTimestamp()
      .setFooter(' クリエイターズギルド - Answer by just saying the letter of your choice (**a, b, c, d, e**)');

    msg.channel.send(questionEmbed);
    let filter = msg => msg.author.id == user.id &&
      (msg.content.toLowerCase() === 'a' ||
        msg.content.toLowerCase() === 'b' ||
        msg.content.toLowerCase() === 'c' ||
        msg.content.toLowerCase() === 'd' ||
        msg.content.toLowerCase() === 'e');
    msg.channel.awaitMessages(filter, { max: 1, time: 30000 })
      .then(collected => {
        let collectionBox = (collected.array());
        let answer = (collectionBox[0].content.toLocaleLowerCase());
        console.log(answer);
        let userScore = undefined;
        if (answer == "a") {
          userScore = quizUsers[userIndex].userQuestions[qNum].aScore;
          console.log("end at a");
        } else if (answer == "b") {
          userScore = quizUsers[userIndex].userQuestions[qNum].bScore;
        } else if (answer == "c") {
          userScore = quizUsers[userIndex].userQuestions[qNum].cScore;
        } else if (answer == "d") {
          userScore = quizUsers[userIndex].userQuestions[qNum].dScore;
        } else {
          userScore = quizUsers[userIndex].userQuestions[qNum].eScore;
          console.log("end at e");
        };
        console.log(userScore)
        if (userScore == "tsun") {
          quizUsers[userIndex].score[0] = quizUsers[userIndex].score[0] + 1;
          console.log(quizUsers[userIndex].score);
          if (quizUsers[userIndex].score[0] >= 3) {
            quizUsers[userIndex].status = "Tsundere"
            msg.reply("Ah HAH! We found out what you are. say **my dere type** to find out");
          } else {
            msg.reply('Answer more questions to find out what -dere type you are. You can ask the next question anytime by saying: **dere question**')
          }
        } else if (userScore == "yan") {
          quizUsers[userIndex].score[1] = quizUsers[userIndex].score[1] + 1;
          console.log(quizUsers[userIndex].score);
          if (quizUsers[userIndex].score[1] >= 3) {
            quizUsers[userIndex].status = "Yandere"
            msg.reply("Ah HAH! We found out what you are. say **my dere type** to find out");
          } else {
            msg.reply('Answer more questions to find out what -dere type you are. You can ask the next question anytime by saying: **dere question**')
          }
        } else if (userScore == "hime") {
          quizUsers[userIndex].score[2] = quizUsers[userIndex].score[2] + 1;
          console.log(quizUsers[userIndex].score);
          if (quizUsers[userIndex].score[2] >= 3) {
            console.log("Before setting status")
            quizUsers[userIndex].status = "Himedere"
            msg.reply("Ah HAH! We found out what you are. say **my dere type** to find out");
          } else {
            msg.reply('Answer more questions to find out what -dere type you are. You can ask the next question anytime by saying: **dere question**')
          }
        } else if (userScore = "dan") {
          quizUsers[userIndex].score[3] = quizUsers[userIndex].score[3] + 1;
          console.log(quizUsers[userIndex].score);
          if (quizUsers[userIndex].score[3] >= 3) {
            quizUsers[userIndex].status = "Dandere"
            msg.reply("Ah HAH! We found out what you are. say **my dere type** to find out");
          } else {
            msg.reply('Answer more questions to find out what -dere type you are. You can ask the next question anytime by saying: **dere question**')
          }
        } else {
          quizUsers[userIndex].score[4] = quizUsers[userIndex].score[4] + 1;
          console.log(quizUsers[userIndex].score);
          if (quizUsers[userIndex].score[4] >= 3) {
            quizUsers[userIndex].status = "Kuudere"
            msg.reply("Ah HAH! We found out what you are. say **my dere type** to find out");
          } else {
            msg.reply('Answer more questions to find out what -dere type you are. You can ask the next question anytime by saying: **dere question**')
          }
        };
        quizUsers[userIndex].userQuestions.splice([qNum], 1);
      })
      .catch(collected => {
        console.log("ERROR??")
      });
  }
}

//quiz taker
class QuizUser {
  constructor(username, id, score = [], userQuestions = [], status) {
    this.username = username;
    this.id = id;
    this.score = score;
    this.userQuestions = userQuestions;
    this.status = status
  }
}

let quizUsers = [];
const newQuizUser = function (msg) {
  console.log(msg.author.id, msg.author.username);
  if (quizUsers.some(x => x.id === msg.author.id) === true) {
    msg.reply("You already started just say '**dere question**'")
    return
  }
  else
    quizUsers.push(new QuizUser(msg.author.username, msg.author.id, score = [0, 0, 0, 0, 0], userQuestions = questions, "started"))
  msg.reply("Lets try to figure out what *-dere type* you are! Answer the questions by simply saying **a**, **b** ,**c** or **d** with no other characters or words in your reply.");
  msg.reply("To be asked a question say: **dere question**")
}
//questions
class Questions {
  constructor(number, question, answerA, aScore, answerB, bScore, answerC, cScore, answerD, dScore, answerE, eScore) {
    this.number = number;
    this.question = question;
    this.answerA = answerA;
    this.aScore = aScore;
    this.answerB = answerB;
    this.bScore = bScore;
    this.answerC = answerC;
    this.cScore = cScore;
    this.answerD = answerD;
    this.dScore = dScore;
    this.answerE = answerE;
    this.eScore = eScore;
  }
}
let questions = [];
questions.push(new Questions(1, "Choose a dagger:", "A) A Golden Dagger", "hime", "B) A Concealable Dagger", "dan", "C) My Fist as a Dagger", "kuu", "D) A Serrated Dagger", "tsun", "E) The Dagger I Put in you..", "yan"));
questions.push(new Questions(2, "Which is the worst scenario:", "A) Tripping in front of your crush.", "tsun", "B) Getting caught staring at someone.", "dan", "C) Running into your crush when you're having a bad hair day.", "hime", "D) Slightly giggling from a lame joke.", "kuu", "E) Getting blood on your uniform.", "yan"));
questions.push(new Questions(3, "Best gift from an admirer:", "A) His/Her promise to only love me!", "yan", "B) I don't care what they give!.. but something cute would be nice..", "tsun", "C) Gym Equipment and a Book", "kuu", "D) Everything on my Amazon wishlist", "hime", "E) Noise Cancelling Headphones", "dan"));
questions.push(new Questions(4, "While helping a lost child at a mall you:", "A) Hope they don't start a conversation", "Dan", "B) Threaten everyone around you to help find the parents.", "yan", "C) Lecture the child for getting lost then lecture the parents for losing the child.", "tsun", "D) Immediately point at the exact direction of the parents within the first minute.    ", "kuu", "E) Let the child hold your shopping bag while you continue shopping.", "hime"));
questions.push(new Questions(5, "My kind of party has:", "A) Hors D'oeuvres", "hime", "B) A Dog or Cat to play with", "dan", "C) Perfect lighting", "kuu", "D) People who aren't sensitive and can take a joke.", "tsun", "E) Places to secretly observe people.", "yan"));
questions.push(new Questions(6, "My kind of restaurant has:", "A) Self service ordering.", "dan", "B) Always has a table just for me.", "kuu", "C) A private and intimate eating area.", "yan", "D) Waiters who don't suck", "tsun", "E) 6 stars and $$$$$$$ rating on yelp.", "hime"));
questions.push(new Questions(7, "I like people who value:", "A) Personal space.", "dan", "B) Quality over quantity.. but also a large quantity of quality things.", "hime", "C) The health of their mind and body.", "kuu", "D) Loyalty", "yan", "E) Hard and meaningful work.", "tsun"));
questions.push(new Questions(8, "How would your friends describe you?", "A) Terrifyingly amazing..", "yan", "B) Quiet and shy", "dan", "C) Effortlessly cool.", "kuu", "D) Rude but caring", "tsun", "E) High maintenance and bubbly.", "hime"));
questions.push(new Questions(9, "My screensaver would most likely be a picture of:", "A) The meal I ate atop the Eiffel Tower.", "hime", "B) A cute dog", "dan", "C) The view from a mountain I climbed.", "kuu", "D) A candid picture of my crush through his bedroom window.", "yan", "E) The toughest looking kitty.", "tsun"));
questions.push(new Questions(10, "How do you express your feelings:", "A) I Announce them out loud.", "hime", "B) I try to tell someone but it's too hard..", "dan", "C) Feelings?", "kuu", "D) I give it my all no matter what is at stake.", "yan", "E) However I feel like.", "tsun"));
questions.push(new Questions(11, "What do you when someone doesn’t like you back?", "A) I get upset but whatever it's their lost!", "tsun", "B) I just keep doing me.", "kuu", "C) I make em.", "yan", "D) Hmph, doesn't matter, a lot of other people love me.", "hime", "E) I go somewhere quiet to figure out what I'm doing wrong.", "dan"));
questions.push(new Questions(12, "I am most proud of:", "A) My achievements", "kuu", "B) Having things always go my way.", "yan", "C) My social media accounts", "hime", "D) My effort to improve.", "dan", "E) The hard work I do.", "tsun"));
questions.push(new Questions(13, "My outfit style is usually:", "A) Oversized and layered", "Dan", "B) Exactly what my lover wants it to be.", "yan", "C) Whatever I feel like.", "tsun", "D) Trendy and brand named.", "hime", "E) Fitted.", "kuu"));
questions.push(new Questions(14, "My top priorities are:", "A) None of your business.", "kuu", "B) Knowing how large a crowd is at an event.", "dan", "C) Me, Myself and I,", "hime", "D) Making sure I have the best comebacks ready.", "tsun", "E) Eliminating the competition.", "yan"));
questions.push(new Questions(15, "Pick at tattoo to get:", "A) Large Back Dragon Tattoo.", "kuu", "B) A Rose.", "hime", "C) Lion sleeve tattoo with cherry blossom petals.", "tsun", "D) The name of the person I love.", "yan", "E) A small hidden animal chibi.", "dan"));
