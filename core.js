// Voice Multiplexer channel for this glass. The relay does all the work; this only remembers
// view preferences. The relay URL is fixed (it must match the manifest's permissions), so it is not
// state anyone can set. The session id is worked out from the project folder; `session --id`
// overrides it only if the relay names the session differently.
exports.init = () => ({ transcript: false });

exports.command = (state, command, args) => {
  if (command === 'transcript') return { ...state, transcript: args.show !== false && args.show !== 'false' };
  if (command === 'session') {
    const id = args.id === undefined || args.id === true ? '' : String(args.id).trim();
    if (id && !/^[A-Za-z0-9_-]{1,64}$/.test(id)) throw new Error('vmux: session --id takes a relay session id (e.g. 20ca07fd5ec9)');
    const { session: _, relay: __, ...rest } = state; // `relay` was state in older versions: drop it
    return id ? { ...rest, session: id } : rest;
  }
  throw new Error(`vmux: unknown command "${command}"`);
};
