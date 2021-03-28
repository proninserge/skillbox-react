const indexTemplate = (content) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>React Project</title>
            <script src="/static/client.js" type="application/javascript"></script>
        </head>
        <body>
            <div id="root">${content}</div>
        </body>
    </html>
`;

export {indexTemplate};