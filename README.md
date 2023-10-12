![The main heading](assets/images/readme.pics/main-heading.png)

# Project 2- JavaScript

## Rock Paper Scissors Lizard Spock! An interactive game

### Requirements

The project is for a game of 'Rock paper scissors lizard Spock', a version of rock paper scissors but with an added two options a player can pick that are integrated into the game, meaning each new options have interacting moves with the rest of the others. The game comes from an American TV show called 'The Big Bang Theory' which is a show that celebrates self proclaimed 'nerd culture', meaning the show is a comedy written by nerds, for nerds, and celebrates this kind of culture as opposed to mocking it, still while including jokes that would also be described as 'nerdy'. The word nerd was originally an insult but the show and it's viewers have reclaimed it as something to identify by as a community and as individuals. The game I have created has been designed to appeal to this kind of culture, and I have engrained it into the user experience. The user plays against a the computer which selects it's own option and the two answers are compared and the winner is announced. The user can then go back to the game or the main menu once the winner is announced.

The website can be accessed through this [link](https://alistairdriscoll.github.io/project-2/)

![Picture to check responsivity](assets/images/readme.pics/response-pic.png)

## User stories

### First time goals

- As a First Time Visitor, I want to learn what the website does with ease, and have clear instructions for a fun game and how I'm to play it.

- As a First Time Visitor, I want to easily navigate through the app without any confusion of where I am or what I am to do.

- As a First Time Visitor, I want to be on a website that is all tied together with a theme that both makes sense to the nature of the game and is aesthetically pleasing.

### Returning Visitor goals

- As a Returning Visitor, I want to have a comfortable idea by now of how to use the app and be able to still have a look at things like the rules incase I have forgotten anything.
 
 ### Frequent Visitor goals

 - As a frequent visitor, I should by now have a full understanding of how to use the website and play the rules of the game.

# Features

## The Icon

![Enterprise icon](assets/images/enterprise-icon.png)

The icon plays a part in the spirit of The Big Bang Theory as one of the first things the users see. It is a cartoon picture of The 'Starship Enterprise', which is the ship that Spock is a crew member on. One of the jokes on Big Bang Theory is that the characters will use the game to settle arguments over for instance, what to watch on TV, but both characters usually pick Spock, a character they all really admire in the show 'Star Trek', a Sci-Fi franchise that is heavily referenced in the show. The icon acts as a 'if you know, you know' kind of thing that is part of the fun for the user, as the game is meant for people who are like minded to the show characters and are self confessed 'nerds' also, and so seeing the icon they will know that the website is designed for them.

### Metadata

Therefore, the keywords in the metadata I've included the name of the game, Star Trek and The Big Bang Theory, and included 'nerd culture' and 'nerd game' so to make the website easier to find for people looking for this kind of thing. As stated before, the word nerd is something that the people who are into this kind of thing and are into this kind of stuff identify as, so even if the word started off as a bit of an insult and even then not a particularly hurtful one, it most certainly isn't offensive in this context due to the audience identifying as such, and choosing to make the word their own.

## Design

### Font and background

![Background picture](assets/images/space-background.png)

The font carries on with the 'nerdy' theme, I found it by going into google fonts and typing words such as 'space', 'star trek' and 'sci-fi' until I found a font looking more futuristic. A Sci-Fi themed website would obviously be really fitting for the demographic. The background follows this theme, as I looked on the internet for just a picture of outer space. The picure I settled for was my choice as for starters it didn't have as many stars in the background as other pictures, meaning it wasnt going to be a distraction for the user, and there would be less likelihood of the stars interfering with the silver font color I had chosen. I also knew if it had less stars then there would be less chance of it being obvious that the picture is repeating itself in the background. A more keen eyed user may notice that it is repeating across the whole background but it isn't obvious enough to affect user experience in any way. One last thing to add is that with the h1 in the header, there are full stops after every word followed by the exclamation mark at the end word to replicate how people say it when playing the game, like the way both players would count down and then have their answer by the time both shout Spock! at the end, further adding a bit of fun and taking the edge off as it is a game after all.

![Font picture](assets/images/readme.pics/font-pic.png)

### Buttons

![Example of one of the buttons](assets/images/readme.pics/button-example.png)

Lastly, the buttons are designed with the hard edges and black border etc to look like buttons on a spaceship, tieing together the whole Sci-Fi theme and making the website something a character from The Big Bang Theory themselves would like the look of.

### The footer

The footer I just decided to add my name and github account using the same font as everywhere else.

### Colours

I did not overcomplicate the colours too much with the website. The font color is silver as it's the colour a customer would usually see in sci-fi themed websites due to it being the kind of colour someone would see on a spaceship. I then chose the blue font from a picture I didn't end up using that also described the rules, I just didn't opt to use this picture in the end as the current one looked better and was more descriptive of the hand signals that accompany each option, for if the user wants to play with a friend. The picture can be seen below. I used an eyedropper extension tool from my browser to get the exact colour as opposed to trying to replicate it.

![Original game picture](assets/images/readme.pics/old-picture.gif)

## Useability

![First part of the welcome section](assets/images/readme.pics/welcome-page-one.png)
![second part of the welcome section](assets/images/readme.pics/welcome-page-two.png)

The whole website is only one page split into three different sections that hide and show themselves when needed, taking the user along the path of the website. This saves the browser from having to load a new page whenever the user advances through the website reducing the load time massively. The welcome section can be seen above and the other two parts of the website below. A 'hide' class was created on CSS that was then used to only display what needed to be displayed, and I used javascript to add or take away this class that I added to the event listeners of the buttons that the user would click to progress through the game. The rules are explained in the first page the user sees, which comes with a small welcome message as well as a picture of how the game works, and a button to take them to the next stage of the game when they have an understanding of how things work. The next section is where the user chooses their option and the final part is where the results are announced, being announced in an h2 as either a win, lose or draw, with the player choice, computer choice and outcome underneath, so to fully explain to the user what has occured as opposed to telling them if it is a win or lose without knowing why. The user can then either return to the game for another round or go back to the first page if they want to glance at the rules again.

![Game section](assets/images/readme.pics/game-page.png)
![Results section](assets/images/readme.pics/results-page.png)

## Technologies used

- HTML was responsible for the structure of the site.
- CSS flexbox was used to arrange the items correctly on their pages.
- CSS was responsible for the look and colouring of the site.
- JavaScript was used to make the website interactive.
- Balsamiq was used to sketch out how the website would look.
- Git, Github were used to upload the project to a cloud.
- Codeanywhere was used at the start of the project to get it onto github then VS Code was used to code out the rest of the project.
- An extension called 'Responsive Viewer' was used to check how the website would look on different screen sizes.
- An extension called 'Eye Dropper' was used to get the right colour scheme for the website.

# Bugs

