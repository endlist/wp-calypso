/**
 * Internal dependencies
 */
import { getSiteOption } from 'state/sites/selectors';

/**
 * Determines if site's permalinks are editable
 *
 * @alias areSitePermalinksEditable
 *
 * @param {Object} state Global state tree
 * @param {Number} siteId Site ID
 * @return {Boolean} true if the site's permalinks are editable
 */
export default function areSitePermalinksEditable( state, siteId ) {
	const permalinkStructure = getSiteOption( state, siteId, 'permalink_structure' );
	if ( ! permalinkStructure ) {
		return false;
	}

	return /\/%postname%\/?/.test( permalinkStructure );
}