function main() {
  try {
    var label = GmailApp.getUserLabelByName('Unsubscribe');
    var threads = label.getThreads();

    threads.forEach(function (thread) {
      var message = thread.getMessages()[0];
      var value = message.getRawContent().match(/^List-Unsubscribe: ((.|\r\n\s)+)\r\n/m)[1];

      if (value) {
        var url = value.match(/<(https?:\/\/[^>]+)>/)[1];
        if (url) {
          var status = UrlFetchApp.fetch(url).getResponseCode();
          Logger.log('Unsubscribe ' + status + ' ' + url);
        }
      }

      thread.removeLabel(label);
    });
  } catch (f) {
    Logger.log(f.message);
  }
}
