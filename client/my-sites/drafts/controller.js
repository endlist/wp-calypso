/**
 * External Dependencies
 */
import React from 'react';
import i18n from 'i18n-calypso';

/**
 * Internal Dependencies
 */
import sitesFactory from 'lib/sites-list';
import route from 'lib/route';
import { setDocumentHeadTitle as setTitle } from 'state/document-head/actions';
import { renderPage } from 'lib/react-helpers';

const sites = sitesFactory();

module.exports = {

	drafts: function( context ) {
		var Drafts = require( 'my-sites/drafts/main' ),
			siteID = route.getSiteFragment( context.path );

		// FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.
		context.store.dispatch( setTitle( i18n.translate( 'Drafts', { textOnly: true } ) ) );

		renderPage(
			React.createElement( Drafts, {
				siteID: siteID,
				sites: sites,
				trackScrollPage: function() {}
			} ),
			context
		);
	}

};
