// Getting the operating system user name
console.log("Hello deno!", Deno.env.get("USERNAME") ) 

// TODO Starting the app in the console
// deno run --allow-env  main.ts 
// deno run -A  main.ts

// TODO Installing the Deno app
// deno instal --allow-env  main.ts 
// deno-example // Hello deno! USERNAME

/*  Deno Permissions
--allow-all  Allow all permissions
--allow-env Allow environment access
--allow-hrtime Allow high resolution time measurement
--allow-net=<allow-net> Allow network access
--allow-plugin Allow loading plugins
--allow-read=<allow-read>  Allow file system read access
--allow-run Allow running subprocesses
--allow-write=<allow-write> Allow file system write access
*/