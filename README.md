# NGScullyNetlifyCMS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

Testing out a static site with Scully and Netlify CMS.

Steps so far:

1. Create Angular App: ng new AwesomeApp
2. Add Scully: ng add @scullyio/init
3. Update Angular.json file to include "src/admin" to your build/options/assets array.
4. Create src/admin folder
5. Add index.html and config.yml files to src/admin per netlify cms docs.
6. Initialize netlify project and deploy.
7. Update src/admin/index.html to include the Auth widget.
8. Netlify -> Enable Identity.
9. Netlify -> Enable Git Gateway
10. Add User
11. Update src/admin/index.html to include the Auth widget.
12. Received invite. Had to modify the link a bit. not adding the /admin in there.
13. Create an src/templates (or whatever) folder and include confirmation.html, invitation.html, recovery.html, email-change.html (or whatever you want).
14. Add this folder to angular.json assets array (same as earlier step 3)
15. Update Netlify Identity settings to use these files for the repsective email templates. Example templates can be found in this doc:
    https://community.netlify.com/t/common-issue-netlify-cms-git-gateway-email-not-confirmed/10690
