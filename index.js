import OpenAI from "openai";
import fs from 'fs/promises';

const openai = new OpenAI({
  apiKey: "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"
});

async function getCodeFromFile(filePath) {
  try {
    const code = await fs.readFile(filePath, 'utf-8');
    return code;
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}

async function detectLanguage(filePath) {
  const fileExtension = filePath.split('.').pop().toLowerCase();

  // Add more cases for other languages as needed
  switch (fileExtension) {
    case 'js':
      return 'javascript';
    case 'py':
      return 'python';
    case 'html':
      return 'html';
    case 'php':
      return 'php';
    case 'cpp':
      return 'cpp';
    case 'java':
      return 'java';
    case 'css':
      return 'css';
    case 'sql':
      return 'sql';
    // Add more cases for other languages
    default:
      throw new Error(`Unsupported file type: ${fileExtension}`);
  }
}

async function main() {
  const codeFilePath = 's.sql'; // Provide the actual path to your code file

  try {
    const code = await getCodeFromFile(codeFilePath);
    const language = await detectLanguage(codeFilePath);

    const explainCommand = process.argv[2];

    if (explainCommand && explainCommand.toLowerCase() === `explain`) {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": `explain the ${language} code`
          },
          {
            "role": "user",
            "content": code
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      // Access the assistant's response within the choices array
      const assistantResponse = response.choices[0].message.content;
      console.log('Assistant\'s Response:', assistantResponse);
    } else {
      console.log(`To explain the ${language} code, run: node yourscript.js "explain ${language}"`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

main();
