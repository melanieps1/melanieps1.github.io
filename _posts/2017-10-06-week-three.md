---
layout: default
title: Week One - console.log EVERYTHING
---

# {{ page.title }}

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