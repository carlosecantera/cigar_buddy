let userAge = prompt('How old are you?');

funtion getUserAge() {
    if (parseInt(userAge) >= 21){
    document.write(`
    <section>
        <img src="https://i1.wp.com/thegentlemansflavor.com/wp-content/uploads/2019/01/Cigar-Friends-600x338.jpg?resize=600%2C338"/>
        <p>Are having a hard time finding someone to enjoy one of life's most exclusive and luxury products? 
             Look no further!  
             Here you can find someone near you to enjoy a cigar with based on your location and interests.  
             Simply click on the search button above and select your location and interests and we'll point you in the right direction to someone you can have meaningful converstion with while smoking your favorite cigar.</p>
    </section>
    <section>
        <p>Whether you are a novice or daily smoker you can find someone in which you can spend time with and learn from each other.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkisGStP-yj2K-LActZpcqyupiPwbPdziLDg&usqp=CAU"/>
    
    </section>
    <section><p>If you can't find anyone in your area, how about a remote smoke session? <button type="button"> Smoke and Joke Now!</button> Not every city will have a plethora of cigar smokers.  Dont let that keep you from making friends!  Try our virtual meet up!</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThE-xCubKP3XJilkFR9O8wjVrYDVDqbCAxTQ&usqp=CAU"/>
    </section>`);
} else {
    document.write('<img src= "https://media2.giphy.com/media/3oeHLvGEUZNOBN1idG/giphy.gif">');
}
}
