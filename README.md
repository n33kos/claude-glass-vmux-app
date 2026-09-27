# vmux for Claude Glass

A Claude Glass custom app that shows this Claude session's
Voice Multiplexer channel inside the glass: voice controls, and
optionally the transcript.

- Embeds the relay's web client (`http://localhost:3100/?session=<id>`), locked to the session
  whose id is `sha256(project dir)[:12]` (the relay's session id; the glass knows the project dir).
- The relay address is fixed in the view, always `localhost` (not `127.0.0.1`: a different origin,
  so the pairing and the permissions wouldn't apply). Only the session id can be overridden, and
  only if the relay names the session differently: `claude-glass app vmux session --id <id>`
  (no `--id` = back to automatic).
- ↻ reloads the page; ≡ toggles the transcript (off by default).
- Permissions: the relay's origins, microphone, storage. Pair once with a code from
  `/voice-multiplexer:auth-code`. Settings → Apps → vmux → Reset data forgets the pairing.

## Install

    ln -s ~/claude-glass-vmux-app ~/.claude/claude-glass/apps/vmux

then restart the glass (`claude-glass close && claude-glass open`).
