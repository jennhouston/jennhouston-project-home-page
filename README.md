# Project Home Page

Static project tracker for GitHub Pages.

## Publish On GitHub Pages

1. Create a new GitHub repository.
2. Upload these files to the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
3. In GitHub, open the repository `Settings`.
4. Go to `Pages`.
5. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save.

GitHub will publish the site at:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME/`

## Notes

- This app stores edits in each viewer's browser using `localStorage`.
- If you want everyone to see the same updated default data, update `app.js` and push/upload the new file.
