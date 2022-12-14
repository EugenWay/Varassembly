// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

exports.up = function(knex) {
	return knex.schema.table('address', (table) => {
		table.string('sign_message').alter();
	});
};

exports.down = function(knex) {
	return knex.schema.table('address', (table) => {
		table.uuid('sign_message').alter();
	});
};
