const indexTemplate = (content, token) => `
    <!DOCTYPE html>
    <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <title>React Project</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <script src="/static/client.js" type="application/javascript"></script>
            <script>
                window.__token__ = '${token}'
            </script>
        </head>
        <body>
            <div id="root">${content}</div>
            <div id="modal_root"></div>
        </body>
    </html>
`;

export {indexTemplate};