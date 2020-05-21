import Denomander from "https://deno.land/x/denomander/mod.ts";
import { WebView } from 'https://deno.land/x/webview/mod.ts';

const app = new Denomander({
  app_name: 'Web Window',
  app_description: 'Open any website as a standalone window',
  app_version: '0.0.1',
})

app
  .command('open [url]')
  .option('-f --fullscreen', 'Open the window in fullscreen')
  .option('-t --title', 'The window\'s title, shown in the toolbar')
  .option('-r --resizable', 'Whether the window should be resizable')
  .description('Open a website as a window')
  .action(async (url: string) => {
    const view = new WebView({
      title: app.title || '',
      url: url || 'https://github.com/ninest/',
      width: 900,
      height: 600,
      resizable: app.resizable === 'false' ? false : true,
      debug: false,
    })
    console.log(app.fullscreen);
    view.setFullscreen(app.fullscreen || false);

    // view.setColor({r: 255, g: 10, b: 10});

    await Promise.all([view.run()]);
  });

app.parse(Deno.args)
