// Voice Multiplexer channel for this glass. The relay does all the work; this only remembers
// view preferences.
exports.init = () => ({ relay: 'http://127.0.0.1:3100', transcript: false });

exports.command = (state, command, args) => {
  if (command === 'transcript') return { ...state, transcript: args.show !== false && args.show !== 'false' };
  throw new Error(`vmux: unknown command "${command}"`);
};
