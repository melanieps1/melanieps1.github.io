---
layout: default
title: Week Three - console.log EVERYTHING
---

# {{ page.title }}

<p class="blog-text">
    <code>console.log();</code><br>

    This was my big lesson of the week that stretched across morning warmups, class walkthroughs and projects on my own.  When you type a bunch of lines and then run your code, and something is broken, console.logging everything will save you from banging your head against the wall.  Here is an example where I used console.logging quite a bit during a morning warmup.

    Here is an example of an algorithm problem I was presented with one morning.

    I have an array of numbers and I have to figure out how many pairs of the same number I can make out of them.  The first thing I did when given the function <code>function sockMerchant(n, ar) {}</code> is console log <code>n</code> and <code>ar</code>:

    <code>n = 9</code>
    <br>
    <code>array = [10, 20, 20, 10, 10, 30, 50, 10, 20]</code>
    <br>

    Then, I created a JSON object <code>var counts = {};</code> to count how many of each number I had and group them:

    <code>
    	ar.forEach(function(i) {
    	<br>
        counts[i] = (counts[i] || 0) + 1;
        <br>
      	});
      	<br>
        console.log(counts);
    </code>
    <br>

    Which resulted in: <code>{ '10': 4, '20': 3, '30': 1, '50': 1 }</code> when I console.logged it.

    Great, so I know how many of each number I have.  And I know that I am on the right track with that, thanks to my console.logs.

    I then moved on to a function to iterate through that object and figure out how many pairs came out.  Only problem?  It kept breaking by either throwing an error or giving me no response when I ran the code.  So I have to backtrack and console.log line by line, what exactly I was spitting out.  This is what it looked like:

    <code>
    	countsKeys.forEach( function loopOverKeys( key ) {
    	<br>
        console.log("key: ", key);
        <br>
        console.log("value: ", counts[key]);
        <br>
        console.log( 'pairs ', pairs);
        <br>
        if (Math.floor(counts[key] / 2) >= 1) {
        <br>
            pairs += Math.floor(counts[key] / 2);
            <br>
            console.log( ' added to pairs ', pairs);
            <br>
        } 
        <br>
      });
    </code>
    <br>

    I was finally able to <code>return pairs;</code> and get the correct answer (which is <code>3</code>, btw).

    This is a very basic example, but something similar has happened to me in other projects as well as the class during class walkthroughs of projects.  Always console.log!
</p>