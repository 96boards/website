---
layout: container-breadcrumb-tabs
title: Submit Project
permalink: "/projects/submit.md/"
description: |-
    If you would like to share a project that uses 96Boards through the 96Boards website, please submit it here. Projects might include open designs for cases that can be 3D printed, designs for mezzanine boards or software repositories that you maintain and would like to share with and/or get contributions from the 96Boards community.
---
# Submit a project
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#submitProject">
Submit a project
</button>
  
<!-- Modal 2 -->
<div class="modal fade" id="submitProject" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        <h4 class="modal-title" id="myModalLabel">Add New Contact</h4>
      </div>
      <div class="modal-body">
      <iframe class="lazyload" src="https://services.cognitoforms.com/f/KvRQmIn2dku6k6gGP711jw?id=9" style="position:relative;width:1px;min-width:100%;*width:100%;" frameborder="0" scrolling="yes" seamless="seamless" height="725" width="100%"></iframe>
      <script src="https://services.cognitoforms.com/scripts/embed.js"></script>
      </div>
    </div>
  </div>
</div>

If you would like to share a project that uses 96Boards through the 96Boards website, please submit it here. Projects might include open designs for cases that can be 3D printed, designs for mezzanine boards or software repositories that you maintain and would like to share with and/or get contributions from the 96Boards community. You may also have a project that you want to invite other people to participate in. Generally, projects will require you to have a project URL, which may new/be on services like GitHub or SourceForge, or something you host yourself. We will regularly check links and will view projects that are no longer accessible or become very out of date.

***

## Step 1: Create Github account

In order to contribute to this repository, you will need to have a GitHub account. This will allow you go fork this repository, make changes, and **submit a pull request** to be review by one of our maintainers.

https://github.com/

If you already have a GitHub account, please skip to **Step 2**

## Step 2: Fork this repository

For more detailed instructions on how to fork a Github repository, please visit this **[GitHub Help page](https://help.github.com/articles/fork-a-repo/)**

Once the repository is forked onto your GitHub account, you will be able to make changes locally and submit pull requests.

## Step 3: Create NEW Project folder and copy template

**On your fork**, you will need to create a new folder within the "Projects" directory of the "website" repository.

- Click "Create new file" - You be sent to a blank new file with the following path:
   - `website/_96boards.org/Projects/<BLANK1>`
- Populate `<BLANK1>` with the name of your project followed by a forward slash `/`
   - Your new path should be `website/_96boards.org/Projects/NEWProjectName/<BLANK2>`
- Populate `<BLANK2>` with `README.md`
- Copy and paste the following template into the body of your new file:

```shell
# Project Title

< Brief description >

## Project Details

- **Creator:** < Your Name >
- **Project Name:** < Your Project Name >
- **Type of Project:** < Demonstration >
- **Project Category:** < Agriculture, Robotics, Healthcare, Security, Maker, IoT etc... >
- **Board(s) used:**
- **Difficulty level:** < Beginner, Intermediate, Experienced >

## Videos

< Link to YouTube video >

## Resources

### RSS URL

< Provide URL to any source instructions/code >

### Social Media Link

< Provide URLs for any personal social media >

***
```

## Step 4: Commit changes

- Provide brief title description of your commit (less than 70 characters)
- Provide commit message. This message should briefly describe all that is commited, along with anything that might be missing.
- Sign your Commit:
   - `Signed-off-by: FirstName LastName <Email@domain.org>`
- Commit changes (click commit changes button)

## Step 5: Submit Pull Request

For more detailed instructions on how to submit a pull request in GitHub, please visit this [GitHub Help page](https://help.github.com/articles/creating-a-pull-request/)

***

- [Contribute to an existing project](../contribute.md)
- [Return to Projects home page](../)
