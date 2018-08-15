import test from 'ava';
import ecoprintCli from '.';

test('title', t => {
	const err = t.throws(() => {
		ecoprintCli(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(ecoprintCli('unicorns'), 'unicorns & rainbows');
});
