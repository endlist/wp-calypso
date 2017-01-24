/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import { createReducer } from 'state/utils';
import { TIMEZONES_RECEIVE } from 'state/action-types';

import {
	rawOffsetsSchema,
	labelsSchema,
	continentsSchema
} from './schema';

export const rawOffsets = createReducer( {}, {
	[ TIMEZONES_RECEIVE ]: ( state, actions ) => ( { rawOffsets: actions.rawOffsets } )
}, rawOffsetsSchema );

export const labels = createReducer( {}, {
	[ TIMEZONES_RECEIVE ]: ( state, actions ) => ( { labels: actions.labels } )
}, labelsSchema );

export const byContinents = createReducer( {}, {
	[ TIMEZONES_RECEIVE ]: ( state, actions ) => ( { byContinents: actions. byContinents } )
}, continentsSchema );

export default combineReducers( {
	rawOffsets,
	labels,
	byContinents,
} );
