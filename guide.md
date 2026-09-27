The user's voice channel. It connects itself: the relay is always http://localhost:3100 and the
session id comes from the project folder. Don't try to configure a URL (never 127.0.0.1). If it
shows the wrong or an empty session, check the relay's session list for this folder and, only if the
id differs, run `claude-glass app vmux session --id <relay session id>`.
