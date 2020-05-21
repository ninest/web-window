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
  .option('-w --width', 'The window\'s width')
  .option('-h --height', 'The window\'s height')
  .description('Open a website as a window')
  .action(async (url: string) => {
    const view = new WebView({
      title: app.title || '',
      url: url || 'https://github.com/ninest/',
      width: parseInt(app.width) || 900,
      height: parseInt(app.height) || 600,
      resizable: true,
      debug: false,
    })
    view.setFullscreen(app.fullscreen || false);

    // view.setColor({r: 255, g: 10, b: 10});

    await Promise.all([view.run()]);
  });

app.parse(Deno.args)
