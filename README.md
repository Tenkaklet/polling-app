# A polling app made with a tutorial from Traversy Media

```bash
$ npm i 

```
```bash
$ npm start
```

Remember to add own mlab or local mongodb in config/db.js

```javascript

// Mongoose connect
mongoose.connect('MLAB or Local db here')
.then(() => {
    console.log('Mongoose Connected');
})
.catch(err => {
    console.log(err);
});
```

