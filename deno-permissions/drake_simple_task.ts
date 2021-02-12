// Deno tasks runner
import { desc, run, task, sh } from "https://deno.land/x/drake@v1.4.6/mod.ts";

desc("Minimal Drake task");

task("hello", [], async function() {
    console.log("Hello from Drake!");
    await sh("deno run --allow-env  main.ts ");
});

run();

// TODO Starting the app in the console
// deno run -A drake_simple_task.ts hello

/* Result
Check file:///E:/PROJECTS/DENO/deno-basis/deno-permissions/drake_simple_task.ts
run: started
hello: started
Hello from Drake!
Check file:///E:/PROJECTS/DENO/deno-basis/deno-permissions/main.ts
Hello deno! Master
hello: finished (773ms)
run: finished (775ms)
*/