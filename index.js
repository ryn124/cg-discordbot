const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'token'

client.login(token);
console.log('test')
client.on('ready', () =>{
    console.log('This bot is online');
})
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

client.on("message", msg=> {
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
  } else
    if (msg.content === "grounds") {
        console.log(client.channels.get('admin-test-grounds'));
        // client.channels.get('test-grounds').send('Test Ground Announcement')
    } else
    if (msg.content === "d20") {
        console.log('d20')
        let rollResult = getRandomInt(20);
      msg.reply('You rolled a ' + rollResult);
    } else
    if (msg.content === "Hello") {
        console.log('hello')
      msg.reply("Hi!");
    } else
    if (msg.content === "Matt") {
        console.log('matt')
      msg.reply("Matt loves Tiffany more than WarCraft!!");
    } else
    if (msg.content === "Aaron") {
        console.log('aaron')
      msg.reply("Aaron needs to learn how to code some actual javascript... not some lame yelp app.");
    } else
    if (msg.content === "Bye") {
        console.log('bye')
      msg.reply("Cya!");
    }
    //love club quiz//
    if (msg.content === "dere quiz") {
      newQuizUser(msg);
      msg.reply("Say 'start dere quiz' to start. *Quiz user info sent to terminal*");
    }
  });
//Love Club Quiz//
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
const startQuiz = function(msg){

}
class QuizUser {
  constructor(username, id, score = [], userQuestions = [], status) {
    this.username = username;
    this.id = id;
    this.score = score;
    this.userQuestions = userQuestions;
    this.status = status
  }
}
let questions = [];
questions.push(new Questions(1, "Choose a dagger:", "A) A Golden Dagger", "hime", "B) A Concealable Dagger", "dan", "C) My Fist as a Dagger", "kuu", "D) A Serrated Dagger", "tsun", "E) The Dagger I Put in you..", "yan"));
questions.push(new Questions(2, "Which is the worst scenario:", "A) Tripping in front of your crush.", "tsun", "B) Getting caught staring at someone.", "dan", "C) Running into your crush when you're having a bad hair day.", "hime", "D) Slightly giggling from a lame joke.", "kuu", "E) Getting blood on your uniform.", "yan"));
questions.push(new Questions(3, "Best gift from an admirer:", "A) His/Her promise to only love me!", "yan", "B) I don't care what they give!.. but something cute would be nice..", "tsun", "C) Gym Equipment and a Book", "kuu", "D) Everything on my Amazon wishlist", "hime", "E) Noise Cancelling Headphones", "dan"));
questions.push(new Questions(4, "While helping a lost child at a mall you:", "A) Hope they don't start a conversation", "Dan", "B) Threaten everyone around you to help find the parents.", "yan", "C) Lecture the child for getting lost then lecture the parents for losing the child.", "Tsun", "D) Immediately point at the exact direction of the parents within the first minute.    ", "kuu", "E) Let the child hold your shopping bag while you continue shopping.", "hime"));
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

let quizUsers = [];
const newQuizUser = function(msg){
  console.log(msg.author.id, msg.author.username);
  quizUsers.push (new QuizUser (msg.author.username, msg.author.id, score = [0,0,0,0], userQuestions = questions, "off"))
  console.log(quizUsers[0])
}