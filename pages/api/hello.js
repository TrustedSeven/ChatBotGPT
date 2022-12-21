const openai = require('openai');
openai.apiKey = "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";
openai.completions({
         engine: "text-davinci-003",
                   prompt: "Hello, how are you?",
                   max_tokens: 32,
                   n: 1,
stop: ".",
                   temperature: 0.5,
              }).then((response) => {
console.log(response.data.choices[0].text);
});