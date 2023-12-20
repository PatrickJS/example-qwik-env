# example qwik app
```
src/server
> made up convention for server only code

src/universal
> made up convention for when you need universal code that uses the same interface on server and client
> but on client it fetches and on server it just runs the code.
> just use server$ if you can rather than this pattern

src/routes/api 
> use qwik city middleware for onGet, onPost etc
```
