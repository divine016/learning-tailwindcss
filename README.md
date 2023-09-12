# This folder contains tutorials i followed from youtube to learn tailwind cc
## project 1
    it is about dave grey tutorial we build a landing page for acme rockets

## project 2 
    is about learning css from scratch and building a smart home page.
    
    <img src="" alt="">
## scratch course contains the basics of tailwind and what i was able to build using tailwind play online
    here the link https://play.tailwindcss.com/jnf3XJCsqJ
### I am going to write the commands we need to run on our computer so as to have tailwindcss in our folder up and running
  
you need to have node js installed in your machine already</h>
    
#### Open your file in using VsCode and do the following 

* Open the terminal

* (to open terminal either use *ctrl + ` * or go to the *top left*   and then *terminal*  then *new terminal* )

* Type *npx tailwindcss init*  in the terminal u just open 
            
* once this is done you should find a *tailwind.config.js file*  in the folder

### Now we need to create the different folders that we would be working with.
We  create 2 folders build or public folder where the index.html and css folder would be would be. 
And another for the src(source) where the input.css would be. 
In the input.css we input the following:</p> 
* @tailwind base;
* @tailwind components;
* @tailwind utilities;
## Note:
 We can also create classes in the input.css file for the different styles we want to apply that are not found in tailwindcss documentation like radial styles.

### Now we go into the build folder that we created previously
 the build folder would contain our index file and images we need for our proect.</p>
           
 Inside the build folder create a file called <b>index.html</b> and a folder for the images
### We go inside the tailwind.cOnfig.js
 we need to fill in inforMation for our content
    once you have open the file where you find content in the quotes type <b>./build/*.html</b>this is what you have. <i>content:["./build/*.html"]</i>
In the terminal 
           
            type the following command <b>npm init -y</b> in the terminal the <b>-y</b> there is to accept all the required processes needed.
  
            The above command would help us to create a package.json file 

            Inside the package.json file 

            and change the text after the colon  to "npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch"(this would constanly look for changes and update the style.css file)

        <h5>going back to the terminal</h5>
        <p>we need to install a development dependency</p>
        <p>We do this by typing the following in the terminal</p>
        <li><b>npm i -D prettier-plugin-tailwindcss</b></li>
        <p>
            Once this is done we would see a <b>node_modules</b> folder in our folder  and the package.json folder would have a devDependencies of prettier-plugin-tailwindcss
        </p><br>
        <p>
            since we have a node modules folder we would not want to push it github so we would create a folder known as <b>.gitignore</b> <br>
            Inside the .gitignore file we would list node_modules
        </p>
         <h5>inside the package.json file directly under tailwind we would type
         </h5>
         <p>"prettier": "npx prettier --write **/*.html"</p>
         <p>prettier is used to format files</p>

         <h5>now that we are done with that we need to run one last command that would help us visualize the changes made to our html file.</h5>

         <p>thw commange is <span style="color: red;"> npm run tailwind</span></p>
         <p>once we done we would notice a css filder in our build directory and inside the css we would have a style.css file.</p>

        <p>the last we need to do is link our css to our html</p>            
        <p>Inside the index.html directly under the title type the following
            <ul>
                <li>
                    <link rel="stylesheet" href="css/style.css">
                </li>
            </ul>
        </p>
    </ol>

    <h2>we can start coding happy coding.</h2>
