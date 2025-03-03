[![Publish](https://github.com/danielsiegl/svgwebdemo/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/danielsiegl/svgwebdemo/actions/workflows/pages/pages-build-deployment)

[![Validate](https://github.com/danielsiegl/svgwebdemo/actions/workflows/validate.yml/badge.svg)](https://github.com/danielsiegl/svgwebdemo/actions/workflows/validate.yml)

# SVG Web Demo

https://danielsiegl.github.io/svgwebdemo/

Welcome to the SVG Web Demo project! This repository is designed to introduce young learners (ages 10-14) to modern software development practices, including:

- **Feature Branches**: Working on new features in isolated branches.
- **Pull Requests**: Proposing changes and collaborating with others.
- **DevOps Practices**: Using tools to automate tasks like code validation and testing.
- **Linters**: Ensuring code quality and consistency.
- **Automatic Testing**: Running tests to catch errors early.
- **Publishing**: Deploying projects to the web.

## Getting Started

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**: Download the project to your computer.
   ```bash
   git clone https://github.com/danielsiegl/svgwebdemo.git
   cd svgwebdemo
   ```

2. **Start a Local Web Server**: This is necessary because loading SVG files via `fetch` doesn't work directly from the file system. If you have Python installed, you can start a simple web server:
   ```bash
   python -m http.server 8000
   ```
   Then, open your browser and navigate to `http://localhost:8000/`.

## Working with Feature Branches

Feature branches allow you to work on new features without affecting the main codebase. 

## Pull Requests and Code Review

Pull requests let others review your code before it's merged into the main branch. This is a great opportunity to get feedback and ensure code quality.

- **Open a Pull Request**: After pushing your feature branch, click the "Compare & pull request" button on GitHub.
- **Review Process**: Collaborators can comment on your code, suggest changes, and approve the pull request.
- **Merge**: Once approved, the pull request can be merged into the main branch.

## Continuous Integration and Deployment

This project uses GitHub Actions to automate tasks:

- **Linters**: Check code for stylistic errors.
- **Unit Tests**: Automatically run tests to ensure code works as expected.
- **Publishing**: Deploy the project to GitHub Pages.

These actions run automatically when you push changes to the repository.

## Learning Resources

To help you understand these concepts better, here are some resources:

- **Git and GitHub**:
  - [Feature Branches and Pull Requests: Walkthrough](https://gist.github.com/vlandham/3b2b79c40bc7353ae95a)
  - [Working with Git Branches and Pull Requests](https://dev.to/erikaheidi/working-with-git-branches-and-pull-requests-3943)

- **DevOps and Continuous Integration**:
  - [Feature Branches and Running Pipelines](https://github.com/Azure-Samples/LUIS-DevOps-Template/blob/master/docs/2-feature-branches-and-running-pipelines.md)

## Contributing

We welcome contributions! If you have ideas to improve this project, feel free to fork the repository, make your changes, and open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



