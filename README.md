# Socket Story 📚 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
A simple socket server which dumps the prewritten text to client when connected...

 ## Install

  - Install all the dependencies with [yarn](https://classic.yarnpkg.com/en/) or [npm](https://www.npmjs.com/) .
    
    - Yarn
      
      ```cmd
        > yarn
      ```
      
    - npm
      
      ```cmd
        > npm install
      ```
      
    **Note** :  This application needs [ngrok](https://ngrok.com/) to tunnel to make it available globally .If you don't have one it automatically downloads one .
    
 ## How to
  
   - Run start script with [yarn](https://classic.yarnpkg.com/en/) or [npm](https://www.npmjs.com/) .
    
     - Yarn
    
        ```cmd
          > yarn start
        ```
      
      - npm
      
        ```cmd
          > npm run start
        ```
        
  - Now use ngrok to tunnel the tcp protocol as below.
    ```cmd
      > ngrok tcp 8080
    ```

  - Now from client side connect using telnet (or) nc then the data written in story.txt will be emitted to client line by line with 2 seconds delay. (If using a mobile as client download a Simple Socker Server application)
      
 ## LICENSE
 
    MIT License

    Copyright (c) 2023 Raja Ravi Prakash

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

    
    
    