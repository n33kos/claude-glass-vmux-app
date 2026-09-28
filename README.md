# vmux for Claude Glass

A [Claude Glass](https://github.com/n33kos/claude-glass) app that puts this Claude session's
[Voice Multiplexer](https://github.com/n33kos/claude-voice-multiplexer) channel inside the glass:
voice controls, and optionally the transcript. Pin it to a sidebar and talk to Claude while you
watch it work.

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

Needs [Claude Glass](https://github.com/n33kos/claude-glass) and a running
[Voice Multiplexer](https://github.com/n33kos/claude-voice-multiplexer).

```sh
git clone https://github.com/n33kos/claude-glass-vmux-app ~/.claude/claude-glass/apps/vmux
```

(or clone it anywhere and symlink the folder to `~/.claude/claude-glass/apps/vmux`), then restart
the glass: `claude-glass close && claude-glass open`.

## License

MIT
