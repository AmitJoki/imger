imger
=====

When all you need is a popup of image !

There are times when all you need is a popup of the same image, when some one clicks on it.

I've come across many such plugins, but you need a big image of the same and you'll need a anchor tag, for those plugins to work.

How to use ?

**First include jquery**

just include `modal.js` and `modal.css` and of course `imger.js`

Then add `data-imger` to each `<img>`.

Like this :

`<img src="url" data-imger >`

And at last do this:

```
$(function(){
$.imger();
});
```

Now click on any img and you can see that it pops out in a simple modal.

The modal is taken from https://github.com/drublic/css-modal

The main code is really simple around just 1kb or even less.

Do whatever you like, its MIT licensed.

By the way, you can also check out my social networking site http://nettpals.in where you can send files upto 1 GB with your friends and many more features :)


Happy coding !
