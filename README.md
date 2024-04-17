## Bowie Task Management Application

### Introduction

A task management application is a software tool that allows users to keep track of tasks. Features include:
- Creating Tasks (Question 1 and 3 captured)
- Viewing Tasks (Question 1 and 3 captured)
- Update Existing Taskz (Question 1 and 3 captured)
- Delete Existing Tasks (Question 1 and 3 captured)
- Sorting (Question 3 sorting in descending orders)

### Technologies used
1. Laravel
2. React
3. Inertia
4. MySQl

### Setting Up
You need to have [Node.js](https://nodejs.org/en), [Composer](https://getcomposer.org/download/) and [Xampp](https://sourceforge.net/projects/xampp/) installed on your computer.

To set up the project:
1. Clone the project from this [repository](https://github.com/874bowen/practical-test.git) by run this on your terminal
```bash
git clone https://github.com/874bowen/practical-test.git
```

2. Change directory to the `practical-test`
```bash
cd practical-test
```

3. Install Laravel's depedencies by running this on your terminal
```bash
composer install
```

4. Install React deps by running:
```bash
npm i
```

5. Run Migrations and SEeders
You have user 'email' => 'test@example.com', 'password' => '12345678',
```bash
php artisan migrate && php artisan db:seed
```

6. Once done on different terminals but stil on the same dir:
```bash
npm run dev
```
```bash
php artisan serve
```

7. Visit [http://127.0.0.1:8000/](http://127.0.0.1:8000/) on your browser

### Instructions for collaboration
### Instructions for collaboration
To collaborate on this project, you can follow these steps:

1. Fork the repository: Click on the "Fork" button at the top right corner of the repository page. This will create a copy of the repository under your GitHub account.

2. Clone the forked repository: On your local machine, open a terminal and navigate to the directory where you want to clone the repository. Then run the following command:
    ```bash
    git clone https://github.com/your-username/practical-test.git
    ```
    Replace `your-username` with your GitHub username.

3. Create a new branch: Before making any changes, create a new branch to work on. This helps in isolating your changes from the main branch. Run the following command to create a new branch:
    ```bash
    git checkout -b my-branch-name
    ```
    Replace `my-branch-name` with a descriptive name for your branch.

4. Make your modifications: Open the necessary files in your preferred text editor and make the desired changes to the code.

5. Commit your changes: Once you have made your modifications, it's time to commit them. Run the following commands to stage and commit your changes:
    ```bash
    git add .
    git commit -m "Add a descriptive commit message"
    ```

6. Push your changes: After committing your changes, push them to your forked repository using the following command:
    ```bash
    git push origin my-branch-name
    ```
    Replace `my-branch-name` with the name of your branch.

7. Create a pull request.

8. Collaborate and iterate
> Remember to regularly sync your forked repository with the original repository to stay up to date with the latest changes. You can do this by adding the original repository as a remote and pulling the latest changes from it.

Happy collaborating!

### Conclusion
The task management application is now set up and ready to use. By following the steps outlined in the README file, you can clone the project, install the necessary dependencies, run migrations and seeders, and start the application. Once the application is running, you can visit the specified URL in your browser to access the task management interface. Enjoy using the Bowie Task Management Application!