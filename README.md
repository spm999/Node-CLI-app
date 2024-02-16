Video Link: https://www.youtube.com/watch?v=eKSuClkMLog


#Code Explanation CLI Tool

##Overview:
This CLI tool uses the OpenAI API to provide explanations for code written in various programming languages. It supports multiple programming languages such as JavaScript, Python, HTML, PHP, C++, Java, CSS, and SQL.

##Prerequisites:-
1. Node.js and npm: Make sure you have Node.js and npm installed on your machine. You can download them from https://nodejs.org/.
2. OpenAI API Key: Obtain an API key from OpenAI. You can sign up and get your API key from https://beta.openai.com/signup/.


##Setup:-
1. Clone the Repository:
git clone https://github.com/spm999/Node-CLI-app.git
cd Node-CLI-app.git

2. Install Dependencies:
npm install

3. Set Up Environment:
Create a .env file in the root directory. Add your OpenAI API key to the .env file:
OPENAI_API_KEY=your_actual_api_key_here


##Usage:-

Running the CLI Tool:-
To explain code in a file, use the following command:
node yourscript.js explain

Replace yourscript.js with the actual name of your script.

##Supported Languages:-
The tool currently supports the following languages:

1. JavaScript (.js)
2. Python (.py)
3. HTML (.html)
4. PHP (.php)
5. C++ (.cpp)
6. Java (.java)
7. CSS (.css)
8. SQL (.sql)
Adding More Languages
To add support for additional languages, update the detectLanguage function in yourscript.js. Add a case for the new file extension and return the corresponding language.

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
and change the path of the file in async main() function.



##Additional Functionality
The CLI tool currently provides code explanations. You can extend it to add more functionalities by modifying the main function in yourscript.js. For example, you can add options to lint code, format code, or perform other code-related tasks.


##Examples:-

Explain JavaScript Code:
node yourscript.js explain

Explain Python Code
node yourscript.js explain


##Feedback and Contributions
Feel free to provide feedback or contribute to the project on GitHub: 
https://github.com/spm999/Node-CLI-app.git

